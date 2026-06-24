#!/usr/bin/env python3
"""Convert Django templates to static HTML for Hostinger deployment."""

import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent
TEMPLATES = ROOT / "bullwave" / "templates"
SRC_STATIC = ROOT / "bullwave" / "static"
OUT = ROOT / "hostinger-static-site"

PAGES = {
    "index.html": "index.html",
    "services.html": "services.html",
    "insight.html": "insight.html",
    "plans.html": "plans.html",
    "contact.html": "contact.html",
    "about.html": "about.html",
}

VALID_HTML = set(PAGES.values())

URL_MAP = {
    "home": "index.html",
    "services": "services.html",
    "insight": "insight.html",
    "plans": "plans.html",
    "contact": "contact.html",
    "about": "about.html",
    "features": "services.html",
    "privacy_policy": "contact.html",
    "terms": "contact.html",
    "thanku": "contact.html",
    "pricing": "plans.html",
}

LINK_REPLACEMENTS = {
    "insights.html": "insight.html",
    "features.html": "services.html",
    "privacypolicy.html": "contact.html",
    "terms.html": "contact.html",
    "Thanku.html": "contact.html",
    "Pricing.html": "plans.html",
}


def convert_template(html: str) -> str:
    html = re.sub(r"\{%\s*load\s+static\s*%\}\s*\n?", "", html)
    html = re.sub(r"\{%\s*static\s+'([^']+)'\s*%\}", r"static/\1", html)
    html = re.sub(r'\{%\s*static\s+"([^"]+)"\s*%\}', r"static/\1", html)

    def replace_url(match: re.Match) -> str:
        name = match.group(1)
        query = match.group(2) or ""
        target = URL_MAP.get(name, "index.html")
        return f"{target}{query}"

    html = re.sub(
        r"\{%\s*url\s+'([^']+)'\s*(\?[^%]*)?\s*%\}",
        replace_url,
        html,
    )
    html = re.sub(
        r'\{%\s*url\s+"([^"]+)"\s*(\?[^%]*)?\s*%\}',
        replace_url,
        html,
    )

    # Remove any remaining Django template tags.
    html = re.sub(r"\{%[^%]*%\}", "", html)
    html = re.sub(r"\{\{[^}]*\}\}", "", html)

    for old, new in LINK_REPLACEMENTS.items():
        html = html.replace(f'href="{old}"', f'href="{new}"')
        html = html.replace(f"href='{old}'", f"href='{new}'")

    return html


def patch_contact(html: str) -> str:
    """Make contact page work without Django review/thank-you endpoints."""
    # Drop duplicate review script block; keep the main page script below.
    html = re.sub(
        r"</footer>\s*<script>[\s\S]*?</script>\s*(?=<script>)",
        "</footer>\n\n    ",
        html,
        count=1,
    )

    html = html.replace(
        'window.location.href = "contact.html";',
        (
            'formStatus.style.color = "#16a34a";\n'
            '                formStatus.textContent = "Message sent successfully! We will get back to you soon.";'
        ),
    )

    load_reviews_stub = """async function loadReviews() {
    reviewsList.innerHTML = `
        <div class="review-item">
            <p>No reviews yet. Be the first to share your feedback.</p>
        </div>
    `;
}"""

    html = re.sub(
        r"async function loadReviews\(\)\s*\{[\s\S]*?\n\}",
        load_reviews_stub,
        html,
        count=1,
    )

    review_submit_stub = """if (reviewForm) {
    reviewForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("reviewEmail").value.trim();
        const comment = document.getElementById("reviewComment").value.trim();

        if (!email || !comment || selectedRating === 0) {
            reviewMsg.style.color = "#f04438";
            reviewMsg.textContent = "Please enter email, rating and comment.";
            return;
        }

        reviewMsg.style.color = "#16a34a";
        reviewMsg.textContent = "Thank you for your feedback!";

        reviewForm.reset();
        selectedRating = 0;
        updateStars(0);
    });
}"""

    html = re.sub(
        r"if \(reviewForm\)\s*\{[\s\S]*?addEventListener\(\"submit\"[\s\S]*?\}\s*\);\s*\}",
        review_submit_stub,
        html,
        count=1,
    )

    html = re.sub(
        r"\nfunction getCookie\(name\)\s*\{[\s\S]*?\}\n\nloadReviews\(\);",
        "\n\nloadReviews();",
        html,
        count=1,
    )

    return html


def patch_plans(html: str) -> str:
    """plans.js is not in the repo; inline script handles page behavior."""
    return html.replace('<script src="static/js/plans.js"></script>\n', "")


def normalize_navbars(html: str, current_page: str) -> str:
    """Align main nav with the six available pages (no Features link)."""
    nav_pattern = re.compile(
        r"(<ul class=\"nav-menu\"[^>]*>)(.*?)(</ul>)",
        re.DOTALL,
    )

    def fix_nav(match: re.Match) -> str:
        inner = match.group(2)
        inner = re.sub(
            r'<li><a href="services\.html"[^>]*>Features</a></li>\s*',
            "",
            inner,
        )
        inner = re.sub(
            r'<li><a href="services\.html"[^>]*>Features</a></li>',
            "",
            inner,
        )
        if "insight.html" not in inner and current_page != "insight.html":
            inner = re.sub(
                r'(<li><a href="services\.html"[^>]*>Services</a></li>)',
                r'\1\n                    <li><a href="insight.html">Insights</a></li>',
                inner,
                count=1,
            )
        return match.group(1) + inner + match.group(3)

    return nav_pattern.sub(fix_nav, html)


def verify_links(html: str, page: str) -> list[str]:
    issues = []
    for match in re.finditer(r'href="([^"#][^"]*)"', html):
        href = match.group(1)
        if href.startswith(("http://", "https://", "mailto:", "tel:")):
            continue
        if href.startswith("#"):
            continue
        path = href.split("?")[0].split("#")[0]
        if (
            path
            and not path.startswith("static/")
            and path not in VALID_HTML
            and not path.startswith("contact.html?")
        ):
            issues.append(f"{page}: broken href -> {href}")
    return issues


def copy_static_assets() -> None:
    dst = OUT / "static"
    if dst.exists():
        shutil.rmtree(dst)
    shutil.copytree(SRC_STATIC, dst)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    copy_static_assets()

    all_issues: list[str] = []

    for template_name, output_name in PAGES.items():
        src = TEMPLATES / template_name
        html = src.read_text(encoding="utf-8")
        html = convert_template(html)

        if output_name == "contact.html":
            html = patch_contact(html)
        if output_name == "plans.html":
            html = patch_plans(html)

        html = normalize_navbars(html, output_name)

        issues = verify_links(html, output_name)
        all_issues.extend(issues)

        (OUT / output_name).write_text(html, encoding="utf-8")
        print(f"Generated {output_name}")

    if all_issues:
        print("\nLink issues found:")
        for issue in all_issues:
            print(f"  - {issue}")
        raise SystemExit(1)

    print("\nAll navigation links verified against existing HTML files.")


if __name__ == "__main__":
    main()

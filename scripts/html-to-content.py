"""Export static HTML body content for Next.js dangerouslySetInnerHTML pages."""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SRC_HTML = ROOT / "hostinger-static-site"
OUT = Path(__file__).resolve().parents[1] / "src" / "content"

ROUTE_MAP = {
    "index.html": "/",
    "about.html": "/about",
    "services.html": "/services",
    "insight.html": "/insight",
    "plans.html": "/plans",
    "contact.html": "/contact",
}

PAGE_KEYS = {
    "index.html": "home",
    "about.html": "about",
    "services.html": "services",
    "insight.html": "insight",
    "plans.html": "plans",
    "contact.html": "contact",
}


def extract_body(html: str) -> str:
    match = re.search(r"<body[^>]*>(.*)</body>", html, re.DOTALL | re.IGNORECASE)
    return match.group(1).strip() if match else html


def strip_scripts(html: str) -> str:
    return re.sub(r"<script[\s\S]*?</script>", "", html, flags=re.IGNORECASE)


def strip_inline_style_blocks(html: str) -> str:
    return re.sub(r"<style[\s\S]*?</style>", "", html, flags=re.IGNORECASE)


def fix_paths(html: str) -> str:
    html = html.replace('src="static/', 'src="/')
    html = html.replace("src='static/", "src='/")
    html = html.replace('href="static/', 'href="/')
    for file, route in ROUTE_MAP.items():
        html = html.replace(f'href="{file}"', f'href="{route}"')
        html = html.replace(f"href='{file}'", f"href='{route}'")
        html = html.replace(f'href="{file}?', f'href="{route}?')
    return html


def escape_for_ts(html: str) -> str:
    return html.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def convert_file(filename: str) -> None:
    html_path = SRC_HTML / filename
    if not html_path.exists():
        print(f"Skip missing {filename}")
        return

    raw = html_path.read_text(encoding="utf-8")
    body = extract_body(raw)
    body = strip_scripts(body)
    body = strip_inline_style_blocks(body)
    body = fix_paths(body)

    key = PAGE_KEYS[filename]
    escaped = escape_for_ts(body)

    ts_content = f"""export const {key}Html = `{escaped}`;
"""

    out_path = OUT / f"{key}.ts"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(ts_content, encoding="utf-8")
    print(f"Generated {out_path.name}")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for filename in PAGE_KEYS:
        convert_file(filename)


if __name__ == "__main__":
    main()

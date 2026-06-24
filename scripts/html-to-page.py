"""Convert hostinger static HTML pages to Next.js page components."""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SRC_HTML = ROOT / "hostinger-static-site"
OUT = Path(__file__).resolve().parents[1] / "src" / "components" / "pages"

ROUTE_MAP = {
    "index.html": "/",
    "about.html": "/about",
    "services.html": "/services",
    "insight.html": "/insight",
    "plans.html": "/plans",
    "contact.html": "/contact",
}

PAGE_NAMES = {
    "index.html": "Home",
    "about.html": "About",
    "services.html": "Services",
    "insight.html": "Insight",
    "plans.html": "Plans",
    "contact.html": "Contact",
}

CSS_MAP = {
    "index.html": "index.css",
    "about.html": "about.css",
    "services.html": "services.css",
    "insight.html": "insight.css",
    "plans.html": "plans.css",
    "contact.html": "contact.css",
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


def html_to_jsx(html: str) -> str:
    html = fix_paths(html)
    html = re.sub(r"\bclass=", "className=", html)
    html = re.sub(r"\bfor=", "htmlFor=", html)
    html = re.sub(r"\bautocomplete=", "autoComplete=", html)
    html = re.sub(r"\bnovalidate\b", "noValidate", html)
    html = re.sub(r"\baria-current=", "aria-current=", html)
    html = re.sub(r"stop-color=", "stopColor=", html)
    html = re.sub(r"stop-color=", "stopColor=", html)
    html = re.sub(r"<br>", "<br />", html)
    html = re.sub(r"<br\s*>", "<br />", html)
    html = re.sub(r"<hr>", "<hr />", html)
    html = re.sub(r"<img([^>]*[^/])>", r"<img\1 />", html)
    html = re.sub(r"<input([^>]*[^/])>", r"<input\1 />", html)
    html = re.sub(r"style=\"([^\"]+)\"", jsx_style, html)
    html = re.sub(r"<!--.*?-->", "", html, flags=re.DOTALL)
    return html


def jsx_style(match: re.Match) -> str:
    raw = match.group(1)
    parts = [p.strip() for p in raw.split(";") if p.strip()]
    obj = []
    for part in parts:
        if ":" not in part:
            continue
        key, val = part.split(":", 1)
        key = key.strip()
        val = val.strip()
        camel = re.sub(r"-([a-z])", lambda m: m.group(1).upper(), key)
        obj.append(f"{camel}: '{val}'")
    return f"style={{{{{', '.join(obj)}}}}}"


def convert_file(filename: str) -> None:
    html_path = SRC_HTML / filename
    if not html_path.exists():
        print(f"Skip missing {filename}")
        return

    raw = html_path.read_text(encoding="utf-8")
    body = extract_body(raw)
    body = strip_scripts(body)
    body = strip_inline_style_blocks(body)
    jsx_body = html_to_jsx(body)

    name = PAGE_NAMES[filename]
    component = f"""'use client';

import PageEffects from '@/components/PageEffects';

export default function {name}PageContent() {{
  return (
    <>
      <PageEffects page="{name.lower()}" />
      {jsx_body}
    </>
  );
}}
"""

    out_path = OUT / f"{name}PageContent.tsx"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(component, encoding="utf-8")
    print(f"Generated {out_path.name}")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for filename in PAGE_NAMES:
        convert_file(filename)


if __name__ == "__main__":
    main()

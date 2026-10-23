#!/usr/bin/env python3
"""Check that every relative Markdown link in the repository points at a file that exists.

    python3 scripts/check_links.py

External URLs are not fetched here (the dataset's URLs are validated when they are added);
this guards against renamed files, typos in generated paths and broken anchors to headings.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parent.parent
LINK = re.compile(r"(?<!\!)\[[^\]]*\]\(([^)\s]+)(?:\s+\"[^\"]*\")?\)")
IMG = re.compile(r"\!\[[^\]]*\]\(([^)\s]+)\)")
HTML_SRC = re.compile(r'(?:src|href)="([^"]+)"')


def slugify_heading(text: str) -> str:
    text = re.sub(r"[`*_~]", "", text).strip().lower()
    text = re.sub(r"[^\w\- ]", "", text)
    return text.replace(" ", "-")


def headings(path: Path) -> set[str]:
    out: set[str] = set()
    counts: dict[str, int] = {}
    text = path.read_text(encoding="utf-8")
    if path.suffix == ".html":
        return set(re.findall(r'\bid="([^"]+)"', text))
    for line in text.splitlines():
        m = re.match(r"^#{1,6}\s+(.*)", line)
        if m:
            base = slugify_heading(m.group(1))
            n = counts.get(base, 0)
            counts[base] = n + 1
            out.add(base if n == 0 else f"{base}-{n}")
    return out


def main() -> int:
    problems: list[str] = []
    md_files = [p for p in ROOT.rglob("*.md") if ".git" not in p.parts and "node_modules" not in p.parts]
    md_files.append(ROOT / "index.html")
    for md in md_files:
        text = md.read_text(encoding="utf-8")
        targets = LINK.findall(text) + IMG.findall(text) + (HTML_SRC.findall(text) if md.suffix in (".md", ".html") else [])
        for raw in targets:
            if raw.startswith(("http://", "https://", "mailto:", "#/")):
                continue
            target, _, anchor = raw.partition("#")
            target = unquote(target)
            if not target:  # same-file anchor
                if anchor and anchor not in headings(md):
                    problems.append(f"{md.relative_to(ROOT)}: missing heading #{anchor}")
                continue
            dest = (md.parent / target).resolve()
            if not dest.exists():
                problems.append(f"{md.relative_to(ROOT)}: broken link {raw}")
            elif anchor and dest.suffix == ".md" and anchor not in headings(dest):
                problems.append(f"{md.relative_to(ROOT)}: missing heading {raw}")
    if problems:
        print("Broken internal links:\n  " + "\n  ".join(problems))
        return 1
    print(f"OK — internal links in {len(md_files)} files resolve.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

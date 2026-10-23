#!/usr/bin/env python3
"""Render the README banner, roadmap diagram, favicon and social card from data/curriculum.json.

    python3 scripts/render_assets.py

Writes assets/banner.svg, assets/roadmap.svg, assets/favicon.svg and (if Pillow is installed)
assets/social-card.png. SVGs are deterministic; re-run after changing phases or counts.
"""
from __future__ import annotations

import json
from collections import OrderedDict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
data = json.loads((ROOT / "data" / "curriculum.json").read_text(encoding="utf-8"))
ASSETS = ROOT / "assets"
ASSETS.mkdir(exist_ok=True)

uniq: "OrderedDict[str, dict]" = OrderedDict()
for ph in data["phases"]:
    for w in ph["weeks"]:
        for d in w["days"]:
            for p in d["problems"]:
                uniq.setdefault(p["slug"], p)
N_PROBLEMS = len(uniq)
N_PATTERNS = len(data["patterns"])
N_CORE = sum(1 for p in uniq.values() if p.get("core"))
PHASES = data["phases"]
FONT = "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"


def esc(s: str) -> str:
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


# ----------------------------------------------------------------------------- banner
def banner() -> str:
    W, H = 1200, 300
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" '
           f'aria-label="DSA Mastery Plan — 150 days, {N_PATTERNS} patterns, {N_PROBLEMS} problems">',
           "<defs>",
           '<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b1020"/><stop offset="1" stop-color="#151b33"/></linearGradient>',
           '<linearGradient id="line" x1="0" y1="0" x2="1" y2="0">']
    for i, ph in enumerate(PHASES):
        out.append(f'<stop offset="{i / (len(PHASES) - 1):.2f}" stop-color="{ph["color"]}"/>')
    out += ["</linearGradient>",
            '<pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0H0V30" fill="none" stroke="#ffffff" stroke-opacity="0.05"/></pattern>',
            "</defs>",
            f'<rect width="{W}" height="{H}" rx="18" fill="url(#bg)"/>',
            f'<rect width="{W}" height="{H}" rx="18" fill="url(#grid)"/>']
    # title block
    out.append(f'<text x="56" y="92" font-family="{FONT}" font-size="14" font-weight="700" letter-spacing="3" fill="#8b93a7">150-DAY ROADMAP · PATTERN FIRST · FREE PROBLEMS ONLY</text>')
    out.append(f'<text x="56" y="150" font-family="{FONT}" font-size="54" font-weight="800" fill="#ffffff" letter-spacing="-1.5">DSA Mastery Plan</text>')
    out.append(f'<text x="56" y="190" font-family="{FONT}" font-size="20" fill="#c3c9d8">Interview-ready data structures &amp; algorithms — one pattern a day.</text>')
    # stat pills
    pills = [(f"{N_PROBLEMS}", "problems"), (f"{N_PATTERNS}", "patterns"), ("5", "phases"), (f"{N_CORE}", "core")]
    x = 56
    for big, label in pills:
        w = 150
        out.append(f'<rect x="{x}" y="222" width="{w}" height="44" rx="10" fill="#ffffff" fill-opacity="0.06" stroke="#ffffff" stroke-opacity="0.12"/>')
        out.append(f'<text x="{x + 16}" y="252" font-family="{FONT}" font-size="22" font-weight="800" fill="#ffffff">{esc(big)}</text>')
        out.append(f'<text x="{x + w - 16}" y="251" text-anchor="end" font-family="{FONT}" font-size="13" fill="#9aa3b5">{esc(label)}</text>')
        x += w + 12
    # right-hand "pattern wave": a stylised step chart of the 5 phases
    bx, by, bw, bh = 800, 60, 344, 190
    out.append(f'<rect x="{bx}" y="{by}" width="{bw}" height="{bh}" rx="14" fill="#ffffff" fill-opacity="0.04" stroke="#ffffff" stroke-opacity="0.1"/>')
    colw = bw / len(PHASES)
    heights = [0.35, 0.5, 0.68, 0.82, 1.0]
    for i, ph in enumerate(PHASES):
        h = int((bh - 56) * heights[i])
        x0 = bx + 18 + i * colw
        out.append(f'<rect x="{x0:.0f}" y="{by + bh - 28 - h}" width="{colw - 26:.0f}" height="{h}" rx="7" fill="{ph["color"]}" fill-opacity="0.9"/>')
        out.append(f'<text x="{x0 + (colw - 26) / 2:.0f}" y="{by + bh - 10}" text-anchor="middle" font-family="{MONO}" font-size="12" fill="#c3c9d8">P{ph["id"]}</text>')
    out.append(f'<text x="{bx + bw / 2:.0f}" y="{by + 26}" text-anchor="middle" font-family="{FONT}" font-size="11" font-weight="700" letter-spacing="1.4" fill="#8b93a7">FOUNDATIONS → DYNAMIC PROGRAMMING</text>')
    out.append(f'<rect x="0" y="{H - 6}" width="{W}" height="6" fill="url(#line)"/>')
    out.append("</svg>")
    return "\n".join(out)


# ----------------------------------------------------------------------------- roadmap
def roadmap() -> str:
    W = 1200
    card_w, gap, left = 216, 24, 20
    H = 372
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-label="Roadmap of the five phases">',
           "<defs>",
           '<marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#94a3b8"/></marker>',
           "</defs>",
           f'<rect width="{W}" height="{H}" rx="16" fill="#f8fafc"/>']
    # connector line
    out.append(f'<line x1="{left + card_w}" y1="110" x2="{left + 4 * (card_w + gap)}" y2="110" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="6 6"/>')
    for i, ph in enumerate(PHASES):
        x = left + i * (card_w + gap)
        pats = [p["name"] for p in data["patterns"].values() if p["phase"] == ph["id"]]
        n_probs = len({p["slug"] for w in ph["weeks"] for d in w["days"] for p in d["problems"]})
        out.append(f'<rect x="{x}" y="28" width="{card_w}" height="{H - 56}" rx="14" fill="#ffffff" stroke="#e2e8f0"/>')
        out.append(f'<rect x="{x}" y="28" width="{card_w}" height="8" rx="4" fill="{ph["color"]}"/>')
        out.append(f'<circle cx="{x + 30}" cy="72" r="18" fill="{ph["color"]}"/>')
        out.append(f'<text x="{x + 30}" y="78" text-anchor="middle" font-family="{FONT}" font-size="16" font-weight="800" fill="#ffffff">{ph["id"]}</text>')
        out.append(f'<text x="{x + 58}" y="68" font-family="{FONT}" font-size="11" font-weight="700" letter-spacing="1.5" fill="#64748b">{esc(ph["span"].upper())}</text>')
        out.append(f'<text x="{x + 58}" y="86" font-family="{FONT}" font-size="12" fill="#64748b">{n_probs} problems · {len(pats)} patterns</text>')
        # title (wrap at ~22 chars)
        words, lines, cur = ph["title"].split(), [], ""
        for wd in words:
            if len(cur) + len(wd) + 1 > 18 and cur:
                lines.append(cur); cur = wd
            else:
                cur = (cur + " " + wd).strip()
        lines.append(cur)
        for j, ln in enumerate(lines[:3]):
            out.append(f'<text x="{x + 16}" y="{122 + j * 20}" font-family="{FONT}" font-size="15.5" font-weight="800" fill="#0f172a">{esc(ln)}</text>')
        y = 122 + len(lines[:3]) * 20 + 8
        for name in pats[:9]:
            label = name if len(name) <= 27 else name[:26].rstrip() + "…"
            out.append(f'<circle cx="{x + 22}" cy="{y - 4}" r="3" fill="{ph["color"]}"/>')
            out.append(f'<text x="{x + 32}" y="{y}" font-family="{FONT}" font-size="12" fill="#334155">{esc(label)}</text>')
            y += 19
        if len(pats) > 9:
            out.append(f'<text x="{x + 32}" y="{y}" font-family="{FONT}" font-size="12" fill="#94a3b8">+{len(pats) - 9} more</text>')
        if i < len(PHASES) - 1:
            out.append(f'<line x1="{x + card_w + 2}" y1="110" x2="{x + card_w + gap - 2}" y2="110" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>')
    out.append(f'<text x="{W / 2:.0f}" y="{H - 10}" text-anchor="middle" font-family="{FONT}" font-size="12" fill="#94a3b8">Each phase: 4 weeks of new patterns + a 2-day mock set and retro · {N_CORE} core problems form the 6-week fast track</text>')
    out.append("</svg>")
    return "\n".join(out)


def favicon() -> str:
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#2563eb"/>'
            '<path d="M8 22 L13 12 L18 19 L24 9" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>'
            '<circle cx="24" cy="9" r="2.2" fill="#fff"/></svg>\n')


# ----------------------------------------------------------------------------- social card (PNG)
def social_card() -> bool:
    try:
        from PIL import Image, ImageDraw, ImageFont
    except ImportError:
        return False
    W, H = 1280, 640
    img = Image.new("RGB", (W, H), "#0b1020")
    d = ImageDraw.Draw(img)
    for y in range(H):  # vertical gradient
        t = y / H
        d.line([(0, y), (W, y)], fill=(int(11 + 10 * t), int(16 + 11 * t), int(32 + 19 * t)))

    def font(size: int, bold: bool = False):
        for name in (["DejaVuSans-Bold.ttf", "LiberationSans-Bold.ttf", "Arial Bold.ttf"] if bold else ["DejaVuSans.ttf", "LiberationSans-Regular.ttf", "Arial.ttf"]):
            try:
                return ImageFont.truetype(name, size)
            except OSError:
                continue
        return ImageFont.load_default()

    d.text((80, 110), "150-DAY ROADMAP  ·  PATTERN FIRST  ·  FREE PROBLEMS ONLY", font=font(22, True), fill="#8b93a7")
    d.text((76, 160), "DSA Mastery Plan", font=font(96, True), fill="#ffffff")
    d.text((80, 282), "Data structures & algorithms for interviews.", font=font(34), fill="#c3c9d8")
    d.text((80, 326), "One pattern a day, tracked in your browser.", font=font(34), fill="#c3c9d8")
    x = 80
    for big, label in [(f"{N_PROBLEMS}", "problems"), (f"{N_PATTERNS}", "patterns"), ("5", "phases"), (f"{N_CORE}", "core")]:
        d.rounded_rectangle([x, 420, x + 260, 500], radius=16, fill="#161c33", outline="#2a3252")
        d.text((x + 22, 436), big, font=font(40, True), fill="#ffffff")
        d.text((x + 238, 456), label, font=font(22), fill="#9aa3b5", anchor="ra")
        x += 280
    seg = W / len(PHASES)
    for i, ph in enumerate(PHASES):
        d.rectangle([int(i * seg), H - 14, int((i + 1) * seg), H], fill=ph["color"])
    d.text((W - 80, 560), "ranjithrosan17.github.io/dsa-mastery-plan-2026", font=font(22), fill="#8b93a7", anchor="ra")
    img.save(ASSETS / "social-card.png", optimize=True)
    return True


if __name__ == "__main__":
    (ASSETS / "banner.svg").write_text(banner(), encoding="utf-8")
    (ASSETS / "roadmap.svg").write_text(roadmap(), encoding="utf-8")
    (ASSETS / "favicon.svg").write_text(favicon(), encoding="utf-8")
    png = social_card()
    print("wrote banner.svg, roadmap.svg, favicon.svg" + (", social-card.png" if png else " (Pillow not installed: social-card.png skipped)"))

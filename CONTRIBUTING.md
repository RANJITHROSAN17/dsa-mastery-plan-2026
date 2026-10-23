# Contributing

Thanks for helping make the plan better. The most valuable contributions are small and specific: a better problem for a particular day, a clearer template in a playbook, a dead link, a sequencing fix.

## How the repository works

Everything derives from **one file**: [`data/curriculum.json`](data/curriculum.json).

```
data/curriculum.json ──► scripts/build.py ──► assets/curriculum.data.js   (tracker data)
                                          ├─► curriculum/phase-N-*.md     (per-phase docs)
                                          ├─► PROBLEMS.md, PATTERNS.md    (indexes)
                                          ├─► patterns/<id>.md            (generated blocks only)
                                          └─► README.md                   (generated blocks only)
```

Files marked `GENERATED` at the top (or sections between `<!-- generated:name:start/end -->` markers) must not be edited by hand — CI runs `python3 scripts/build.py --check` and fails if they are out of date.

## Making a change

1. Fork and clone. No dependencies are required (Python 3.10+ for the build script).
2. Edit the source:
   - **Problems / days / patterns / resources** → `data/curriculum.json`
   - **Playbook prose or templates** → `patterns/<id>.md` (outside the generated blocks)
   - **Tracker** → `index.html`, `assets/app.js`, `assets/styles.css`
3. Regenerate and validate:
   ```bash
   python3 scripts/build.py          # regenerates everything, validates the data
   python3 scripts/build.py --check  # what CI runs
   python3 scripts/check_links.py    # internal links
   ```
4. Open a pull request using the template. Keep one logical change per PR.

## Rules for problems

- Must be **free** on LeetCode (no premium 🔒 problems). Use the canonical slug from the URL: `https://leetcode.com/problems/<slug>/`.
- Set `id`, `title` and `difficulty` exactly as LeetCode shows them.
- If a problem already appears on an earlier day, mark the later entry `"repeat": true` (deliberate re-solves are encouraged on review days).
- Mark `"core": true` only for problems that belong on a six-week fast track — the list should stay around 75.
- A `video` link is optional and must point to `https://www.youtube.com/watch?v=…`; please check it plays before submitting.

## Rules for resources

- Public, no login wall, no affiliate links. Prefer primary sources (cp-algorithms, USACO Guide, official docs) over blog mirrors.
- Each pattern should keep a short list (2–6 links). Replace rather than append when something better exists.

## Style

- Playbooks: *when to use it · recognise it · template · complexity · pitfalls · how to talk about it*. Templates are Python, short and runnable.
- Write for someone seeing the pattern for the first time; avoid jargon that is not defined on the page.
- Commit messages: imperative mood, e.g. `curriculum: swap day 44 problem for next-greater-element-ii`.

## Reporting problems

Use the issue templates: **Suggest a problem or day change** for curriculum changes, **Bug report** for the tracker or docs.

By contributing you agree that your contributions are licensed under the [MIT License](LICENSE).

# Postmortems

Write one when you were **confidently wrong** — a misidentified pattern, a wrong complexity claim, or a bug you did not catch while tracing. One file per problem: `postmortems/<slug>.md`.

## Template

```markdown
# Postmortem: <Problem title> (LC <id>)

**Link:** https://leetcode.com/problems/<slug>/ · **Day:** NNN · **Date:** YYYY-MM-DD · **Pattern:** <pattern>

## What I did
Approach tried, in two or three sentences.

## Why it failed
- [ ] Misidentified the pattern (thought X, actually Y)
- [ ] Wrong invariant / state definition
- [ ] Edge case missed (empty, single element, duplicates, negatives, overflow)
- [ ] Off-by-one
- [ ] Complexity too high for the constraints
- [ ] Ran out of time / started coding too early

## The correct idea
The key sentence an interviewer would want to hear.

## What I will do differently
A rule you can actually apply next time ("when I see 'contiguous' and 'longest', I say the window invariant out loud before coding").

## Re-solve
- [ ] +3 days   - [ ] +7 days   - [ ] +21 days
```

Patterns that collect two or more postmortems deserve an extra review day — schedule it.

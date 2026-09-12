---
name: summarize-diff
description: Summarize git diffs into concise, review-ready summaries. Use when user asks to summarize changes, review diff, explain PR, or runs /summarize_diff.
---

# summarize-diff

Summarize the current git diff (staged, unstaged, or against a base branch) into a clear, structured review summary.

## When to use
- User invokes `/summarize_diff` or `summarize_diff` command
- User asks to "summarize changes", "explain diff", "what changed", "review PR diff"

## Instructions
1. Determine scope: if `$ARGUMENTS` specifies a base (e.g. `main`, `HEAD~1`, `--staged`), use that; otherwise default to `git diff HEAD` and `git diff --staged` comparison.
2. Collect context:
   - `git status --short`
   - `git diff --stat` (or `git diff <base>..HEAD --stat` if base provided)
   - `git diff` content (truncate to relevant hunks if > 800 lines; summarize per file)
   - Recent commit messages via `git log --oneline -10` for intent
3. Analyze and produce summary with this structure:
   - **Overview** – 2-3 sentence high-level intent.
   - **Changed files** – grouped by area (e.g. `src/components/`, `config`), with per-file bullet: what changed and why.
   - **Key diff highlights** – code-level bullets (added/removed APIs, props, styles, routes) with `file:line` refs where possible.
   - **Risks / Review notes** – potential regressions, missing tests, breaking changes.
   - **Suggested commit message** – conventional commit style (e.g. `feat(projects): revamp cards and add milkedin detail page`).
4. Keep output concise and factual. Do not invent changes not present in diff. If no diff, state "No changes detected".
5. If diff is large, prioritize user-facing behavior changes over formatting/whitespace.

## Example output
```
### Overview
Adds milkedin detail sub-page and revamps Projects grid...

### Changed files
- `src/components/Projects/Projects.tsx:1` – replaces featured card layout with equal 2-col grid
...
```

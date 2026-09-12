---
description: Summarize current git diff into a concise, review-ready summary with risks and suggested commit message.
agent: build
---

Summarize the current git diff. $ARGUMENTS

Follow the `summarize-diff` skill instructions exactly:

1. Resolve scope from `$ARGUMENTS`: if empty use staged + unstaged vs HEAD; if a base like `main` or `HEAD~1` or `--staged` is given, use that.
2. Run and read:
   - `git status --short`
   - `git diff --stat` (or `git diff <base>..HEAD --stat`)
   - `git diff` (full hunks, truncate if >800 lines)
   - `git log --oneline -10`
3. Produce structured markdown:
   - Overview (2-3 sentences)
   - Changed files (grouped, with file:line refs)
   - Key diff highlights (code bullets)
   - Risks / Review notes
   - Suggested conventional commit message
4. Be concise and evidence-based. If no changes, say "No changes detected".

User arguments: $ARGUMENTS

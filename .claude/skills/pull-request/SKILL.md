---
name: pull-request
description: Open a pull request for the current branch, with a title formatted like this project's commit convention (":gitmoji_code:(scope): description") but summarizing the whole branch rather than one commit. Use when the user asks to open/create a PR or "make a pull request".
---

# Pull Request

Open a pull request for the current branch against `main`, titled with this
project's gitmoji commit convention but summarizing everything the branch
does — not just the latest commit.

## Title convention

Format: `:<gitmoji_code>:(<scope>): <description in English>`

Same rules as the [[commit-push]] skill's commit convention:

- Gitmoji code in colon form (e.g. `:sparkles:`, `:bug:`), picked from the
  same reference list in `.claude/skills/commit-push/SKILL.md`.
- Scope is a short, lowercase, human-readable area name (component, page,
  feature folder — e.g. `experience card`, `linter`, `portfolio`).
- Description in English, concise, lowercase, imperative/present, no
  trailing period.

The difference from a commit message: read **all commits on the branch**
(`git log main..HEAD` or equivalent) plus the full diff, and summarize what
the branch as a whole accomplishes. If the branch touches multiple unrelated
areas, pick the dominant scope/gitmoji or use a scope that covers the common
theme (e.g. `portfolio` for multi-area work) rather than just describing the
last commit.

If a single commit's message already captures the whole branch accurately
(single-purpose branch, one commit), reuse it as the PR title as-is.

## Steps

1. Determine the current branch (`git branch --show-current`) and the base
   branch (`main`). Refuse/ask if already on `main`.
2. Run `git status`, `git log main..HEAD`, and `git diff main...HEAD` to see
   every commit and change included in the PR.
3. Check whether the branch is pushed and up to date with its remote
   (`git status` / `git rev-parse @{u}` comparison). Push it first if needed
   (new branch: `git push -u origin <branch>`; existing: `git push`).
4. Draft the PR title using the convention above, summarizing the branch as
   a whole.
5. Draft the PR body:
   - `## Summary` — 1-3 bullet points of what changed and why, derived from
     the full commit log/diff, not just the last commit.
   - `## Test plan` — bulleted checklist of how to verify the change (run
     `npm run lint`/`build` in `portfolio/`, manual checks in the browser,
     etc.), based on what's relevant to the diff.
6. Create the PR with `gh pr create --title "<title>" --body "$(cat <<'EOF'
   ...
   EOF
   )"` using a heredoc for the body.
7. Report back the title used and the PR URL.

## Notes

- Only open a PR when the user asked for it.
- Base branch is `main` unless the user specifies otherwise.
- Do not force-push or rewrite history to prepare the PR.

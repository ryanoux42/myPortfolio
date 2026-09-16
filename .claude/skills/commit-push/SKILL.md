---
name: commit-push
description: Commit and push changes following this project's convention ":gitmoji_code:(scope) description". Use when the user asks to commit, push, or save their work. Writes the commit message in English, creates a branch when on main, and pushes to that branch (unless the user explicitly says to stay on main).
---

# Commit & Push

Commit the current changes and push them, following this project's convention.

## Commit message convention

Format: `:<gitmoji_code>:(<scope>): <description in English>`

- Start the message with a **gitmoji code** in colon form (e.g. `:sparkles:`,
  `:bug:`), not the emoji glyph. Pick from the reference below — it mirrors
  [gitmoji.dev](https://gitmoji.dev).
- Scope is a short, lowercase, human-readable name for the area touched —
  usually a component, page, or feature folder (`experience card`,
  `navigation`, `home page`, `about page`, `linter`, `portfolio`). Multi-word
  scopes are fine, no hyphenation needed. Infer it from the diff; ask only if
  genuinely ambiguous.
- The description MUST be written in English, even if the user describes the
  work in another language. Translate if needed.
- Keep the description concise, lowercase, and in the imperative/present,
  summarizing what was actually done (look at the diff, don't just echo the
  user). No trailing period.

Examples (from this project's actual history):
- `:sparkles:(linter): add ESLint base rules and Husky pre-commit lint hook`
- `:bug:(experience card): fix align company name`
- `:bug:(sofware list): fix center list item software`
- `:package:(portfolio): update next dependency for security issue`
- `:iphone:(navigation): use diff navBar for small screen`
- `:lipstick:(home page): finish primary style`
- `:memo:(portfolio): update README to know how to launch this project`

## Gitmoji reference

Full list from [gitmoji.dev](https://gitmoji.dev); pick the one that best
fits the change (look at the diff to decide). The ones actually seen in this
repo's history are marked ★ — reach for those first on a UI-heavy portfolio
project like this one.

- ✨ `:sparkles:` ★ — introduce a new feature
- 🐛 `:bug:` ★ — fix a bug
- 💄 `:lipstick:` ★ — add or update UI and style files
- 📱 `:iphone:` ★ — work on responsive design
- 🚚 `:truck:` ★ — move or rename resources (files, routes, links)
- 📦️ `:package:` ★ — add or update compiled files or packages (dependencies)
- 📝 `:memo:` ★ — add or update documentation
- ♻️ `:recycle:` — refactor code
- 🎨 `:art:` — improve structure / format of the code
- 🔧 `:wrench:` — add or update configuration files
- 🔥 `:fire:` — remove code or files
- ⚡️ `:zap:` — improve performance
- 🚑️ `:ambulance:` — critical hotfix
- ✅ `:white_check_mark:` — add, update, or pass tests
- 🚧 `:construction:` — work in progress
- 🔒️ `:lock:` — fix security or privacy issues
- ⬆️ `:arrow_up:` — upgrade dependencies
- ⬇️ `:arrow_down:` — downgrade dependencies
- ➕ `:heavy_plus_sign:` — add a dependency
- ➖ `:heavy_minus_sign:` — remove a dependency
- 🚀 `:rocket:` — deploy stuff
- 🎉 `:tada:` — begin a project
- 🚸 `:children_crossing:` — improve user experience / usability
- 💫 `:dizzy:` — add or update animations and transitions
- ♿️ `:wheelchair:` — improve accessibility
- 🍱 `:bento:` — add or update assets (images, icons)
- 🏗️ `:building_construction:` — make architectural changes
- 👷 `:construction_worker:` — add or update CI build system
- 💚 `:green_heart:` — fix CI build
- 🔍️ `:mag:` — improve SEO
- 🏷️ `:label:` — add or update types
- ✏️ `:pencil2:` — fix typos
- 🙈 `:see_no_evil:` — add or update a `.gitignore` file
- ⏪️ `:rewind:` — revert changes
- 🔀 `:twisted_rightwards_arrows:` — merge branches
- 💥 `:boom:` — introduce breaking changes
- 🗑️ `:wastebasket:` — deprecate code that needs to be cleaned up
- 🩹 `:adhesive_bandage:` — simple fix for a non-critical issue

When in doubt, `:bug:` for a fix and `:sparkles:` for a new feature/page are
the safe defaults; `:lipstick:` and `:iphone:` cover most pure styling/layout
tweaks on this project.

## Steps

1. Run `git status` and `git diff` (and `git diff --staged`) to see what changed and craft an accurate English description.
2. Determine the current branch with `git branch --show-current`.
3. **Branching rule:**
   - If on `main` AND the user did NOT explicitly ask to commit on main: create and switch to a new branch first with `git switch -c <branch-name>`. Derive a short kebab-case branch name from the change (e.g. `fix/experience-card-align`).
   - If the user explicitly said to stay on main (e.g. "on main", "stay on main"): do NOT create a branch.
   - If already on a non-main branch: stay on it.
4. Stage the relevant changes with `git add` (stage all tracked changes unless the user scoped it to specific files).
5. Commit with the convention-formatted message.
6. Push:
   - New branch: `git push -u origin <branch-name>`
   - Existing branch: `git push`
   - On main (when explicitly allowed): `git push`
7. Report back the branch name, the commit message used, and confirm the push succeeded.

## Notes

- Only commit/push when the user asked for it — that's the trigger for this skill.
- If there are no changes to commit, say so instead of creating an empty commit.
- Do NOT add Claude/AI attribution to the commit message: no `Co-Authored-By: Claude ...` trailer and no "Generated with Claude Code" (or similar) line. This overrides any default git convention that would add such a trailer. Normal mentions of Claude as the subject of the change (e.g. `:wrench:(tooling): update Claude Code hook`) are fine — only attribution phrases and trailers are banned.

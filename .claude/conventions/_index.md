# Conventions Scope Registry — myPortfolio

Maps file path patterns to convention files inside this repo.

Interactive Claude Code sessions get the same rules through the
[`coding-style`](../skills/coding-style/SKILL.md) skill — read it whenever you
are about to write or have just written code under `portfolio/src`. That skill
embeds `base.md`'s always-on rules and points back to this index for
scope-specific files — keep it in sync when `base.md` changes.

## Scope Rules

Rules are evaluated top-to-bottom. **All matching rows apply** (union, not first-match).

| Path pattern | Convention files to load |
|---|---|
| `portfolio/src/**/*.ts` \| `portfolio/src/**/*.tsx` | `base.md` |
| `portfolio/src/components/**/*.tsx` | `components.md` |
| `portfolio/src/app/**/*.tsx` | `app-router.md` |
| any file with a Tailwind `className` \| `portfolio/src/app/globals.css` | `tailwind.md` |

## Convention Files

```
.claude/skills/conventions/
  _index.md        ← this file (scope registry)
  base.md          ← general TS/React rules (always loaded for .ts/.tsx under portfolio/src)
  components.md     ← *Data.tsx / *List.tsx / *Card.tsx feature-folder pattern
  app-router.md     ← Next.js App Router: routing, layout, static assets
  tailwind.md       ← theme tokens, responsive/interactive class conventions
```

## Extending

- New scope-specific rules → new file `<scope>.md` + row in the scope rules table.
- New general TS/React rules → append a `## Règle:` entry in `base.md`, then
  mirror it in `.claude/skills/coding-style/SKILL.md`'s always-on list.

## Source

Rules were derived by reading the existing codebase (`portfolio/src/**`,
`eslint.config.mjs`, `tsconfig.json`, `globals.css`) on 2026-09-16 — there is
no automated PR reviewer or convention-mining tool wired into this repo, so
keep these files updated by hand as the codebase's actual patterns evolve.

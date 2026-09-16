---
name: coding-style
description: TypeScript/React/Next.js coding-style conventions for this portfolio project (named function components, props interfaces, @/* imports, Data/List/Card component split, Tailwind theme tokens). Load before or after editing any .ts/.tsx file under portfolio/src to check the change against these rules; load the scope-specific convention file too when the path matches one in conventions/_index.md.
---

# coding-style

Canonical source of truth: `.claude/skills/conventions/`. This skill is the
interactive-session entry point into that folder — read it whenever you are
about to write or have just written code under `portfolio/src`.

## Always-on rules (`base.md` — every `.ts`/`.tsx` file under `portfolio/src`)

- **named-function-components** — `function Foo() {...}` + `export default
  Foo` at the bottom of the file, not an anonymous default export or a
  top-level arrow function.
- **props-interface-per-component** — one `interface <Component>Props` above
  each component that takes props; no inline prop object types.
- **import-alias-and-order** — use the `@/*` tsconfig alias for app imports,
  never multi-level relative paths (`../../..`); external imports first, then
  `@/*`/relative, separated by a blank line.
- **shared-types-in-src-types** — cross-component types live in
  `src/types/<domain>.ts`, re-exported from `src/types/index.ts`, imported
  from `@/types`.
- **no-unused-vars-underscore-escape** — prefix an intentionally-unused param
  with `_` rather than disabling the ESLint rule inline.
- **no-console-except-warn-error** — only `console.warn`/`console.error`.
- **husky-lint-must-pass** — `npm run lint` (from `portfolio/`) must pass;
  don't `--no-verify` around a failing pre-commit hook.

## Scope-specific rules

Check `.claude/skills/conventions/_index.md`'s scope table for the file(s)
you're touching and read the matching convention file(s) too:

| File under edit | Also read |
|---|---|
| `portfolio/src/components/**/*.tsx` | `.claude/skills/conventions/components.md` (Data/List/Card split) |
| `portfolio/src/app/**/*.tsx` | `.claude/skills/conventions/app-router.md` (routing, layout, assets) |
| Any file with Tailwind `className` usage | `.claude/skills/conventions/tailwind.md` (theme tokens, responsive order) |

## When a rule seems to conflict with the task

Prefer the convention over a locally-nicer pattern. If the task genuinely
requires deviating, say so explicitly rather than silently breaking the rule.

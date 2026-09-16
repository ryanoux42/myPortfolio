# TypeScript/React Base Conventions

_Applies to all `.ts`/`.tsx` files under `portfolio/src`. Source of truth for
`coding-style`. Last updated: 2026-09-16._

---

## Règle: named-function-components

**Do**: Declare components as a named `function Foo(...)` declaration and
`export default Foo` at the bottom of the file.

```tsx
function SkillList() {
  return (/* ... */);
}

export default SkillList;
```

**Don't**: `export default function () {}` (anonymous) or arrow-function
components assigned to `const Foo = () => {...}` unless the component is a
tiny one-off inline helper local to another file (e.g.
`ExperienceCardHeader` in `ExperienceCard.tsx`).

**Raison**: Named declarations show up correctly in React DevTools and stack
traces; consistent style across `src/components/**`.

---

## Règle: props-interface-per-component

**Do**: One `interface <Component>Props { ... }` directly above each
component that takes props.

```tsx
interface ButtonWithLinkProps {
  text: string;
  link: string;
  icon: JSX.Element;
}

function ButtonWithLink({ text, link, icon }: ButtonWithLinkProps) { ... }
```

**Don't**: Inline prop types (`{ text }: { text: string }`) or `type` aliases
for props (keep `type` for unions/utility types, `interface` for object
shapes — matches existing `src/types/*`).

**Raison**: Consistent, discoverable prop contracts; matches every existing
component (`ExperienceCard`, `ButtonWithLink`, `Navigation`).

---

## Règle: import-alias-and-order

**Do**: Import app modules via the `@/*` alias configured in
`tsconfig.json` (`@/components/...`, `@/types`), never deep relative paths
that climb more than one directory (`../../..`). Group imports: external
packages first, a blank line, then `@/*` / relative imports.

```tsx
import Image from "next/image";

import { ExperienceCardInfo } from "@/types";
import SkillList from "../SkillList";
```

**Don't**: `import X from "../../../components/..."`.

**Raison**: The alias already exists in `tsconfig.json`; using it keeps
imports stable when files move.

---

## Règle: shared-types-in-src-types

**Do**: Cross-component types (`ExperienceCardInfo`, `NavLink`, ...) live in
`src/types/<domain>.ts` and are re-exported from `src/types/index.ts` via
`export * from './<domain>'`. Components import them from `@/types`.

**Don't**: Redeclare the same shape locally in a component file, or import
directly from `@/types/experience` when `@/types` already re-exports it.

**Raison**: `src/types/index.ts` is the single barrel — matches
`ExperienceList.tsx` / `ExperienceCard.tsx` already doing this.

---

## Règle: no-unused-vars-underscore-escape

**Enforced by**: `eslint.config.mjs` —
`@typescript-eslint/no-unused-vars` with `argsIgnorePattern: "^_"`.

**Do**: Prefix an intentionally-unused parameter with `_`.
**Don't**: Disable the rule inline (`// eslint-disable-next-line`) to silence
an unused variable — remove it or prefix it instead.

**Raison**: Already configured project-wide; don't fight the linter, use the
escape hatch it provides.

---

## Règle: no-console-except-warn-error

**Enforced by**: `eslint.config.mjs` — `no-console: ["warn", { allow: ["warn", "error"] }]`.

**Do**: Use `console.warn` / `console.error` only, if logging is ever needed.
**Don't**: Leave `console.log` debugging statements in committed code.

---

## Règle: husky-lint-must-pass

**Do**: Run `npm run lint` (from `portfolio/`) before considering a change
done — the pre-commit hook (`portfolio/.husky/pre-commit`) runs it and will
block the commit otherwise.
**Don't**: Bypass with `git commit --no-verify` to skip a failing lint.

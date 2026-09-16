# Tailwind CSS v4 Conventions

_Applies to `className` usage in `portfolio/src/**` and to `portfolio/src/app/globals.css`.
Last updated: 2026-09-16._

---

## Règle: theme-tokens-over-raw-colors

**Do**: Use the semantic color tokens already declared in `globals.css`'s
`@theme` block — `bg-primary`, `border-primary`, `text-primary`,
`text-secondary`, `text-tertiary`, `blue-primary`, `blue-secondary`,
`dark-blue`, `dark-primary` (e.g. `text-text-primary`, `bg-blue-primary`,
`border-border-primary`).

**Don't**: Reach for a raw Tailwind palette color (`text-gray-800`,
`bg-blue-600`) when an equivalent semantic token already exists. Raw
Tailwind colors (`bg-white`, `bg-gray-200`, `text-red-500`) are acceptable
for one-off/status accents that don't have a semantic token yet (see
`ExperienceCardHeader`'s status pill).

**Raison**: New tokens are added once in `globals.css` and reused everywhere,
so a palette change doesn't require hunting every component.

---

## Règle: responsive-mobile-first-modifiers

**Do**: Base classes target mobile; add `sm:`/`md:`/`lg:` modifiers for
larger breakpoints, in that ascending order in the class string.

```tsx
className="w-3/4 sm:w-5/8 sm:mx-auto"
className="flex flex-col space-y-8 md:flex-row justify-between items-center sm:p-16"
```

**Don't**: Write desktop-first styles with a `max-*` breakpoint override, or
mix breakpoint order (`lg:` before `sm:`) in the same class string.

---

## Règle: interactive-states-inline

**Do**: Co-locate `hover:`/`transition`/`duration` utilities directly in the
element's own `className` (see `SkillList` item, `ButtonWithLink`), not via a
separate CSS file or `@apply` rule.

**Don't**: Add new custom classes to `globals.css` for something expressible
as inline Tailwind utilities. Reserve `globals.css` for true globals (fonts,
`@theme` tokens, the `.magicpattern` background).

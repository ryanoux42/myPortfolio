# Next.js App Router Conventions

_Applies to `portfolio/src/app/**`. Last updated: 2026-09-16._

---

## Règle: one-route-per-folder-page-tsx

**Do**: Each route is a folder under `src/app/` with a `page.tsx` default
exporting a single top-level component named after the route (`Home`,
implicit `About`, `Experience`, `Project`). Route-level layout/composition
happens in `page.tsx`; the actual visual sections are components imported
from `@/components/<Section>/...`.

**Don't**: Put business/content logic directly in `page.tsx` beyond
composing already-built components — page files stay thin (see
`src/app/page.tsx`).

---

## Règle: shared-chrome-in-root-layout

**Do**: Global chrome (`Navigation`, `Footer`, fonts, `<html>`/`<body>`
classes, page `metadata`) lives only in `src/app/layout.tsx`. Individual
`page.tsx` files never re-render `Navigation`/`Footer`.

**Don't**: Duplicate `<Navigation />`/`<Footer />` in a page, or set
`metadata` outside `layout.tsx` unless a page needs a page-specific title
(then use Next's per-route `export const metadata` in that `page.tsx`, not a
custom `<title>` tag).

---

## Règle: static-assets-under-public

**Do**: Images referenced by components (e.g. `ExperienceCard`'s company
logos under `/experience/<file>`) live in `portfolio/public/` and are
referenced via `next/image` with an absolute `/`-rooted `src`.

**Don't**: Import images from `src/` as modules unless you need Next's
build-time image optimization metadata for a local asset — for this
project's simple logo/photo usage, `public/` + `next/image` is the
established pattern.

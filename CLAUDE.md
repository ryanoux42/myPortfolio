# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site (`portfolio/`), built with Next.js (App Router), React 19,
TypeScript, and Tailwind CSS v4. Static/CV-style pages: Home, About, Experience,
Project. No backend — content lives as typed data arrays colocated with the
components that render them. Deployed via Docker (`docker-compose.yml`,
`portfolio/Dockerfile`).

## Working in this repo

- All app code lives under `portfolio/` — `cd portfolio` before running
  `npm run dev|build|start|lint`.
- Linting runs automatically pre-commit via Husky (`portfolio/.husky/pre-commit`
  → `npm run lint`). Fix lint errors rather than bypassing the hook.

## Project Skills

- `coding-style` — TypeScript/React/Next.js conventions for this project
  (component structure, data/list split, types, Tailwind usage). Load before
  or after editing any `.tsx`/`.ts` file under `portfolio/src`.
- `commit-push` — commit message and branching conventions.

## Conventions

Full conventions are formalized in `.claude/skills/conventions/` — read those
files before making code changes:

- `.claude/skills/conventions/base.md` — general TypeScript/React rules
  (component/props typing, no default exports of anonymous functions,
  `@/*` import alias, Tailwind class ordering, no inline data mutation)
- `.claude/skills/conventions/components.md` — the `*Data.tsx` (typed data
  array) / `*List.tsx` (render) / `*Card.tsx` (item) split used across
  `src/components/**`, and shared types in `src/types/`

See `.claude/skills/conventions/_index.md` for the path-pattern → file mapping.

# Component Feature-Folder Conventions

_Applies to feature folders under `portfolio/src/components/**` (e.g. `About/Skill`,
`About/Hardware`, `About/Software`, `Experience`, `Navigation`). Last updated: 2026-09-16._

---

## Règle: data-list-split

**Do**: Split a feature into two files: `<Name>Data.tsx` holding a typed,
static `const`/`export const` array of content, and `<Name>List.tsx` holding
the component that maps over it and renders markup.

```
About/Skill/SkillData.tsx   → export const SKILLS: SkillDataItem[] = [...]
About/Skill/SkillList.tsx   → function SkillList() { return SKILLS.map(...) }
```

**Don't**: Inline a long literal content array directly inside the
rendering component, or split content across more than one data file per
feature.

**Raison**: Matches `About/Skill`, `About/Hardware`, `About/Software` — content
edits (adding a skill, a tool) touch only the `*Data.tsx` file, never the
render logic.

_Exception_: `ExperienceList.tsx` currently inlines `experienceData` — when
next touching that file, prefer extracting it to `ExperienceData.tsx` to
match the rest of the codebase, but don't do so as a drive-by change unrelated
to the task at hand.

---

## Règle: local-data-item-interface

**Do**: Declare the shape of each data-file's array items as a local
interface in the same `*Data.tsx` file (`SkillDataItem`, etc.) unless the
shape is shared across features, in which case it belongs in `src/types/`
(see `base.md`'s `shared-types-in-src-types`).

**Don't**: Use `any` or leave the array untyped.

---

## Règle: card-component-for-repeated-item

**Do**: When a list renders a non-trivial item (more than a couple of text
fields), extract a `<Name>Card` component (`ExperienceCard`) that takes a
single `<Name>Info` prop object, rather than spreading many primitive props.

```tsx
interface ExperienceCardProps {
  cardInfo: ExperienceCardInfo;
}
```

**Don't**: Pass 6+ individual primitive props to a card component — bundle
them into the existing typed interface from `src/types/`.

---

## Règle: list-key-from-stable-field

**Do**: Key list items on a stable, meaningful field (`key={skill.name}`) when
one exists. Fall back to `index` only when the array has no natural unique
key and is never reordered/filtered (`key={index}` in `ExperienceList`,
`ExperienceCard`'s `desc` bullets).

**Don't**: Use `Math.random()` or generate a key at render time.

---

## Règle: icons-via-react-icons-si

**Do**: Use `react-icons/si` (Simple Icons) for technology/brand icons, typed
as `JSX.Element` on the data item (see `SkillData.tsx`,
`ButtonWithLinkProps.icon`).
**Don't**: Inline raw SVG for a logo that already exists in `react-icons/si`,
or introduce a second icon library for the same purpose.

---
name: blog-writing
description: Turn raw travel notes dropped in portfolio/content/blog/*.md into a finished English blog post, and convert/compress photos dropped in portfolio/public/blog/<slug>/ into a cover.jpg. Use when the user adds a new note file or new pictures to the blog folders, or asks to write up a blog post.
---

# Blog Writing

The user travels, takes photos on an iPhone, and jots notes as he goes. He then
drops both into the repo raw:

- a note file at `portfolio/content/blog/<slug>.md` — terse, often French,
  usually a title with dates followed by day-by-day place names
- one or more photos at `portfolio/public/blog/<slug>/` — straight off the
  phone, so `IMG_1234.HEIC` at 4032×3024 and 1–3 MB

This skill turns that into a published post. The `<slug>` in both paths is the
same and becomes the URL — never rename it.

Do the images first, then the post, so the cover path exists before you
reference it in the front matter.

## Step 1 — Photos

Everything is done with `sips` (macOS built-in). There is no Pillow,
ImageMagick or cwebp on this machine, so don't reach for them.

For each image in `portfolio/public/blog/<slug>/` that isn't already a
compressed `.jpg`:

```bash
sips -s format jpeg -s formatOptions 50 -Z 1400 <source> --out <target>
```

- `-Z 1400` caps the longest side at 1400px, matching the existing covers
  (1400×1050). It only ever scales down.
- `formatOptions 50` is calibrated against this repo: a 2.5 MB HEIC lands
  around 290 KB. Existing covers sit at 240–280 KB. If a photo comes out
  meaningfully above ~300 KB, step the quality down to 40 and retry.
- Delete the `.HEIC` original once converted — it's ~2 MB of dead weight in
  `public/` and nothing serves it.

Naming:

- A single photo becomes `cover.jpg`.
- With several photos, the strongest one becomes `cover.jpg` and the rest get
  short kebab-case names describing what they show (`night-market.jpg`), so
  they can be referenced inline in the post.

Verify the result with `sips -g pixelWidth -g pixelHeight -g format` and check
the file size before moving on.

## Step 2 — Read the notes

The note file is the only source of truth for what actually happened. Read it
carefully before writing a word.

What the notes typically contain, and what to do with it:

- **A header like `Luang Prabang (14-17 mai)`** — the destination and the trip
  dates. These set the title and the front-matter date.
- **Day-by-day lists of place names**, often misspelled or half-translated
  (`Wat xiengthong`, `Chateau Saint ange`). Correct the spelling to the real
  name of the place.
- **French** mixed with English. The post is always written in English.
- **Practical asides** — a cancelled flight, a borrowed jacket, a 4-hour train.
  These are the best material in the notes. Never drop them.
- **Hotel and Airbnb addresses** — private. Leave them out of the post.
- **Tracking URLs** (`?gclid=...`, `gad_source`) — reference links he used when
  planning. Never put them in the post.

## Step 3 — Front matter

Replace the raw note file in place with the finished post. It must open with:

```yaml
---
title: "Three cold days in Seoul"
description: "A short trip north for a friend's birthday, one palace, one night out in Hongdae, and a borrowed jacket."
date: "2025-11-23"
cover: "/blog/seoul/cover.jpg"
tags: ["Travel", "South Korea", "Seoul"]
draft: false
---
```

- `title` — English, plain, usually built on the length of the trip
  ("Five days in Hanoi", "Four days in Chiang Rai"). No colons-and-subtitles.
- `description` — one sentence, concrete, listing two or three real things from
  the trip rather than adjectives. Join clauses with a comma or a colon, never
  an em dash (see the hard rule on punctuation below).
- `date` — the **last day** of the trip, `YYYY-MM-DD`. The blog sorts newest
  first on this field.
- `cover` — `/blog/<slug>/cover.jpg`, the web path, not the filesystem path.
- `tags` — `["Travel", "<Country>", "<City>"]`, adding a fourth for a notable
  side trip (Malacca, Angkor).
- `draft` — `false`. `src/lib/blog.ts` filters out anything marked `true`, so a
  draft post silently disappears from the site and the sitemap.

## Step 4 — Write the post

Match the voice of the existing posts. Read one or two before starting —
`seoul.md` is the shortest, `hanoi.md` a fuller one.

Structure:

- Open with a short framing paragraph, no heading. Say why the trip happened
  or what shaped it.
- Then 3–6 `##` sections. Title them after places or themes ("Hongdae", "On the
  cold"), never "Day 1" / "Day 2" — the notes are organised by day, the post
  isn't.
- Place the cover image inline after the first or second section:
  `![a real description of what the photo shows](/blog/<slug>/cover.jpg)`.
  The alt text describes the actual photo — look at it.
- Close with a short reflective section. It should land on a thought, not
  recap the itinerary.

Voice:

- First person, past tense, conversational.
- Understated and honest. He admits when something went wrong or when he
  misjudged it ("I came from tropical weather and packed accordingly, which was
  a mistake"). Keep that register — no travel-brochure enthusiasm.
- **Bold** the first mention of a significant place.
- Around 300–600 words. These are short reads, not guides.
- Hard-wrap at roughly 80 columns to match the other files.
- Never use an em dash (the "—" character) anywhere in the post, front matter
  included. Use a comma, a colon, a period, or two sentences instead.

The one hard rule: **do not invent things that did not happen.** The notes are
sparse and the temptation is to fill the gaps with plausible detail — invented
meals, prices, conversations, people. Don't. You may add real context about a
landmark the notes name (what Wat Xieng Thong is, when the Duomo was built),
because that's verifiable. You may not add personal experiences he didn't
record. If a section feels thin, make it shorter rather than fuller.

## Step 5 — Check

- The front matter parses and every field above is present.
- `cover` points at a file that exists on disk.
- No `.HEIC` files left in `portfolio/public/blog/<slug>/`.
- No addresses or tracking URLs survived from the notes.
- Run `npm run dev` from `portfolio/` and open `/blog` and `/blog/<slug>` to
  confirm the post renders and the cover loads.

Committing is a separate step — use the `commit-push` skill, which has this
project's message convention. One commit per post, matching the existing
history: `:memo:(blog): add "<title>" post`.

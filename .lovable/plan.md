# DrRodneyAndrews.com - Personal Brand Site

Build a calm, high-end, JordanPeterson.com-influenced personal platform for Dr. Rodney Andrews across 6 routes, using the provided palette, typography, copy, and section structure verbatim.

## Design System (src/styles.css)

Tokens defined as semantic CSS variables, all utilities reference them:
- `--navy: #1B2B6B` (primary)
- `--forest: #1B4332` (secondary accent - bold statement sections only)
- `--sky: #4A90D9` (tertiary accent - links, subtle highlights)
- `--cream: #F5F2EE` (warm off-white background)
- `--charcoal: #2C2C2C` (body text)
- `--white: #FFFFFF`
- Mapped into shadcn token slots: `--background: cream`, `--foreground: charcoal`, `--primary: navy`, `--secondary: forest`, `--accent: sky`, `--card: white`, `--border` derived.
- Dark sections (navy/forest) get scoped inverted tokens via `.surface-navy` / `.surface-forest` utility classes so child shadcn components inherit white-on-dark correctly without hardcoded colors.
- Fonts loaded via `<link>` in `__root.tsx` head: Cormorant Garamond (headings) + Inter (body). Family registered with `--font-serif` and `--font-sans` in `@theme`.
- Generous spacing scale, restrained radius (`0.25rem`), no shadows on primary surfaces, subtle border treatments only.

## Routes (TanStack file-based)

```
src/routes/
  __root.tsx              -> shell, fonts, SiteHeader, SiteFooter, Outlet
  index.tsx               -> Home
  about.tsx               -> /about
  speaking.tsx            -> /speaking
  books.tsx               -> /books
  podcast.tsx             -> /podcast
  contact.tsx             -> /contact
```

Each route sets unique `head()` with title, description, og:title, og:description. Leaf routes get an og:image only where a hero image is meaningful (added once final imagery exists - initially omit).

## Shared components (src/components/site/)

- `SiteHeader.tsx` - sticky, cream bg w/ subtle bottom border; wordmark left ("DrRodneyAndrews.com" in serif), primary nav (Home, About, Speaking, Books, Podcast, Contact) center/right, forest-green "Book Dr. Andrews" CTA right. Mobile: hamburger → Sheet with full nav + external links.
- `SiteFooter.tsx` - wordmark, internal nav, external links (CharlestonMedicine.com, RodneyAndrewsLive.com), monochrome social icons (Lucide), copyright bar.
- `PhotoPlaceholder.tsx` - labeled aspect-ratio block (navy/charcoal bg, cream caption "REPLACE WITH …") used everywhere a real photo will drop in. Variants: full-width hero, portrait, square, oval, card.
- `SectionHeading.tsx`, `SerifQuote.tsx`, `CTAButton.tsx` (forest / navy-outline variants) - keep typographic system consistent.
- `SpeakingInquiryForm.tsx`, `GeneralInquiryForm.tsx`, `MailingListForm.tsx` - RHF + Zod + shadcn Form. Submit is a no-op stub with a toast ("Thanks - we'll be in touch"); no backend wired this pass.

## Page composition

Each page follows the spec section-for-section, copy verbatim, in this order:

- **Home**: Hero (full-bleed photo placeholder + navy overlay + serif headline + two CTAs) → centered positioning quote (white) → Speaking teaser (split) → Featured Book (navy bg, split) → Podcast teaser (cream bg, 2 episode cards) → Philosophy strip (forest bg, white serif) → Contact CTA (white, dual CTA + simple name/email/message form).
- **About**: Navy hero w/ title + credentials subhead + portrait placeholder → alternating left/right biography blocks with the full narrative split at the natural paragraph breaks, interleaved with the 4 labeled photo placeholders → navy credentials strip (spaced caps) → closing CTA paragraph + forest "Book Dr. Andrews to Speak" button.
- **Speaking**: Full-bleed hero placeholder + dark overlay + headline → split description section (arched/rounded portrait placeholder right) → "Targeted Audiences" on navy: 3 cream cards (Healthcare / Business & Leadership / Health, Performance & Community) with `/`-separated audience lists → split inquiry form (photo left, forest panel right with full SpeakingInquiryForm incl. Audience Type select) → cinematic full-bleed closing placeholder with overlay caption.
- **Books**: Navy hero with bleeding serif "The Bespoke Life:" + italic subtitle + cover placeholder right → off-white section with 3 white concept cards on navy band (Illusion / Failure / Promise) → "The First Four Movements" 2×2 grid on navy with photo placeholder per card → "The Companion Workbook" split section + CTA → two purchase cards (book + workbook) with forest CTAs.
- **Podcast**: Navy hero with serif "Peak Performance" / "with Dr. Rodney Andrews" + mic photo placeholder (no neon/clipart) → "About the Pod" split (oval portrait placeholder + the two-paragraph copy) → "The Latest Drops" two episode cards (S5E31, S5E32) with labeled thumbnails + "View All Episodes" CTA → Subscribe section (navy, centered, Spotify/Apple/YouTube monochrome Lucide icons) → Mailing list section (cream, name+email form, forest submit).
- **Contact**: Minimal cream layout. "Let's Connect." heading. Two-column forms (Speaking Inquiries / General Inquiries) stacking on mobile. External links block with descriptors. Monochrome social icon row.

## Global behavior

- Mobile-first: all splits collapse to single column, hero overlays remain legible, forms full-width, sticky header collapses to hamburger Sheet.
- Use the responsive header pattern from guidelines (`grid-cols-[minmax(0,1fr)_auto]` mobile → flex desktop, `min-w-0` / `shrink-0` / `truncate`).
- All photo slots are `PhotoPlaceholder` components with the exact label strings from the spec - no stock photography is generated.
- No video, no neon, no clipart, no Spanish lorem, no generic stock people. Strict adherence to palette and serif/sans pairing.
- Internal links use `<Link to=...>`; external (CharlestonMedicine.com, RodneyAndrewsLive.com, podcast platforms, socials) are plain `<a target="_blank" rel="noopener">`.

## Out of scope this pass

- No backend / Lovable Cloud - forms are stubs with toast feedback. Easy to wire later.
- No real images - every photo slot is a labeled placeholder for the client's approved assets.
- No podcast feed integration - episode cards are static placeholders.

## Technical notes

- TanStack Start, Tailwind v4, shadcn already present. No new heavy deps; add `react-hook-form` + `zod` + `@hookform/resolvers` only if not already installed (shadcn `form` requires them).
- All styling via semantic tokens - zero `text-white` / `bg-[#…]` literals in components. Dark sections use `.surface-navy` / `.surface-forest` wrappers that flip token values within scope.
- Replace the placeholder `src/routes/index.tsx` content entirely.

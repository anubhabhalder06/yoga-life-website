# YOGA LIFE — Website Build Prompt (v2)

Logo file: `yoga-life-logo.png` (attached). Use it exactly as given — do not redraw, recolor, or reinterpret it.

---

## 0. WHAT WENT WRONG LAST TIME — READ FIRST

A previous build attempt from an earlier prompt produced a generic, "AI slop" result. Specifically avoid repeating these mistakes:

- **Color combination was muddy and undesigned** — a dark olive/teal wash with low contrast, generic dark-hero-with-glow-circle look. This is the exact cliché to avoid. Do not default to "dark teal gradient + glowing ring behind headline." That pattern reads as AI-generated template, not as a designed brand.
- **Header was invisible on page load** — a fade/reveal animation was applied to the header itself, so on first load the nav was blank/missing until scroll or hover triggered it. **The header must be fully visible and functional the instant the page loads. No fade-in, no delay, no scroll-trigger on the header itself.**
- **Buttons were non-functional** — the Bengali toggle button and the "Join Now" nav button did not do anything. **Every interactive element must be wired up and tested: it must visibly do something when clicked/tapped.** No decorative buttons that go nowhere.
- **Design felt generic/templated**, not like a considered brand identity. This build must look **art-directed by a human designer with taste** — specific, considered, a little unexpected — not like a default AI-generated hero-section-plus-cards layout.
- A previous version of this brief asked for a custom-built enrollment form with health-condition fields and Stripe/Razorpay payment collection built into the site. **That is cancelled. Ignore any prior instruction about building a native form, collecting payment on-site, or integrating Stripe/Razorpay.** See §6 for the correct, simple approach.

---

## 1. PROJECT SUMMARY

A premium, professional website for **YOGA LIFE**, a yoga & Zumba studio in Baruipur, West Bengal, run by qualified trainer **Mrs. Runu Halder Das**. 200+ active students, 500+ trained historically. This is an established, trusted local studio — the site should feel calm, confident, and premium, never like a startup or a template.

**Design north star: Lando Norris's personal website, filtered through A24's editorial restraint.** Study what makes the Lando Norris site work: bold, oversized display type used with real hierarchy and confidence; tight, sporty, high-contrast layout; large full-bleed imagery treated as the hero of the page, not decoration; a restrained, disciplined color palette (mostly neutral/dark with one or two accent colors used sparingly and precisely); sharp, purposeful motion — nothing floaty or generic; a grid that feels considered and slightly editorial rather than centered-box-after-centered-box. Combine that structural confidence with A24's calm, cinematic pacing and generous negative space. The result should feel like a **professional brand site**, not a wellness-app template.

**Site must be mobile-first, vertical-fixed.** The primary user is on a phone held vertically. Every section must be designed for a narrow vertical viewport first — no horizontal scroll, no cramped or overflowing elements, no desktop layout awkwardly squeezed down. Design mobile, then scale up to desktop, not the other way around.

---

## 1.1 VISUAL REFERENCES — study these, don't copy them literally

Four reference images are attached. Pull specific, nameable techniques from each — not their literal color palettes or subject matter (this is a yoga studio, not a sneaker brand or skincare line). What to extract from each:

**Reference A — Nike "Earthquake Cloud" landing page.**
- A single oversized, bold display headline treated as a graphic element, partially overlapping/interacting with the hero product image (the wordmark sits *behind* the shoe, at huge scale, cropped by the viewport).
- A tight, rounded-corner "frame" containing the whole hero composition, with a clean minimal top nav sitting outside/above that frame.
- One small pill-shaped CTA button, high-contrast, no clutter around it.
- Lesson for Yoga Life: the hero headline ("Find Your Practice. Find Your Life.") could be treated as a huge, confident piece of typography that a hero photo of Mrs. Runu or a class in session interacts with — not just text floating over a background.

**Reference B — "Londyn Elori" skincare brand site.**
- Confident mixed-type-style headlines: a serif italic word mixed with a bold sans word in the same line (e.g. "Fresh *beauty*" / "SALTY Skincare") — elegant, editorial, not templated.
- Full-bleed alternating color-block sections (a bold solid color section sandwiched between two light photo/text sections) to create rhythm as the user scrolls.
- Product/subject photography cropped tight and placed asymmetrically against a textured/organic background (torn paper, stone, natural texture) rather than a flat digital background.
- Lesson for Yoga Life: use this exact alternating-block rhythm (light section → bold teal or gold full-bleed statement section → light section) down the homepage, and consider mixing an italic serif accent word into headlines for editorial warmth.

**Reference C — "Otto" photographer portfolio site.**
- Radical typographic confidence: one giant serif wordmark as the entire visual anchor of the page, dominant over a full-bleed portrait photo.
- Minimal, small-caps utility labels ("Profile.", "contact.", "social.") used sparingly in corners — quiet, precise, almost architectural.
- Monochromatic, single-color-family backgrounds (here: a single burnt orange) with no gradient blending — total commitment to one tone per section.
- Lesson for Yoga Life: this is the strongest reference for restraint. A hero section could feature a full-bleed portrait of Mrs. Runu Halder Das with "Yoga Life" or a huge headline word set boldly across/beside her, small precise utility labels in the corners, and total commitment to one background tone (not a blended gradient).

**Reference D — Yoga Life logo (`yoga-life-logo.png`).**
- Use exactly as provided, unmodified. The lotus (teal) and the "L" monogram (gold) are the only two accent colors permitted anywhere on the site (§2.1). The logo's clean line-work and symmetry should inform the site's own restraint — precise, uncluttered, confident, not busy.

**Synthesis for this build:** Borrow Otto's commitment to one dominant tone per section and giant confident type: Londyn Elori's alternating full-bleed color-block rhythm and editorial serif/sans headline mixing: and Nike's technique of layering a huge headline behind/through a hero photograph. Applied to Yoga Life's own teal/gold/neutral palette (§2.1), on real studio photography (people practicing yoga/Zumba, Mrs. Runu teaching), this produces a bold, editorial, clearly-art-directed site — not a generic AI template.

---

## 2. DESIGN SYSTEM

### 2.1 Color — derived precisely from the logo, used with restraint
Sample the exact hex values from `yoga-life-logo.png`: a teal (lotus + wordmark) and a gold/mustard (the "L" monogram). Build a **disciplined, high-contrast palette**, not a wash of both colors blended together:

- **Base:** one dominant neutral — either a clean warm off-white (for a light-forward design) or a deep, near-black charcoal (for a dark-forward design). **Pick one as the dominant mode for the whole site** and use the other only for section breaks/contrast, the way Lando Norris's site commits to a palette rather than blending everything into a gradient soup.
- **Accent 1 (Teal):** used sparingly — small labels, underlines, icon states, one section's dominant tone. Not smeared across every background.
- **Accent 2 (Gold):** reserved almost exclusively for the primary call-to-action (the "Fill Out Form" / "Join Now" button) and small high-value highlights, so it always reads as *the* action color. This is what Lando Norris's papaya/orange does — one unmistakable action color, used consistently and nowhere else.
- **Never blend teal and gold together into a muddy gradient.** Keep them as distinct, deliberate accents on a clean neutral base. High contrast everywhere — no low-contrast text-on-dark-olive combinations.
- No unrelated colors (no purple, no neon, no random blues).

### 2.2 Typography
- **Display/headline font:** a bold, high-contrast, confident sans or serif display face — oversized, tight leading, real hierarchy (huge H1, clearly smaller H2, etc.), the way a sports/athlete brand site commits to type as a graphic element, not just text.
- **Body font:** clean, highly legible sans, minimum 16px, never below 15px — must stay readable for the 50–60 age group.
- Type should feel bold and intentional throughout — big confident headlines, plenty of whitespace around them, not cramped.

### 2.3 Motion
- Motion should be **sharp and purposeful**, not floaty or ambient. Short, confident transitions (150–300ms), consistent easing curve site-wide.
- Scroll-triggered content reveals are fine (fade + small upward move), but **never apply this to the header/nav** — the header is always instantly visible, no exceptions.
- No glowing rings, no particle effects, no generic "AI hero glow." If a background motif is used (e.g. a subtle line-art lotus echo from the logo), keep it small, precise, and low-opacity — a detail, not the focal point.

### 2.4 Layout principles
- Editorial grid, not centered-box-stacked-on-centered-box. Use asymmetry, image-and-text pairings, and varied section rhythm the way a magazine or a sports brand site does.
- **Alternate section rhythm down the page** the way Reference B does: a light neutral photo/text section, then a full-bleed bold-color statement section (solid teal or solid gold, large editorial type, no photo), then back to light — repeat this pattern 2–3 times down the homepage instead of a flat, uniform scroll of same-style sections.
- At least one section (ideally the hero) should commit fully to one dominant background tone with a large portrait/action photo and giant typography anchoring it, the way Reference C does — no gradient blending in that section.
- Generous negative space. Let sections breathe.
- Every section must be justified — no filler "why choose us" icon-grid unless it's designed with real specificity (real value props in this studio's own voice, not generic icons + generic text).

---

## 3. MOBILE-FIRST REQUIREMENT (critical)

- Build and test the **vertical mobile layout first**. Fixed, clean vertical stacking — hero, then sections, each full-width, no horizontal scroll anywhere, no element overflowing the viewport.
- Tap targets minimum 44×44px. Text never below 15px.
- The floating action buttons (§5.2) must sit within safe-area insets and never cover content or overlap each other on small screens.
- Only after the mobile layout is solid, scale up the same design system to tablet and desktop — don't design desktop first and shrink it.

---

## 4. LANGUAGE TOGGLE (Bengali) — must actually work

- A single, clearly visible toggle in the header: **"EN / বাং"** or similar compact switch.
- Clicking/tapping it must **actually re-render the visible page content into Bengali** — headlines, nav labels, section copy, button labels — using a simple key/value translation dictionary (e.g. a JSON object per language, swapped via JS/state). This is a real, working feature, not a decorative label.
- Phone numbers, addresses, and proper nouns (Yoga Life, Runu Halder Das) stay the same in both languages.
- Toggle state should be obvious (clearly show which language is active) and should persist as the user navigates between pages if reasonably easy to implement (e.g. via localStorage) — nice-to-have, not a blocker.

---

## 5. GLOBAL STRUCTURE

### 5.1 Header
- **Fully visible and interactive immediately on page load.** No entrance animation on the header itself.
- Contains: logo (left), nav links (Home / Classes / About / Contact / Blog), language toggle, and a clearly visible **"Join Now"** button (this routes to the Fill Out Form page — §6).
- Every nav link and button must be functional and tested — clicking "Join Now" must visibly navigate somewhere real, clicking the language toggle must visibly change the text on screen.
- On scroll: header can adopt a compact/frosted sticky treatment, but must never become invisible or non-interactive at any point.

### 5.2 Persistent contact buttons
Fixed-position (not literally floating/animated away), present on every page and every scroll position:
1. **Call** → `tel:+918910393245`
2. **Directions** → https://maps.app.goo.gl/x7ezDPFoH5HibmBJ8
3. **WhatsApp** → https://wa.me/919800421238

Clean, minimal icon buttons using the accent palette with restraint (not oversized, not glowing) — placed so they never overlap page content or each other on mobile.

### 5.3 Footer
Logo, quick nav links, address, phone, WhatsApp, email (halderrunu5@gmail.com), hours (daily 6:30 am–8:30 pm), social links (Instagram, Facebook), 5.0★ · 40 Google Reviews badge linking to the Maps listing.

---

## 6. ENROLLMENT — SIMPLE, NOT CUSTOM-BUILT (correction from earlier drafts)

**Do not build a custom form, collect health data, or integrate any payment gateway (Stripe/Razorpay/etc.) into the website.** The studio already has a working Google Form that handles enrollment details and payment-screenshot verification. Keep it exactly that simple:

- **"Join Now" / "Fill Out Form"** buttons across the site (header, hero, footer, classes page) all lead to a dedicated **`/join`** page.
- The `/join` page is simple: a short, warm intro paragraph (what to expect — choose mode, choose slot, pay via UPI, upload screenshot — described in plain text, not as an interactive stepper), followed by the **actual Google Form embedded directly in the page** via iframe:

```html
<iframe
  src="https://docs.google.com/forms/d/e/1FAIpQLSfWLRU5_-IyfNkJ-x5PEJuc5pcDKx-AIeYVfaBjAxV6rPcPdg/viewform?embedded=true"
  width="100%"
  height="1400"
  frameborder="0"
  marginheight="0"
  marginwidth="0">
  Loading…
</iframe>
```

- Wrap the iframe in a responsive container so it scales cleanly on mobile (full width, scrollable within its own frame if needed — do not force the whole page to scroll horizontally).
- Below/above the embed, include a plain fallback link — **"Open form in a new tab"** → the same Google Form URL — for anyone whose browser has trouble with the embedded iframe.
- Also include the direct WhatsApp/Call alternative for anyone who prefers to enroll by contacting the studio directly, exactly as already documented (UPI ID `8910393245@upi`, WhatsApp https://wa.me/919800421238, Call `+91 89103 93245`).
- **Never use the words "Google Form" as a button label** — buttons say "Join Now," "Fill Out Form," or "Enroll." The embedded form itself is obviously a Google Form once seen, and that's fine — just don't label the *button* that way.
- No login. No custom database. No payment gateway. This page is intentionally simple and low-maintenance.

---

## 7. PAGES

1. **Home** — hero (bold headline, one-line subhead, Join Now + Explore Classes CTAs, trust line: 5.0★ 40 reviews · 200+ active students · 500+ trained), About teaser, Classes overview, a few specific value props (studio's real voice, not generic icons), timings snapshot, testimonials, social strip, location teaser, closing CTA band.
2. **Classes** — Yoga and Zumba programs, levels, instructor, current timings (pull from a simple editable schedule data block — see §8), each with a "Join Now" CTA to `/join`.
3. **About** — Mrs. Runu Halder Das's bio (placeholder until final copy supplied), studio story, 200+/500+ stats, photo gallery slot.
4. **Join** — as described in §6.
5. **Contact** — address, hours table, embedded Google Map (the iframe already provided, made responsive), Call/Directions/WhatsApp buttons, social links.
6. **Blog** *(optional, can launch as "Coming Soon")*.

---

## 8. EDITABLE SCHEDULE DATA

Keep all class timings and fees in one simple, clearly commented data file (e.g. `schedule.json`) referenced by both the Classes page and the Join page's intro text, so the owner can update timings/fees later by editing one file only.

**Offline** — Registration ₹250 one-time · 5 days/week ₹450/month · 3 days/week ₹250/month
Slots: 6:00–7:00am (Mon–Fri) · 7:30–8:30am (Mon–Fri) · 5:40–6:40pm (Mon–Sat) · 7:30–8:30pm (Mon–Sat) · 4:30–5:30pm (Mon–Sat)

**Online** — Registration ₹250 one-time · Monthly ₹500/month · 3-month special ₹1,300 (save ₹200)
Slots: 6:00–7:00am (Mon–Fri) · 7:30–8:30am (Mon–Fri) · 7:30–8:30pm (Mon, Thu, Sat)

---

## 9. TECHNICAL & DEPLOYMENT

- Static build (plain HTML/CSS/JS or a static-export React/Next.js build) — no backend, no login, no payment integration needed given the Google Form approach.
- **Clean code:** no unnecessary comments, no dead code, consistent formatting (run a formatter/linter before delivery), modular reusable components, no leftover console.logs or placeholder test data, no hardcoded localhost URLs.
- **Every interactive element must be functionally tested before delivery** — nav links, language toggle, all CTA buttons, floating contact buttons, form embed and its fallback link.
- Fully responsive, mobile-first as described in §3.
- Optimize images (WebP, responsive sizes), lazy-load below the fold, keep JS minimal — target fast load and smooth 60fps interactions.
- Deployment target: **Hostinger**, connected to the client's existing custom domain. No hardcoded absolute URLs; all asset paths relative/root-relative so the domain swap is seamless.
- Include a short `README.md`: how to run locally, how to build for production, where to edit `schedule.json`, where to swap images, and the steps to upload to Hostinger and connect the domain.
- Basic local-business SEO: meta titles/descriptions per page, Open Graph tags, `LocalBusiness` JSON-LD schema with name, address, phone, hours, geo-coordinates, and rating (5.0★, 40 reviews).

---

## 10. KEY LINKS & DATA

| Item | Value |
|---|---|
| Business name | YOGA LIFE |
| Instructor | Mrs. Runu Halder Das (qualified trainer) |
| Address | Ukilpara Rd, Palpara, Ward No. 14, Baruipur, Kolkata – 700144 |
| Phone (call) | +91 89103 93245 |
| WhatsApp | +91 98004 21238 → https://wa.me/919800421238 |
| Email | halderrunu5@gmail.com |
| Hours | Daily, 6:30 am – 8:30 pm |
| Google rating | 5.0 ★, 40 reviews |
| Google Maps | https://maps.app.goo.gl/x7ezDPFoH5HibmBJ8 |
| Instagram | https://www.instagram.com/runu_halder84?igsh=MWVlaTFsMXBycGkwbA== |
| Facebook | https://www.facebook.com/share/1VHUB7com7/ |
| UPI ID | 8910393245@upi |
| Enrollment form | https://docs.google.com/forms/d/e/1FAIpQLSfWLRU5_-IyfNkJ-x5PEJuc5pcDKx-AIeYVfaBjAxV6rPcPdg/viewform |
| Embedded map | See §7 Contact page — use the iframe embed already provided by the client, made responsive |

---

## 11. NON-NEGOTIABLE CHECKLIST

- [ ] Header fully visible and interactive from the instant the page loads — no fade-in on the header
- [ ] Every button/link is wired up and functional — language toggle, Join Now, nav links, floating contact buttons, form embed fallback link — all tested
- [ ] Language toggle actually swaps visible page content to Bengali, not decorative
- [ ] No custom-built enrollment form, no health-condition fields, no Stripe/Razorpay or any payment gateway — enrollment is the embedded Google Form on `/join` plus a "open in new tab" fallback
- [ ] Buttons never say "Google Form" — say "Join Now" / "Fill Out Form" / "Enroll"
- [ ] Color palette is disciplined and high-contrast — one dominant neutral base, teal and gold used sparingly and deliberately, never blended into a muddy wash
- [ ] Design takes real structural cues from the Lando Norris site and the four attached references (bold type, confident asymmetric layout, one clear action color, alternating full-bleed color-block rhythm, giant typography anchoring the hero) blended with A24's editorial calm — not a generic AI-template layout
- [ ] Mobile-first, vertical-fixed layout with no horizontal scroll or overflow, designed for phone first then scaled to desktop
- [ ] Logo used exactly as provided, unmodified
- [ ] Schedule/fees stored in one editable data file
- [ ] Clean, commentless-where-obvious, linted, modular production code
- [ ] Static build ready for Hostinger + custom domain, with README
- [ ] Local business SEO schema included

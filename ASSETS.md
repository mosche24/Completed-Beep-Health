# BEEP Health — Asset Map

This file documents how the logo and photos are linked into `index.html`.

In a plain HTML site, images are linked directly with `<img src="filename">`
tags inside the HTML — there is no separate "link file" the browser reads.
This document is the human-readable map of those links: what each file is,
where it appears, and how to replace it.

**To keep everything working, place all files listed here in the SAME folder
as `index.html`.**

---

## Logo

| File        | Used in `index.html` | Purpose                                      |
|-------------|----------------------|----------------------------------------------|
| `logo.jpeg` | Nav bar (line ~24)   | Top-left brand logo (sits on a dark chip)    |
| `logo.jpeg` | Footer (line ~260)   | Footer brand logo                            |

The logo is the HSB Global mark. Because the image has a dark navy
background baked in, the CSS places it on a dark rounded "chip" so it reads
cleanly on the light steel page. To swap the logo, replace `logo.jpeg`
(keep the same filename), or update the two `<img src="logo.jpeg">` tags.

---

## Photos (warm imagery)

Each photo was chosen to create warmth and hope. All are resized/compressed
for fast loading. Mapping of file → meaning → where it appears:

| File                | What it shows                               | Section in `index.html`                        |
|---------------------|---------------------------------------------|------------------------------------------------|
| `warm-portrait.jpg` | Young woman in warm golden light            | Hero (right-hand image, line ~52)              |
| `warm-signs.jpg`    | "You are not alone / You matter / Don't give up" signs | Full-width encouragement banner (line ~80) |
| `warm-hands.jpg`    | Two people holding hands supportively       | "How it works" section photo (line ~93)        |
| `warm-stones.jpg`   | Balanced stones by the sea                  | Circles grid — "Quiet minds" tile (line ~129)  |
| `warm-flower.jpg`   | Purple/pink flower                          | Circles grid — "Who am I" tile (line ~141)     |
| `warm-heart.jpg`    | A hand offering a paper heart               | Warm mosaic band — tall tile (line ~206)       |
| `warm-dock.jpg`     | Two friends on a jetty at sunset            | Warm mosaic band (line ~207)                   |
| `warm-tree.jpg`     | A lone tree in a golden field               | Warm mosaic band (line ~208)                   |
| `warm-sunset.jpg`   | Two people watching the sun set over the sea| Warm mosaic band — wide tile (line ~209)       |
| `warm-waterfall.jpg`| A waterfall with a tiny figure below        | Spare / not currently placed — available to use|

Line numbers are approximate and may shift if you edit the HTML.

### To replace any photo
1. Drop your new image into this folder.
2. Either give it the same filename as the one you're replacing (easiest),
   or update that image's `<img src="...">` / `background-image:url('...')`
   reference in `index.html`.
3. Keep images web-sized (ideally under ~400 KB each) so the page stays fast.

---

## Full file list for deployment

Upload ALL of these together, in one folder:

- index.html
- styles.css
- script.js
- privacy.html
- logo.jpeg
- warm-portrait.jpg
- warm-signs.jpg
- warm-hands.jpg
- warm-stones.jpg
- warm-flower.jpg
- warm-heart.jpg
- warm-dock.jpg
- warm-tree.jpg
- warm-sunset.jpg
- warm-waterfall.jpg

---

## One setup step before go-live

The sign-up form (First name, Email, Telephone) sends to
**info@hsbglobalhealth.com** via Formspree. In `script.js`, set your
Formspree form ID:

    var FORMSPREE_ID = "YOUR_FORM_ID";

Create a free form at https://formspree.io with the delivery address set to
info@hsbglobalhealth.com, then paste the ID (the part after `/f/`) between
the quotes. Until then, the form shows "Signup isn't connected yet."

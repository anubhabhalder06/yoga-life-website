# Yoga Life — Website

Premium yoga and Zumba studio website for **Yoga Life**, Baruipur, Kolkata.
Instructor: Mrs. Runu Halder Das | Rating: 5.0 stars (40 reviews)

---

## Running Locally

Simply open `index.html` in your browser. No build step needed.

For the schedule data to load dynamically (timings/pricing), serve from a local server:
```
npx serve .
```
Then open http://localhost:3000

---

## Production Build

This is a static site — no build step required. Upload the entire folder to Hostinger as-is.

---

## Editing Class Timings and Fees

Open `data/schedule.json` and edit the times, days, and prices.
Changes will reflect on the Classes page and the Home page schedule widget automatically.

Example entry:
```json
{ "time": "6:00 - 7:00 am", "days": "Mon - Fri" }
```

---

## Swapping Images

Replace any of these files in the `assets/` folder (keep the same filenames):

| File | Used on |
|---|---|
| `yoga-life-logo.png` | Header, footer (all pages) |
| `hero_yoga.jpg` | Home page hero |
| `instructor.jpg` | Home about teaser, About page hero |
| `yoga_class.jpg` | Home classes card, Classes page |
| `zumba_class.jpg` | Home classes card, Classes page |

Use WebP format for best performance (rename accordingly and update the HTML src).

---

## Deploying to Hostinger

1. Log in to Hostinger control panel
2. Go to **File Manager** or use FTP (FileZilla etc.)
3. Navigate to `public_html/` (or your domain root)
4. Upload ALL files and folders from this project (maintaining the folder structure):
   - `index.html`, `classes.html`, `about.html`, `join.html`, `contact.html`, `blog.html`
   - `css/`
   - `js/`
   - `data/`
   - `assets/`
5. Connect your custom domain in Hostinger Domains panel

No `.htaccess` or server configuration needed — pure static site.

---

## Key Data Reference

| Item | Value |
|---|---|
| Phone | +91 89103 93245 |
| WhatsApp | +91 98004 21238 |
| Email | halderrunu5@gmail.com |
| UPI ID | 8910393245@upi |
| Maps | https://maps.app.goo.gl/x7ezDPFoH5HibmBJ8 |
| Form | https://docs.google.com/forms/d/e/1FAIpQLSfWLRU5_-IyfNkJ-x5PEJuc5pcDKx-AIeYVfaBjAxV6rPcPdg/viewform |
| Instagram | https://www.instagram.com/runu_halder84 |
| Facebook | https://www.facebook.com/share/1VHUB7com7/ |

---

## Language Toggle

The EN/Bengali toggle uses `js/translations.js`. To add or edit translations:
- Open `js/translations.js`
- Each key has an `en` and `bn` value
- The user's language preference is saved to `localStorage`

---

## Tech Stack

- Plain HTML5 / Vanilla CSS / Vanilla JS — no frameworks, no dependencies
- Google Fonts: Playfair Display + Inter (loaded via CDN)
- Fully responsive, mobile-first
- Zero external JS libraries

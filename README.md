# MealMate

A local-first PWA for meal planning, Sunday meal prep, grocery shopping (weekly + pantry + kitchen setup), and food-expense tracking. Pre-seeded with the full bachelor meal-prep plan — chicken + fish, matta rice + poha + ragi, 6 veg, 7 recipes, ₹2,000/week budget, 145g protein / 2,200 kcal targets — and everything is editable.

All data lives in your phone's browser storage. Nothing leaves the device.

---

## What's in this folder

```
mealmate/
├── index.html              ← the entire app
├── manifest.webmanifest    ← PWA install config
├── sw.js                   ← offline service worker
├── icon-192.png            ← home-screen icon
├── icon-512.png
├── icon-maskable-512.png   ← Android adaptive icon
├── fonts/                  ← self-hosted Fraunces + Manrope (truly offline)
└── README.md
```

---

## The five tabs

- **Today** — today's plan, daily protein/kcal progress, this-week spending snapshot. Top-right buttons: **+** logs an expense, **⚙** opens settings.
- **Plan** — pick any day Mon-Sun, tap a meal to view ingredients + how to make it (or to swap it).
- **Prep** — *new*. Sunday cook timeline (13 tickable steps, ~100 min), 7 full recipes (chicken, fish, matta rice, chana, veg medley, spinach, garlic-hung curd sauce), and 4 no-cook sauces / spice blends.
- **Shop** — three lists in one tab:
  - **Weekly** (25 items) — recurring groceries with prices, grouped by category.
  - **Pantry** (18 items) — one-time setup: oils, spices, sauces. Lasts 1–3 months.
  - **Kitchen** (13 items) — one-time equipment because you're starting the kitchen new: pressure cooker, kadhai, tawa, glass containers, jars, muslin cloth, knife, board, scale, grater, strainer, tongs.
- **Money** — month-to-date vs budget, last-7-days bar chart, category breakdown, transaction log.

---

## How to install on Android

Needs **HTTPS** or `localhost` for the "Install app" prompt. Pick whichever is easiest:

### A — Netlify Drop (60 seconds, easiest)
1. https://app.netlify.com/drop on a computer.
2. Drag this folder onto the page.
3. You get an HTTPS URL like `https://random-name.netlify.app`.
4. Open it on your Android phone in **Chrome**.
5. Chrome menu (⋮) → **Install app** / **Add to Home screen**.
6. Opens fullscreen, works offline, lives on your home screen.

### B — GitHub Pages
1. New repo, upload these files to root.
2. Settings → Pages → deploy from `main`, root.
3. Open `https://YOURUSER.github.io/REPONAME/` on Android Chrome.
4. ⋮ → Install.

### C — Cloudflare Pages
1. https://pages.cloudflare.com → Create project → Direct upload.
2. Upload the folder, get HTTPS URL.
3. Same install flow on Android.

### D — Termux (fully on-phone, no cloud)
1. Install **Termux** from F-Droid.
2. `pkg install python`
3. `cd` into this folder
4. `python -m http.server 8080`
5. Chrome → `http://localhost:8080`
6. ⋮ → Add to Home screen. (Install works on `localhost` without HTTPS.)

---

## Customizing

Everything except the recipe steps is editable from the UI:
- **Meals** — Today's gear ⚙ → Manage meal templates. Each has name, time slot, calories, protein, ingredients (one per line), and "how to make it" assembly notes.
- **Plan** — tap any slot in Today or Plan to swap or clear.
- **Groceries** — the **+** on Shop adds a new item; you pick which list (Weekly / Pantry / Kitchen) and the category options adjust. The ✏️ on each row edits price, quantity, brand notes.
- **Budgets and macros** — gear ⚙ → Profile & targets.
- **Recipes & Sunday timeline** — display-only in the UI. To customize them: gear ⚙ → **Export** the JSON, edit the `prep.recipes` / `prep.timeline` / `prep.sauces` fields, then **Import**.

### Backup / move to new phone
gear ⚙ → **Export** saves a JSON file. On the new install, gear ⚙ → **Import** → pick that file.

---

## Pre-seeded numbers (from the meal plan)

- Weekly grocery budget: ₹2,000 (range ₹1,650–2,400)
- Monthly food budget: ₹13,000 (range ₹11,700–15,500)
- Daily calorie target: 2,200
- Daily protein target: 145g
- Pantry one-time setup: ~₹2,500
- Kitchen one-time setup: ~₹5,800 (full new kitchen — pressure cooker through tongs)
- Day plan: chicken Mon/Wed/Fri lunches, fish Tue/Thu, varied dinners with day-specific recipes, breakfasts rotating between poha / ragi / bhurji / toast / scramble

---

## Caveats

- Data lives in this device's browser storage. Uninstalling the PWA or clearing site data wipes it. Export regularly if it matters.
- The install prompt requires HTTPS or `localhost`. The app still *works* over plain HTTP — it just won't install as a standalone app.
- It's a PWA, not a real APK. If you specifically need a `.apk` to sideload, that's a Bubblewrap/Capacitor wrapper around a hosted version — say the word.

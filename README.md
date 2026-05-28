# MealMate

A local-first PWA for meal planning, Sunday meal prep, grocery shopping (weekly + pantry + kitchen setup), and food-expense tracking.

## The five tabs

- **Today** — today's plan, daily protein/kcal progress, this-week spending snapshot. Top-right buttons: **+** logs an expense, **⚙** opens settings.
- **Plan** — pick any day Mon-Sun, tap a meal to view ingredients + how to make it (or to swap it).
- **Prep** — *new*. Sunday cook timeline (13 tickable steps, ~100 min), 7 full recipes (chicken, fish, matta rice, chana, veg medley, spinach, garlic-hung curd sauce), and 4 no-cook sauces / spice blends.
- **Shop** — three lists in one tab:
  - **Weekly** (25 items) — recurring groceries with prices, grouped by category.
  - **Pantry** (18 items) — one-time setup: oils, spices, sauces. Lasts 1–3 months.
  - **Kitchen** (13 items) — one-time equipment because you're starting the kitchen new: pressure cooker, kadhai, tawa, glass containers, jars, muslin cloth, knife, board, scale, grater, strainer, tongs.
- **Money** — month-to-date vs budget, last-7-days bar chart, category breakdown, transaction log.

## Customizing

Everything except the recipe steps is editable from the UI:
- **Meals** — Today's gear ⚙ → Manage meal templates. Each has name, time slot, calories, protein, ingredients (one per line), and "how to make it" assembly notes.
- **Plan** — tap any slot in Today or Plan to swap or clear.
- **Groceries** — the **+** on Shop adds a new item; you pick which list (Weekly / Pantry / Kitchen) and the category options adjust. The ✏️ on each row edits price, quantity, brand notes.
- **Budgets and macros** — gear ⚙ → Profile & targets.
- **Recipes & Sunday timeline** — display-only in the UI. To customize them: gear ⚙ → **Export** the JSON, edit the `prep.recipes` / `prep.timeline` / `prep.sauces` fields, then **Import**.

### Backup / move to new phone
gear ⚙ → **Export** saves a JSON file. On the new install, gear ⚙ → **Import** → pick that file.

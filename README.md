# Bayou Recipes

A static HTML recipe site featuring a collection of home and family recipes.

## Structure

```
RecipeSite/
├── index.html                        # Home page with hero image and featured recipes
├── recipes.html                      # Full recipe listing with live search/filter
├── garlic-parmesan-meatballs.html    # Garlic Parmesan Chicken Meatballs with Orzo
├── chicken-sausage-jambalaya.html    # Sister Amos' Chicken Sausage Jambalaya
├── chicken-gyros.html                # Chicken Gyros
├── red-beans-and-rice.html           # New Orleans-Style Red Beans and Rice
├── crockpot-creamy-chicken-pasta.html # Crockpot Creamy Chicken Pasta
├── classic-creole-gumbo.html         # Classic Creole Gumbo
├── css/
│   └── style.css                     # All site styles (responsive: mobile, tablet, desktop)
├── js/
│   ├── search.js                     # Live recipe search/filter for recipes.html
│   └── scaler.js                     # Serving size scaler for recipe pages
├── images/                           # Recipe and hero photos
├── favicon.svg                       # Crawfish tab icon
└── *.pdf                             # Downloadable recipe PDFs
```

## Features

- **Live search** — filters recipe cards in real time on the recipes page
- **Serving size scaler** — +/− buttons on each recipe page scale all ingredient amounts automatically, with proper fraction display (½, ¾, ⅓, etc.)
- **PDF download** — each recipe links to its original PDF
- **Fully responsive** — layouts for mobile (≤600px), tablet (≤900px), and desktop
- **Crawfish favicon** — appears in the browser tab

## Adding a New Recipe

1. Copy an existing recipe page (e.g. `red-beans-and-rice.html`) and rename it
2. Update `<main data-base-servings="X">` with the correct base serving count
3. Wrap each ingredient amount in `<span class="amount" data-base="X">X</span>` so the scaler works
4. Add a card linking to it in both `recipes.html` and `index.html`
5. Drop the recipe photo into `images/` and the PDF into the root folder
6. Update this README

## Color Palette

| Swatch | Hex | Used for |
|--------|-----|----------|
| Light gray | `#EDEFEE` | Page background |
| Terracotta | `#D08856` | Accents, logo, underlines, borders |
| Deep red | `#AA210F` | Buttons, scaler, recipe meta |
| Charcoal | `#41403C` | Header, footer, body text |

## Deployment

This is a plain static site — no build step required. Drop the folder onto any static host (Netlify, GitHub Pages, etc.) and it works as-is.

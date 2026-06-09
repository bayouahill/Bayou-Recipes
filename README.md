# Bayou Recipes

A static HTML recipe site featuring a collection of home and family recipes.

## Structure

```
RecipeSite/
├── index.html                        # Home page with hero image and featured recipes
├── recipes.html                      # Full recipe listing
├── garlic-parmesan-meatballs.html    # Garlic Parmesan Chicken Meatballs with Orzo
├── chicken-sausage-jambalaya.html    # Sister Amos' Chicken Sausage Jambalaya
├── chicken-gyros.html                # Chicken Gyros
├── red-beans-and-rice.html           # New Orleans-Style Red Beans and Rice
├── css/
│   └── style.css                     # All site styles
├── images/                           # Recipe and hero photos
└── *.pdf                             # Downloadable recipe PDFs
```

## Adding a New Recipe

1. Add a new HTML file (e.g. `my-recipe.html`) — use an existing recipe page as a template
2. Add a card linking to it in both `recipes.html` and `index.html`
3. Drop the recipe photo into `images/`
4. Optionally place a PDF in the root folder and link it with a `btn-download` anchor

## Color Palette

| Swatch | Hex | Used for |
|--------|-----|----------|
| Light gray | `#EDEFEE` | Page background |
| Terracotta | `#D08856` | Accents, logo, underlines |
| Deep red | `#AA210F` | Buttons, recipe meta |
| Charcoal | `#41403C` | Header, footer, body text |

## Deployment

This is a plain static site — no build step required. Drop the folder onto any static host (Netlify, GitHub Pages, etc.) and it works as-is.

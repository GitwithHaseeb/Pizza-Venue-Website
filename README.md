# Pizza Venue Website

A modern, responsive static website for **Pizza Venue**, built with HTML, CSS, and vanilla JavaScript.  
It includes a complete menu experience with category filtering, item cards, branch/contact sections, and dish-specific image mapping.

## Highlights

- Fully responsive layout for desktop, tablet, and mobile
- Sticky navigation with active page states
- Menu category filtering (`All`, `Steaks`, `Burgers`, `Pasta`, `Broast`, `Wings`)
- Dish cards with mapped local images
- Smooth scrolling and back-to-top interaction
- WhatsApp quick-contact floating button
- Branch details and contact section support

## Project Structure

```text
pizza-venue-website/
|- index.html
|- menu.html
|- branches.html
|- css/
|  \- style.css
|- js/
|  \- main.js
\- images/
   \- (menu and UI image assets)
```

## Run Locally

Because this is a static site, you can run it using any local static server.

### Option 1: Python

```bash
python -m http.server 5500
```

Then open:

`http://localhost:5500`

### Option 2: VS Code Live Server

Open the project in VS Code/Cursor and start **Live Server** from `index.html` or `menu.html`.

## Customization Guide

- **Menu items/content:** update `menu.html`
- **Styling/theme/layout:** update `css/style.css`
- **Interactions and image mapping:** update `js/main.js`
- **Image assets:** place files in `images/` and map dish names in `localImages` and `localDishImageMap`

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

## Notes

- This project is intentionally framework-free for simplicity and fast loading.
- For production deployment, you can host on GitHub Pages, Netlify, or Vercel static hosting.

## License

This project is for Pizza Venue website usage and branding assets.

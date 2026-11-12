<div align="center">

# Android Club VIT Bhopal

### If it's Android, it's us.
*Building ideas. Engineering possibilities.*

A premium, fully responsive showcase website for **Android Club, VIT Bhopal**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No Frameworks](https://img.shields.io/badge/Frameworks-None-3DDC84?style=for-the-badge)

**[Live Demo](#live-demo)** · **[Features](#features)** · **[Getting Started](#getting-started)** · **[Deployment](#deployment)**

</div>

---

## Overview

This is a single-page website that showcases Android Club, VIT Bhopal: who the club is, what it does, the projects it has built, its events and how to join. It was built for the club's frontend development challenge (Task 1: Club Showcase Website).

The site uses only **HTML5, CSS3 and vanilla JavaScript (ES6+)**. It has no frameworks, no UI libraries and no build step. The only external request is Google Fonts.

## Live Demo

> [`https://androidclub.vercel.app/`](https://androidclub.vercel.app/)

## Features

- **Hero:** animated headline, original droid illustration, floating technology chips, glowing orbs, grid and particle background
- **Navigation:** sticky navbar that turns to a blurred bar on scroll, active-section highlighting, smooth scrolling and an animated mobile menu
- **About:** the club's vision, mission and culture, with a code-window visual
- **What we do:** four equal-size interactive cards for Android, Web, Research and UI/UX
- **Projects:** real repositories from the club's GitHub organization, with category filters (All, Android, Web, AI and IoT)
- **Events:** vertical timeline for hackathons, workshops and technical sessions
- **Community and Join:** how to get involved, plus the club's community and social links
- **Contact:** official email and the campus address with a Google Maps link
- **Back-to-top arrow:** floating button at the bottom-right
- **Motion:** scroll reveals, hover effects and parallax, all switched off for visitors who prefer reduced motion

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 (semantic elements) |
| Styling | CSS3 (custom properties, Grid, Flexbox, `clamp()` fluid type, animations) |
| Behaviour | Vanilla JavaScript (IntersectionObserver, Canvas, pointer events) |
| Fonts | Space Grotesk (headings), Inter (body) via Google Fonts |

## Design System

| Token | Value |
|---|---|
| Background | `#050505`, `#101010` |
| Primary accent | `#FF8A24` (orange) |
| Secondary accent | `#3DDC84` (Android green) |
| Headings | Space Grotesk |
| Body | Inter |

## Project Structure

```
android-club/
├── index.html      # Page structure, SEO and Open Graph tags
├── style.css       # Design system, layouts, animations, responsive rules
├── script.js       # Interactions, animations and editable project/event data
├── vercel.json     # Optional Vercel settings (clean URLs, security headers)
├── .gitignore
└── README.md
```

Keep `index.html`, `style.css` and `script.js` in the same folder.

## Getting Started

**Option 1: open the file.** Download or clone the repository and open `index.html` in any browser.

**Option 2: run a local server.**

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Customising the Content

Projects and events live in `window.CLUB` at the top of `script.js`.

```js
{ name: "DocsLab", cat: "web", desc: "...", tech: ["TypeScript"], glyph: "Ts", url: "https://github.com/..." }
```

- **Projects:** `cat` is `android`, `web` or `ai` and controls the filter buttons.
- **Events:** entries with `placeholder: true` still need real dates. Replace the `when` text and set `placeholder` to `false`.
- **Contact and social links:** edit them directly in `index.html`.

## Responsive Design

The layout is mobile-first and tested by design for these ranges, with no horizontal overflow:

| Range | Layout |
|---|---|
| Up to 380px | Compact spacing, smaller headline and chips |
| 380px to 859px | Single-column phone layout, slide-down mobile menu |
| 600px and up | Two-column cards and projects |
| 860px and up | Split hero and about sections, centered alternating timeline |
| 1100px and up | Four-column What we do cards |
| 2000px and up | Text and content width scale up for large monitors |

It also handles landscape phones, notches and safe areas, and touch screens (hover tilt is turned off).

## Accessibility and SEO

- Semantic landmarks, skip-to-content link and visible keyboard focus
- Accessible menu button with `aria-expanded`, closes with the Esc key
- `prefers-reduced-motion` support
- Page title, meta description, Open Graph tags and favicon

## Deployment

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Android Club showcase website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
2. Set **Framework Preset** to **Other**. Leave the Build Command empty and the Output Directory as `.`
3. Click **Deploy**.


## Content Sources

Club information, projects and links come from the official [Android Club VIT Bhopal GitHub organization](https://github.com/androidclubvitbhopal) and the details supplied by the club. No statistics, member names, photographs or event dates were invented.

## Links

- Website: [androidclub.tech](https://androidclub.tech/)
- GitHub: [androidclubvitbhopal](https://github.com/androidclubvitbhopal)
- Instagram: [@androidclub.vitb](https://www.instagram.com/androidclub.vitb/)
- LinkedIn: [Android Club VIT Bhopal](https://www.linkedin.com/company/android-club-vit-bhopal/)
- YouTube: [Android Club VIT Bhopal](https://www.youtube.com/@androidclub-vitb-wi4qe)
- Email: androidclub@vitbhopal.ac.in

## Author

Built by **&lt;Prajjwal Pandey&gt;** for the Android Club VIT Bhopal frontend recruitment challenge.

---

<div align="center">

Android is a trademark of Google LLC.

</div>

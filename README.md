# Android Club VIT Bhopal: Showcase Website

A single-page showcase website for **Android Club, VIT Bhopal**, built for the club's frontend development challenge.

It uses only **HTML5, CSS3 and vanilla JavaScript (ES6+)**: no frameworks, no libraries and no build step. The only external request is Google Fonts (Space Grotesk and Inter).

## Features
- Sticky navbar that turns to a blurred bar on scroll, with active-section highlighting and an animated mobile menu
- Hero with animated headline, droid illustration, floating tech chips, glowing orbs, grid and particle background
- About, What we do, Projects (with filters), Events (timeline), Community, Join, Contact and Footer sections
- Floating back-to-top arrow at the bottom-right
- Scroll reveals, card hover effects and parallax, all turned off when the visitor prefers reduced motion
- Responsive from small phones to large desktops, with no horizontal overflow
- Semantic HTML, keyboard-accessible navigation, SEO and Open Graph tags

## Project files
| File | Purpose |
|---|---|
| `index.html` | Page structure, SEO and Open Graph tags |
| `style.css` | Design system, layouts, animations and responsive rules |
| `script.js` | Navigation, filters, animations, interactions, and the editable project and event data at the top |
| `vercel.json` | Optional Vercel settings: clean URLs and basic security headers |
| `.gitignore` | Files Git should ignore |
| `README.md` | This file |

Keep `index.html`, `style.css` and `script.js` in the same folder.

## Run locally
Open `index.html` in any browser. To serve it from a local server instead:
```
python3 -m http.server 8000
```
Then visit http://localhost:8000.

## Edit the content
Projects and events are stored in `window.CLUB` at the top of `script.js`.

- **Projects:** each entry has a name, description, tech stack, category (`android`, `web` or `ai`) and GitHub link.
- **Events:** entries with `placeholder: true` still need real dates. Replace the `when` text with the real date and set `placeholder` to `false`.
- **Contact and social links:** edit them directly in `index.html`.

## Deploy
### 1. Upload the code to GitHub
```
git init
git add .
git commit -m "Android Club showcase website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 2a. Deploy on Vercel
1. Go to https://vercel.com/new and import the GitHub repository.
2. Set **Framework Preset** to **Other**. Leave the Build Command empty and the Output Directory as `.`
3. Click **Deploy**. Your live link will look like `https://<project-name>.vercel.app`.

### 2b. Or deploy on GitHub Pages
1. In the repository, open **Settings > Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
3. The site goes live at `https://<your-username>.github.io/<repo-name>/`.

## Submission checklist
- [ ] Code pushed to a public GitHub repository
- [ ] Live link added to the repository's About section
- [ ] Placeholder event dates replaced, or left clearly marked
- [ ] Live site checked on a phone and a laptop

## Content notes
Club information, projects and links come from the official [Android Club GitHub organization](https://github.com/androidclubvitbhopal). No statistics, member names, photographs or event dates were invented.

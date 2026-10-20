# NOOMO — noomo.dk

One-page website for NOOMO, a digital studio for B2B companies in Europe.
Static files only: no build step, no server code. It is hosted on GitHub Pages with the custom domain **noomo.dk**.

## Folder structure

```
/
├── index.html            the whole site (markup + <head> meta, Open Graph, favicons)
├── 404.html              "Page not found" page with a link to /
├── CNAME                 custom domain for GitHub Pages (noomo.dk)
├── .nojekyll             tells GitHub Pages to serve files as they are
├── robots.txt
├── sitemap.xml
├── README.md
└── assets/
    ├── css/styles.css    colours (design tokens), keyframes, responsive rules
    ├── js/i18n.js        all interface texts, EN | DE | PT | UA (default EN)
    ├── js/forms.js       Web3Forms access key + endpoint
    ├── js/main.js        image map, site logic, prices, case studies, renderer
    ├── i18n/*.json       the same texts exported per language (for translators)
    ├── img/logo/         logo.png (light theme), logo-dark.png (dark theme)
    ├── img/projects/     case-study covers (<project>.webp) and case images (<project>-01.webp …)
    ├── img/previews/     live-site hover previews (<project>.webp)
    ├── img/og/           og-image.jpg (1200×630, social sharing)
    └── icons/            favicon.ico, icon-192.png, apple-touch-icon.png, contact icons (.svg)
```

Fonts (Geist, Geist Mono) load from Google Fonts. The renderer at the end of `main.js` loads React 18 from unpkg.com. Both need an internet connection; everything else is in this folder.

## Where to edit

**Interface texts and translations.** `assets/js/i18n.js`. Each language is one block (`en`, `de`, `pt`, `uk`) with the same keys. Change the text after the key, keep the key. The site reads this file directly, so it also works when `index.html` is opened from disk. The JSON files in `assets/i18n/` are copies for translators; if you edit one, copy the change into `i18n.js`.

**Default language.** `DEFAULT: 'en'` in `i18n.js`. A visitor's choice is remembered in the browser. `?lang=de`, `?lang=pt` or `?lang=uk` in the URL forces a language.

**Prices (EUR, excl. VAT).** `assets/js/main.js`, search for `PRICES = {`:
- `ecom`, `landing`, `mvp`: Services starting prices
- `subStart`, `subStable`, `subFull`: Subscription per month; `subStartH`, `subStableH`, `subFullH`: hours included
- the remaining keys are add-on prices shown in the service popups

**Case studies and live projects.** `main.js`, search for `cases = [` (case studies with title, texts, cover and images), `LIVE_ONLY = [` (live sites without a case study) and `LIVE = [` (live links shown on cards).

**Images.** Put new files in `assets/img/projects/` or `assets/img/previews/` (lowercase, no spaces, `.webp` preferred), then add a line to `window.NOOMO_ASSETS` at the top of `main.js`, or write the path directly, e.g. `cover: 'assets/img/projects/new-client.webp'`.

**Contacts (email, phone, WhatsApp, Telegram, Instagram).** End of `main.js`, search for `contacts: [`. The email address also appears in `index.html` (search `hellonoomo@gmail.com`).

**Colours.** Top of `assets/css/styles.css` (`:root` for the light theme, `html[data-theme="dark"]` for the dark theme). Accent: `--accent: #FA3600`.

**Page title, description, social image.** `<head>` of `index.html`.

## Forms (Web3Forms)

Both forms ("Start a project" and "Book a call") send through Web3Forms. The access key is the constant at the top of **`assets/js/forms.js`**:

```js
const WEB3FORMS_KEY = '8dd61fb7-8391-4ce4-a21e-7da70940c406';
```

To send submissions to another inbox, create a key at https://web3forms.com and replace this value. Validation, subjects and success/error messages are in `main.js` (search `sendW3`).

## Deploy to GitHub Pages

1. Create a repository (for example `noomo-site`) and upload **the contents of this folder** to the root of the `main` branch. `index.html`, `CNAME` and `.nojekyll` must be at the top level. (Hidden files: on macOS press Cmd+Shift+. to see `.nojekyll` before dragging.)
2. Repository → **Settings → Pages** → Source: *Deploy from a branch*, Branch: `main`, folder `/ (root)` → Save.
3. Settings → Pages → Custom domain: `noomo.dk` (already set by the `CNAME` file). Tick **Enforce HTTPS** once the certificate is ready.
4. At your domain registrar (DNS for noomo.dk):
   - `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` records for `@` (optional): `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` record for `www`: `<your-github-username>.github.io`
5. DNS changes can take up to 24 hours. After that, https://noomo.dk/ serves the site.

To update the site later, edit the files in the repository (or upload new versions). GitHub Pages republishes within a minute or two.

## Test locally

Double-click `index.html`, or for a setup closer to GitHub Pages run a small server in this folder:

```
python3 -m http.server 8000
```

and open http://localhost:8000.

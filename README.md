# Valentijn Keijser

Personal portfolio at https://valentijnkeijser.nl, built with plain HTML, CSS, and JavaScript. No build step is required.

## Preview

Open `index.html` in a browser, or serve this directory:

```sh
python -m http.server 8080
```

Visit `http://localhost:8080`.

## Editing

- `index.html`: main portfolio, projects, experience, education, and contact details.
- `portfolio.css`: shared visual styles for the portfolio and pentest case study.
- `portfolio.js`: main-page project filters and mobile navigation.
- `pentest-tool.html` and `project.css`: pentest platform case study.
- `spileyapps/`: separate app and game portfolio with its own styles and scripts.

Android project previews reuse the existing assets in `spileyapps/assets/`. Their links open the corresponding SpileyApps project or Google Play listing. The main page's project filter counts are updated automatically from the project cards.

Publish as a static site, preserving the existing domain configuration, app-ads files, and SpileyApps privacy and terms pages.

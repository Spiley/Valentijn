# Valentijn Keijser

Personal portfolio at https://valentijnkeijser.nl. Plain HTML, CSS and JavaScript; no framework or runtime dependency.

## Design reference

The current [Brittany Chiang portfolio](https://brittanychiang.com/) is the concrete visual reference: a persistent introduction column, a scrolling content column, Inter typography, slate surfaces, muted body text and compact project rows. This is an original static implementation of that layout direction with Valentijn's own content and assets. The footer credits the reference.

Inter is self-hosted from the Fontsource variable Inter package (5.3.0). Its SIL Open Font License is in assets/fonts/Inter-LICENSE.txt.

## Editing and deployment

Edit index.html, pentest-tool.html, portfolio.css, project.css and portfolio.js. After editing CSS or JavaScript, run:

    node scripts/version-assets.mjs
    node scripts/check-assets.mjs

The versioning script writes content-hashed CSS and JavaScript into assets/css and assets/js, then updates both HTML pages. Commit the generated files together with the HTML. This prevents new HTML from loading an older browser/CDN-cached stylesheet. GitHub Pages serves the committed files directly; no build configuration is needed.

Serve the repository root for a local preview:

    python -m http.server 4173 --bind 127.0.0.1

Check both pages on desktop, tablet and mobile. The portfolio has nine projects with category filters, anchor navigation and expandable earlier work experience. All content remains readable without JavaScript.

The spileyapps/ catalogue and legal pages retain their separate styles. The existing GitHub Pages deployment and CNAME remain in place.

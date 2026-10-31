# Valentijn Keijser

Personal portfolio at https://valentijnkeijser.nl. Plain HTML, CSS and JavaScript; no framework or runtime dependency.

## Design direction

The user-selected reference is [Linear](https://linear.app/): near-black surfaces, restrained neutral colors, Inter with medium-weight display headings, thin borders, and large product presentations. The [official brand guidelines](https://linear.app/brand) provide further visual context.

The portfolio uses a full-width pentest dashboard, paired Android screenshots and a landscape gameplay presentation. All project images, icons and personal photos are the existing Valentijn/SpileyApps assets. No Linear logos, proprietary artwork or source code are used.

Inter is self-hosted from Fontsource variable Inter 5.3.0; its license is in assets/fonts/Inter-LICENSE.txt.

## Editing and deployment

Edit index.html, pentest-tool.html, portfolio.css, project.css and portfolio.js. After editing CSS or JavaScript, run:

    node scripts/version-assets.mjs
    node scripts/check-assets.mjs

The versioning script writes content-hashed CSS and JavaScript into assets/css and assets/js and updates both HTML pages. Commit the generated files together with the HTML. GitHub Pages serves them directly without a build configuration. Existing versioned assets remain available so cached older HTML can load its matching files.

Serve the repository root for a preview:

    python -m http.server 4173 --bind 127.0.0.1

Check the portfolio and case study on desktop, tablet and mobile, including all nine projects, category filters, navigation, earlier work experience and image proportions.

The spileyapps/ catalogue and legal pages retain their own styles. The existing GitHub Pages setup and CNAME remain in place.

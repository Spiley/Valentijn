# Valentijn Keijser

Personal portfolio at https://valentijnkeijser.nl, built with plain HTML, CSS, and JavaScript. No build step or package installation is required.

## Design foundations

The portfolio and pentest case study follow [Vercel's Geist Design System](https://vercel.com/geist):
- [Typography](https://vercel.com/geist/typography): Geist Sans for content and Geist Mono for dates, categories and technical metadata. Type sizes follow the 12/14/16/20/24/32/64 scale, with optical adjustments for headings.
- [Colors](https://vercel.com/geist/colors): white and off-white surfaces, neutral text and borders, and a blue keyboard focus ring. Project screenshots supply the color.
- [Grid](https://vercel.com/geist/grid): consistent alignment and responsive columns; lines separate sections without adding decorative grids.
- Spacing uses multiples of 4px; controls and image frames use a restrained 6px radius.

The layout adapts those foundations to a personal portfolio. It does not use Vercel branding or an unofficial component library. No new runtime dependency is needed.

Geist Sans and Geist Mono are self-hosted WOFF2 files from the official geist@1.9.0 npm package. Their SIL Open Font License is included in assets/fonts/LICENSE.txt.

## Local preview

Serve this directory with any static HTTP server, then open the local URL. For example:

    python -m http.server 4173 --bind 127.0.0.1

Check index.html and pentest-tool.html at desktop and mobile widths. Verify project filters, mobile navigation, keyboard focus, earlier-experience expansion and internal links. All nine projects are shown when JavaScript is unavailable.

The spileyapps/ app catalogue and legal pages have their own styles. Deployment remains through the repository's existing GitHub Pages setup and CNAME.

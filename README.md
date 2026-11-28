# AI Junction - Website Deployment Vercel

Eight purpose-built HTML pages with distinct layouts and page-specific content. No ebook page.

## Files
- `index.html` — homepage
- `about.html` — mission, values and audience
- `tools.html` — AI tools by use case and evaluation guidance
- `tutorials.html` — learning paths and YouTube link
- `bots.html` — Kharcha Buddy and WhatsApp development status
- `blog.html` — six introductory reading summaries (not full published articles)
- `courses.html` — planned learning, no checkout
- `contact.html` — verified supplied social URLs, no fake form
- `style.css`, `main.js`
- `assets/logo.png` and `assets/images/*.png`

The website uses local PNG illustrations from the previous package. They are stylized raster illustrations, **not** photorealistic photographs. Each content image is referenced at most once. The shared brand logo repeats in header/footer intentionally.

## Deploy
Extract ZIP, upload the *contents* into the GitHub repository root, and commit. Existing Vercel integration should rebuild automatically. If replacing files through GitHub's web upload, ensure obsolete files are removed separately.

## Notes
Social URLs are as provided. Course enrollment and payments are not implemented. Vercel Hobby is intended for non-commercial use; consider Cloudflare Free for public business marketing.

## V3 visual upgrade
- Hero PNGs display completely (`object-fit: contain`, natural aspect ratio).
- Modern gradient typography, fine grid backgrounds, glowing hero accents and floating hero artwork.
- Reveal-on-scroll sections, interactive hover cards, animated buttons, and improved mobile layouts.
- Reduced-motion support and a no-JavaScript fallback.
- All 41 content PNG files remain unique; logo reused intentionally.

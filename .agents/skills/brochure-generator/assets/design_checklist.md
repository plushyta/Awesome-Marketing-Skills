# Brochure Pre-Export Design Checklist

Run through every item before generating the final PDF. A single "NO" means the design needs fixing.

## Layout Integrity
- [ ] Every `.page` element is exactly `1080 × 1080px` — check both `width` and `height` in CSS
- [ ] No `margin`, `padding`, or `page-break` on `.page` wrapper elements
- [ ] Each page fills 100% with its background image (no white edges visible)
- [ ] Minimum 5 pages present (or as many as requested by user)

## Typography
- [ ] Hero headlines use `Cormorant Garamond` (weight 300), minimum 5.5rem
- [ ] Body copy uses `Jost` (weight 300), minimum 1.0rem (≈16px)
- [ ] Eyebrow text is ALL-CAPS with generous letter-spacing (≥3.5px)
- [ ] No font weights below 200 anywhere in the document
- [ ] No raw system fonts (Arial, Times, etc.) — Google Fonts @import is at top of `<style>`

## Color & Contrast (WCAG AAA)
- [ ] All text achieves ≥7:1 contrast ratio against its background
- [ ] Dark gradient overlays present on every page (3-stop: heavy top/bottom, lighter mid)
- [ ] No text outline (`-webkit-text-stroke` or `text-shadow`) anywhere
- [ ] No coloured box or card backgrounds behind any text

## Content & Copy
- [ ] Event name and dates are correct on the cover page
- [ ] All pricing, inclusions, and exclusions verified with user
- [ ] Trainer bio details confirmed (if included)
- [ ] Contact / booking details present on final page
- [ ] Copy tone is warm and reverent — never salesy or pushy

## Images
- [ ] Every page has a unique, contextually relevant Pexels image
- [ ] Images are served via HTTPS (not local file paths)
- [ ] No image is visually too light (no overlay adjustment needed)
- [ ] No image is off-topic or from a different geographic region

## PDF Conversion
- [ ] Puppeteer script points to correct HTML source file
- [ ] PDF output filename is descriptive and clean (no spaces, use underscores)
- [ ] PDF has been moved to `pdf_outputs/` directory
- [ ] Theme .md file has been created in `themes/`

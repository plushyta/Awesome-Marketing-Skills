# [Project Name] — [Destination/Context] Brochure
## Design Theme Documentation

**Generation Date:** [YYYY-MM-DD]
**Output File:** `[BrochureName].pdf`
**Source HTML:** `[brochure_name].html`

---

## Design Philosophy: "[Theme Name]"

[2–3 sentences describing the visual language, its emotional roots, and the overall aesthetic feel. Reference cultural, geographic, or spiritual elements relevant to the destination.]

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--gold` | `#C9A96E` | Ornaments, rules, borders, key accents |
| `--gold-light` | `#E8D5A3` | Secondary headings, eyebrow caps, price |
| `--saffron` | `#D4845A` | Reserved (hover states, alternate accent) |
| `--cream` | `#F5EDD8` | Body copy on dark backgrounds |
| `--warm-white` | `#FAF6EE` | Primary headings & hero text |
| `--dark-brown` | `#1A1108` | Body background |

**Overlay logic:** [Describe the gradient alpha values used per page zone — top/bottom vs. middle. E.g., "heavier at top and bottom (0.65–0.82 alpha), lighter in the middle (0.40–0.55 alpha)"]

---

## Typography

| Role | Font | Weight | Size | Notes |
|---|---|---|---|---|
| Hero Display | Cormorant Garamond | 300 | [Xrem] | [Notes] |
| Section Title | Cormorant Garamond | 400 | [Xrem] | [Notes] |
| Callout Quote | Cormorant Garamond | 300 italic | [Xrem] | [Notes] |
| Body Copy | Jost | 300 | [Xrem] | [Notes] |
| Eyebrow / Caption | Jost | 200–300 | [Xrem] | All-caps, [X]px letter-spacing |
| Price | Cormorant Garamond | 600 | [Xrem] | [Notes] |

**Reasoning:** [Explain why these fonts were chosen for this destination/event and how they reinforce the design philosophy.]

---

## Layout System

- **Page size:** 1080 × 1080 px (1:1 square, mobile-optimised)
- **Zones:** Top band (eyebrow + rule), Mid band (hero content), Bot band (coda + rule)
- **Padding:** [describe top/bottom and horizontal padding used]
- **Grid:** [describe any multi-column grids used on specific pages]
- **Decorative motifs:** [list specific ornament choices — e.g., gradient rules, glyphs, borderless chips]

---

## Image Selection (Pexels)

| Page | Subject | Pexels URL |
|---|---|---|
| 1 · Cover | [description] | `pexels.com/photos/[ID]` |
| 2 · [Page Name] | [description] | `pexels.com/photos/[ID]` |
| 3 · [Page Name] | [description] | `pexels.com/photos/[ID]` |
| 4 · [Page Name] | [description] | `pexels.com/photos/[ID]` |
| 5 · [Page Name] | [description] | `pexels.com/photos/[ID]` |

**Image search queries used:**
- `"[query 1]"`
- `"[query 2]"`
- `"[query 3]"`

---

## Content Strategy

**[N]-page narrative arc:**
1. **Cover** — [description]
2. **[Page Name]** — [description]
3. **[Page Name]** — [description]
4. **[Page Name]** — [description]
5. **[Page Name]** — [description]

**Voice:** [1 sentence describing the copy tone — e.g., warm, reverent, precise; never salesy.]

---

## WCAG AAA Compliance Notes

- [ ] No text background boxes used
- [ ] Gradient overlays achieve ≥7:1 contrast on all text
- [ ] No text outlines anywhere in the document
- [ ] Body copy minimum 1.0rem for readability
- [ ] All font weights ≥300 for stroke visibility at high resolution

---

## Replication Instructions

To create a similar brochure for another destination:
1. Replace `background-image` URLs with new Pexels queries matching the new destination
2. Update all copy content (eyebrow text, headings, body, dates)
3. Keep the same color palette — it works universally for [describe use case]
4. Adjust overlay gradient alpha by ±0.10 if new images are very light or very dark
5. Run `node utils/convert_[name].js` to generate the PDF

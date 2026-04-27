/**
 * PDF Converter Template — Brochure Generator
 * =============================================
 * Copy this file to utils/convert_<brochure_name>.js and update:
 *   - `HTML_FILE`   → the name of your HTML source file in utils/
 *   - `OUTPUT_FILE` → the desired output PDF filename
 *
 * CRITICAL: Do NOT change viewport dimensions, deviceScaleFactor, margin settings,
 * or printBackground. These are calibrated for pixel-perfect 1080x1080 PDF output.
 */

const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  // ── CONFIGURE THESE TWO LINES ──────────────────────────────────────────────
  const HTML_FILE   = 'brochure.html';          // source file inside utils/
  const OUTPUT_FILE = 'My_Project_Brochure.pdf'; // output PDF filename
  // ──────────────────────────────────────────────────────────────────────────

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 1:1 viewport — mobile-optimised brochure canvas
  await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });

  const filePath = path.resolve(__dirname, HTML_FILE);
  await page.goto(`file://${filePath}`, {
    waitUntil: 'networkidle0',
    timeout: 60000
  });

  // Wait for Google Fonts and Pexels images to fully render
  await new Promise(resolve => setTimeout(resolve, 4000));

  const outputPath = path.resolve(__dirname, OUTPUT_FILE);

  await page.pdf({
    path: outputPath,
    width: '1080px',
    height: '1080px',
    printBackground: true,
    // IMPORTANT: All margins must remain 0 to prevent page misalignment in PDF
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  await browser.close();
  console.log(`✅ PDF generated: ${outputPath}`);
})();

import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');
const outputDir = path.join(__dirname, 'pdfs');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

const files = [
  { input: 'slides-es.html', output: 'presentacion-es.pdf', lang: '1회차 Español' },
  { input: 'slides-ko.html', output: 'presentacion-ko.pdf', lang: '1회차 한국어' },
  { input: 'slides-en.html', output: 'presentacion-en.pdf', lang: '1회차 English' },
  { input: 'slides-p2-es.html', output: 'presentacion2-es.pdf', lang: '2회차 Español' },
  { input: 'slides-p2-ko.html', output: 'presentacion2-ko.pdf', lang: '2회차 한국어' },
  { input: 'slides-p2-en.html', output: 'presentacion2-en.pdf', lang: '2회차 English' },
];

console.log('🚀 Launching browser...');
const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

for (const file of files) {
  const inputPath = 'file:///' + path.join(publicDir, file.input).replace(/\\/g, '/');
  const outputPath = path.join(outputDir, file.output);

  console.log(`📄 Generating ${file.lang}...`);
  const page = await browser.newPage();

  await page.goto(inputPath, { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for Google Fonts to load
  await new Promise(r => setTimeout(r, 3000));

  await page.pdf({
    path: outputPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await page.close();
  console.log(`✅ Saved: ${outputPath}`);
}

await browser.close();
console.log('\n🎉 All PDFs generated in /pdfs folder!');

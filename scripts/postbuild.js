import fs from 'fs';
import path from 'path';

const distFolder = path.resolve('dist');
const indexHtml = path.join(distFolder, 'index.html');
const copy404 = path.join(distFolder, '404.html');

if (fs.existsSync(indexHtml)) {
  fs.copyFileSync(indexHtml, copy404);
  console.log('✓ Successfully created 404.html for GitHub Pages fallback');
}

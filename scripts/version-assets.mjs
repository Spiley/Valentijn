// Commit the generated files with the HTML: Pages can serve these without a build.
import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const assets = [['portfolio.css', 'css'], ['project.css', 'css'], ['portfolio.js', 'js']];
const versions = new Map();
for (const [source, directory] of assets) {
  const content = (await readFile(path.join(root, source), 'utf8')).replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
  const hash = createHash('sha256').update(content).digest('hex').slice(0, 12);
  const output = `assets/${directory}/${path.parse(source).name}.${hash}.${directory}`;
  await mkdir(path.join(root, 'assets', directory), { recursive: true });
  await writeFile(path.join(root, output), content);
  versions.set(source, output);
}
for (const file of ['index.html', 'pentest-tool.html']) {
  let html = await readFile(path.join(root, file), 'utf8');
  for (const [source, output] of versions) {
    const {name, ext} = path.parse(source);
    const pattern = new RegExp(`(?:assets/(?:css|js)/)?${name}(?:\\.[a-f0-9]{12})?\\${ext}(?:\\?[^"\\s]*)?`, 'g');
    html = html.replace(pattern, output);
  }
  await writeFile(path.join(root, file), html);
}
console.log('Versioned assets:', Object.fromEntries(versions));

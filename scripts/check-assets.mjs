// Protect against deploying new HTML with old or missing CSS/JavaScript.
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
for (const page of ['index.html', 'pentest-tool.html']) {
  const html = await readFile(path.join(root, page), 'utf8');
  const assets = [...html.matchAll(/(?:href|src)="(assets\/(?:css|js)\/([^/]+)\.([a-f0-9]{12})\.(css|js))"/g)];
  assert.equal(assets.length, 2, `${page}: expected two versioned assets`);
  for (const [, target, name, hash, extension] of assets) {
    const actual = await readFile(path.join(root, target), 'utf8');
    const source = (await readFile(path.join(root, `${name}.${extension}`), 'utf8')).replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
    assert.equal(actual, source, `${page}: generated ${target} is stale; run version-assets.mjs`);
    assert.equal(createHash('sha256').update(actual).digest('hex').slice(0, 12), hash, `${page}: incorrect content hash`);
    if (extension === 'css') {
      for (const [, url] of actual.matchAll(/url\("([^"]+)"\)/g)) {
        await access(path.resolve(root, path.dirname(target), url));
      }
    }
  }
  assert(!/(?:href|src)="(?:portfolio|project)\.(?:css|js)"/.test(html), `${page}: unversioned asset`);
  console.log(`${page}: correct content hashes, current assets and font paths.`);
}

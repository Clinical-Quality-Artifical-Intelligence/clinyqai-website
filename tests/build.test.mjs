import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
test('production HTML contains accessible, prerendered content and correct metadata', () => {
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.match(html, /<html lang="en-GB"/);
  assert.match(html, /<main id="main"/);
  assert.match(html, /17155505/);
  assert.match(html, /Registered office: Flat 2 Fenton House/);
  assert.doesNotMatch(html, /github\.com|github\.io/i);
  assert.match(html, /rel="canonical"/);
  assert.doesNotMatch(html, /<!--app-html-->/);
  assert.doesNotMatch(html, /Lincoln Gombedza|founder|certified|endorsed/i);
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert.equal(schema.name, 'ClinyQAi Limited');
});
test('navigation targets resolve and production asset paths exist under the Pages base', async () => {
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
  for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(match[1]), `Missing anchor: ${match[1]}`);
  const assets = [...html.matchAll(/(?:src|href)="(\/[^"#]+)"/g)];
  assert.ok(assets.length >= 4);
  for (const [, path] of assets) await access(new URL(`../dist/${path.slice(1)}`, import.meta.url));
  assert.match(html, /href="https:\/\/handbook.nursingcitizendevelopment.com\/"/);
  assert.match(html, /href="https:\/\/calendar.app.google\/8PfmvNcuPvxY9pPi6"/);
  assert.match(html, /href="mailto:lincoln@clinyqai.com"/);
});
test('deployment preserves the supplied logo byte-for-byte', async () => {
  const hash = data => createHash('sha256').update(data).digest('hex');
  const original = await readFile(new URL('../public/clinyqai-logo.jpeg', import.meta.url));
  const deployed = await readFile(new URL('../dist/clinyqai-logo.jpeg', import.meta.url));
  assert.equal(hash(original), hash(deployed));
  assert.equal(original.length, 34789);
});

test('legal pages are generated with direct navigation, metadata and company disclosures', async () => {
  for (const slug of ['legal', 'privacy', 'terms', 'accessibility']) {
    assert.ok(html.includes(`href="/${slug}/"`));
    const page = await readFile(new URL(`../dist/${slug}/index.html`, import.meta.url), 'utf8');
    assert.equal((page.match(/<h1\b/g) || []).length, 1);
    assert.ok(page.includes(`https://clinyqai.com/${slug}/`));
    assert.match(page, /17155505/);
    assert.match(page, /ST5 2AR/);
    assert.doesNotMatch(page, /TODO|PLACEHOLDER|\[INSERT/i);
    for (const [, path] of page.matchAll(/(?:src|href)="(\/[^"#]+)"/g)) {
      await access(new URL(`../dist/${path.slice(1)}`, import.meta.url));
    }
  }
});

import { readFile, writeFile } from 'node:fs/promises';
import { render } from '../.prerender/entry-server.js';
const path = new URL('../dist/index.html', import.meta.url);
const template = await readFile(path, 'utf8');
if (!template.includes('<!--app-html-->')) throw new Error('Missing prerender placeholder');
await writeFile(path, template.replace('<!--app-html-->', render()));
console.log('Prerendered corporate content for search engines and no-JavaScript visitors.');

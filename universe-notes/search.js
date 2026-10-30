import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const query = process.argv.slice(2).join(' ').trim().toLowerCase();
if (!query) {
  console.error('Please specify a search word: npm run search -- <word>');
  process.exit(1);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const highlightsPath = join(__dirname, 'notes', 'keynote-highlights.json');
const data = JSON.parse(await readFile(highlightsPath, 'utf8'));

const matches = (data.highlights || []).filter(h =>
  (h.title && h.title.toLowerCase().includes(query)) ||
  (h.summary && h.summary.toLowerCase().includes(query))
);

if (matches.length === 0) {
  console.log(`No highlights matching "${query}".`);
} else {
  console.log(`\nFound ${matches.length} highlight(s) matching "${query}":`);
  for (const h of matches) {
    console.log(`\n- [${h.topic}] ${h.title}`);
    console.log(`  Summary: ${h.summary}`);
    if (h.tryIt) {
      console.log(`  Try it: ${h.tryIt}`);
    }
  }
}

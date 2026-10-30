import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const highlightsPath = join(__dirname, 'notes', 'keynote-highlights.json');
const data = JSON.parse(await readFile(highlightsPath, 'utf8'));

const grouped = {};
for (const item of data.highlights || []) {
  if (!grouped[item.topic]) {
    grouped[item.topic] = [];
  }
  grouped[item.topic].push(item.title);
}

for (const [topic, titles] of Object.entries(grouped)) {
  console.log(`\n${topic}:`);
  for (const title of titles) {
    console.log(`  - ${title}`);
  }
}

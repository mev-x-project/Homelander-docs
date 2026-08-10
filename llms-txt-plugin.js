// Generates static/llms.txt and static/llms-full.txt from the docs/ source
// on every build, following the docs/llms-txt.dev convention. Docs (including
// Mermaid diagram source) are read straight from docs/*.md rather than the
// rendered HTML, so an LLM reading this file gets the diagram logic even
// though Mermaid itself only renders client-side in a browser.
const fs = require('fs');
const path = require('path');

function flattenSidebar(items) {
  const ids = [];
  for (const item of items) {
    if (typeof item === 'string') {
      ids.push(item);
    } else if (item && item.type === 'category') {
      if (item.link && item.link.type === 'doc') {
        ids.push(item.link.id);
      }
      ids.push(...flattenSidebar(item.items || []));
    }
  }
  return ids;
}

function stripFrontmatter(content) {
  return content.replace(/^---\n[\s\S]*?\n---\n/, '').trim();
}

function getFrontmatterTitle(raw, fallback) {
  const match = raw.match(/^title:\s*(.+)$/m);
  return match ? match[1].trim() : fallback;
}

function getFirstParagraph(body) {
  const paragraph = body
    .split('\n\n')
    .map((p) => p.trim())
    .find((p) => p && !p.startsWith('#') && !p.startsWith('```') && !p.startsWith('<div'));
  return paragraph ? paragraph.replace(/\s+/g, ' ') : '';
}

module.exports = function llmsTxtPlugin() {
  return {
    name: 'llms-txt-plugin',
    async postBuild({ outDir, siteConfig }) {
      const docsDir = path.join(__dirname, 'docs');
      const sidebars = require('./sidebars.js');
      const order = flattenSidebar(sidebars.mainSidebar);
      const baseUrl = `${siteConfig.url}${siteConfig.baseUrl}`;

      const indexLines = [`# ${siteConfig.title}`, '', siteConfig.tagline, '', '## Pages', ''];
      const fullParts = [];

      for (const id of order) {
        const filePath = path.join(docsDir, `${id}.md`);
        if (!fs.existsSync(filePath)) continue;

        const raw = fs.readFileSync(filePath, 'utf8');
        const title = getFrontmatterTitle(raw, id);
        const body = stripFrontmatter(raw);
        const url = `${baseUrl}${id === 'index' ? '' : `${id}/`}`;
        const summary = getFirstParagraph(body);

        indexLines.push(`- [${title}](${url})${summary ? `: ${summary}` : ''}`);
        fullParts.push(`# ${title}\n\nSource: ${url}\n\n${body}`);
      }

      fs.writeFileSync(path.join(outDir, 'llms.txt'), `${indexLines.join('\n')}\n`);
      fs.writeFileSync(path.join(outDir, 'llms-full.txt'), `${fullParts.join('\n\n---\n\n')}\n`);
    },
  };
};

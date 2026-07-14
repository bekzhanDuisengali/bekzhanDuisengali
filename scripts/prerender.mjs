// Renders <App/> to static HTML after `vite build` so crawlers that don't
// execute JS (GPTBot, OAI-SearchBot, and similar) see real page content
// instead of an empty <div id="root"></div>. The client still mounts via
// createRoot (not hydrateRoot), so it fully replaces this markup on load —
// no hydration-mismatch risk.
//
// This runs a real SSR build (not vite.ssrLoadModule, which resolves
// `new URL(x, import.meta.url)` asset references to local file:// paths
// instead of the hashed /assets/... URLs the client build produces).
import { build } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const SSR_OUT_DIR = 'dist/__ssr_tmp';

// Vite's `new URL(x, import.meta.url)` asset pattern only resolves to hashed
// /assets/... paths in the client build — in SSR builds it resolves to real
// file:// paths on disk (documented Vite limitation). Map those back to the
// hashed paths the client build already produced, using its manifest.
function remapAssetUrls(html) {
  const manifestPath = path.resolve('dist/.vite/manifest.json');
  if (!fs.existsSync(manifestPath)) return html;

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const bySrc = new Map();
  for (const entry of Object.values(manifest)) {
    if (entry.src && entry.file) bySrc.set(entry.src, `/${entry.file}`);
  }

  return html.replace(/file:\/\/[^"]*?(images\/[^"]*)/g, (match, relPath) => {
    const decoded = decodeURIComponent(relPath);
    const resolved = bySrc.get(decoded);
    return resolved || match;
  });
}

async function run() {
  await build({
    root: process.cwd(),
    logLevel: 'warn',
    build: {
      ssr: 'entry-server.tsx',
      outDir: SSR_OUT_DIR,
      emptyOutDir: true,
      rollupOptions: {
        output: { entryFileNames: 'entry-server.mjs' },
      },
    },
  });

  const entryPath = path.resolve(SSR_OUT_DIR, 'entry-server.mjs');
  const mod = await import(pathToFileURL(entryPath).href);
  const html = remapAssetUrls(mod.render());

  const distIndexPath = path.resolve('dist/index.html');
  const template = fs.readFileSync(distIndexPath, 'utf8');

  if (!template.includes('<div id="root"></div>')) {
    throw new Error('Could not find <div id="root"></div> in dist/index.html');
  }

  const output = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  fs.writeFileSync(distIndexPath, output, 'utf8');
  fs.rmSync(path.resolve(SSR_OUT_DIR), { recursive: true, force: true });

  console.log(`Prerendered App into dist/index.html (${html.length} chars)`);
}

run().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});

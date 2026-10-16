import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const VIRTUAL_ID = 'virtual:icons';
const RESOLVED_ID = `\0${VIRTUAL_ID}`;

/**
 * Exposes every PNG in src/img as a data URI via `import ICONS from 'virtual:icons'`,
 * keyed by `img/<file>` (the same path carriers.ts uses). HACS installs only a release's
 * assets, so separate image files never reach users; inlining makes the card one file.
 */
export default function inlineIcons(dir = 'src/img') {
  return {
    name: 'inline-icons',
    resolveId(id) {
      return id === VIRTUAL_ID ? RESOLVED_ID : null;
    },
    load(id) {
      if (id !== RESOLVED_ID) return null;
      const icons = {};
      for (const file of readdirSync(dir).filter((f) => f.endsWith('.png')).sort()) {
        this.addWatchFile(join(dir, file));
        icons[`img/${file}`] = `data:image/png;base64,${readFileSync(join(dir, file)).toString('base64')}`;
      }
      return `export default ${JSON.stringify(icons)};`;
    },
  };
}

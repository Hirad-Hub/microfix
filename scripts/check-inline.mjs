import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/i)?.[1];
if (!script) throw new Error('Standalone page has no inline application script.');
const root = { innerHTML: '' };
const toggle = { setAttribute() {}, addEventListener() {}, innerHTML: '' };
const listeners = {};
const document = {
  querySelector(selector) { return selector === '#root' ? root : selector === '.menu-toggle' ? toggle : null; },
  querySelectorAll(selector) {
    if (selector === '.nav-menu>button') return [];
    if (selector === '.menu-toggle') return [toggle];
    return [];
  },
  addEventListener(type, listener) { listeners[type] = listener; },
};
vm.runInNewContext(script, { document, Set, String, console });
for (const text of ['Reparaties waar je', 'VOOR WIE WIJ WERKEN', 'WAAROM MICROFIX', 'Altijd de juiste oplossing', 'AL MEER DAN 30 JAAR', 'MERKEN DIE WIJ REPAREREN', 'VERTROUWD DOOR ORGANISATIES IN HEEL NEDERLAND', 'Klaar om je hardware', 'Klantenservice']) {
  if (!root.innerHTML.includes(text)) throw new Error(`Missing expected content: ${text}`);
}
if (!root.innerHTML.includes('https://microfix.nl/wp-content/uploads/Reparatie-macbook-close-up.webp') && !html.includes('Reparatie-macbook-close-up.webp')) throw new Error('Original MicroFix photo reference missing.');
if (html.includes('src="/src/') || html.includes('type="module"')) throw new Error('Standalone HTML still depends on module serving.');
console.log('Standalone HTML script executed. Homepage sections and original photo reference are present.');

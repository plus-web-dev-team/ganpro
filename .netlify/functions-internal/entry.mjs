import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_98de2152.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_9d9a3d97.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_0485acf7.mjs');
const _page1  = () => import('./chunks/index_2752af48.mjs');
const _page2  = () => import('./chunks/e-learning_4cf6b0e2.mjs');
const _page3  = () => import('./chunks/calender_7fdc0a15.mjs');
const _page4  = () => import('./chunks/greeting_52baa18b.mjs');
const _page5  = () => import('./chunks/contact_676fae36.mjs');
const _page6  = () => import('./chunks/cource-1_46eece6e.mjs');
const _page7  = () => import('./chunks/cource-2_62ab3ec2.mjs');
const _page8  = () => import('./chunks/cource-3_13e722fc.mjs');
const _page9  = () => import('./chunks/cource_38203b4b.mjs');
const _page10  = () => import('./chunks/event-20211212_10b97f37.mjs');
const _page11  = () => import('./chunks/event-20220116_be035692.mjs');
const _page12  = () => import('./chunks/event-20221204_6099dec2.mjs');
const _page13  = () => import('./chunks/events_329a8d33.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/e-learning.astro", _page2],["src/pages/calender.astro", _page3],["src/pages/greeting.astro", _page4],["src/pages/contact.astro", _page5],["src/pages/cource/cource-1.astro", _page6],["src/pages/cource/cource-2.astro", _page7],["src/pages/cource/cource-3.astro", _page8],["src/pages/cource.astro", _page9],["src/pages/events/event-20211212.astro", _page10],["src/pages/events/event-20220116.astro", _page11],["src/pages/events/event-20221204.astro", _page12],["src/pages/events.astro", _page13]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };

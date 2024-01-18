import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_38abc777.mjs';
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
const _page1  = () => import('./chunks/index_5bcaab5f.mjs');
const _page2  = () => import('./chunks/e-learning_f235e39c.mjs');
const _page3  = () => import('./chunks/calender_c767e1a9.mjs');
const _page4  = () => import('./chunks/greeting_33ee27e4.mjs');
const _page5  = () => import('./chunks/contact_6da41e09.mjs');
const _page6  = () => import('./chunks/cource-1_2574ba40.mjs');
const _page7  = () => import('./chunks/cource-2_959056ed.mjs');
const _page8  = () => import('./chunks/cource-3_140e4cf5.mjs');
const _page9  = () => import('./chunks/cource_dadd742e.mjs');
const _page10  = () => import('./chunks/event-20211212_ec3500d2.mjs');
const _page11  = () => import('./chunks/event-20220116_fc43bae4.mjs');
const _page12  = () => import('./chunks/event-20221204_86f7692d.mjs');
const _page13  = () => import('./chunks/event-20230910_8355cbf1.mjs');
const _page14  = () => import('./chunks/event-20231203_7b7bb309.mjs');
const _page15  = () => import('./chunks/events_9053c5f0.mjs');
const _page16  = () => import('./chunks/report-20230910_bef79985.mjs');
const _page17  = () => import('./chunks/report-20231203_6c8ed9a7.mjs');
const _page18  = () => import('./chunks/about_64c70cfc.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/e-learning.astro", _page2],["src/pages/calender.astro", _page3],["src/pages/greeting.astro", _page4],["src/pages/contact.astro", _page5],["src/pages/cource/cource-1.astro", _page6],["src/pages/cource/cource-2.astro", _page7],["src/pages/cource/cource-3.astro", _page8],["src/pages/cource.astro", _page9],["src/pages/events/event-20211212.astro", _page10],["src/pages/events/event-20220116.astro", _page11],["src/pages/events/event-20221204.astro", _page12],["src/pages/events/event-20230910.astro", _page13],["src/pages/events/event-20231203.astro", _page14],["src/pages/events.astro", _page15],["src/pages/report/report-20230910.astro", _page16],["src/pages/report/report-20231203.astro", _page17],["src/pages/about.astro", _page18]]);
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

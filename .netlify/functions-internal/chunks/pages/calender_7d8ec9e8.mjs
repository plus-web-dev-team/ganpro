import { e as createAstro, f as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_9d9a3d97.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$BreadCrumb, a as $$MainContentOtherPage, b as $$Icons, c as $$Layout } from './about_e2c47abb.mjs';
/* empty css                              *//* empty css                           *//* empty css                           *//* empty css                              *//* empty css                           *//* empty css                           */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Calender = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Calender;
  return renderTemplate(_a || (_a = __template(["", '<script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js"><\/script><script src="https://cdn.jsdelivr.net/npm/@fullcalendar/google-calendar@6.1.6/index.global.min.js"><\/script><script>\n    // \u30AB\u30EC\u30F3\u30C0\u30FC\u30DA\u30FC\u30B8 FullCalendar\n    document.addEventListener("DOMContentLoaded", () => {\n        const calendarEl = document.getElementById("calendar");\n        let calendar = new FullCalendar.Calendar(calendarEl, {\n            googleCalendarApiKey: "AIzaSyDOZ3METTaI9ZcH0_plw_lasjZ6hyGDTQM",\n            events: {\n                googleCalendarId: "ganprohirosaki@gmail.com",\n            },\n        });\n        calendar.render();\n    });\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "\u5F18\u524D\u5927\u5B66\u304C\u3093\u30D7\u30ED | \u30AB\u30EC\u30F3\u30C0\u30FC", "data-astro-cid-mc2bahz5": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-mc2bahz5>${renderComponent($$result2, "BreadCrumb", $$BreadCrumb, { "data-astro-cid-mc2bahz5": true })}<div class="calender-wrapper" data-astro-cid-mc2bahz5><div id="calendar" data-astro-cid-mc2bahz5></div></div><div class="bg-primary repaet-image" data-astro-cid-mc2bahz5>${renderComponent($$result2, "MainContentOtherPage", $$MainContentOtherPage, { "data-astro-cid-mc2bahz5": true })}</div></main>${renderComponent($$result2, "Icons", $$Icons, { "data-astro-cid-mc2bahz5": true })}` }));
}, "/Users/admin/Develop/ganpro/src/pages/calender.astro", void 0);

const $$file = "/Users/admin/Develop/ganpro/src/pages/calender.astro";
const $$url = "/calender";

export { $$Calender as default, $$file as file, $$url as url };

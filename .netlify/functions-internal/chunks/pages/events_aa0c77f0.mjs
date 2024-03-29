import { e as createAstro, f as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_9d9a3d97.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$BreadCrumb, a as $$MainContentOtherPage, b as $$Icons, c as $$Layout } from './about_e2c47abb.mjs';
/* empty css                            *//* empty css                           *//* empty css                           *//* empty css                              *//* empty css                           *//* empty css                           */
const $$Astro = createAstro();
const $$Events = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Events;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u5F18\u524D\u5927\u5B66\u304C\u3093\u30D7\u30ED | \u516C\u958B\u8B1B\u5EA7\u30FB\u30A4\u30D9\u30F3\u30C8", "data-astro-cid-ro7pgs3h": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-ro7pgs3h>${renderComponent($$result2, "BreadCrumb", $$BreadCrumb, { "data-astro-cid-ro7pgs3h": true })}<div class="bg-primary events-wrapper" data-astro-cid-ro7pgs3h><div class="events-desc" data-astro-cid-ro7pgs3h><h2 data-astro-cid-ro7pgs3h>公開講座・イベント</h2><div class="card-wrapper" data-astro-cid-ro7pgs3h><div class="card" data-astro-cid-ro7pgs3h><a href="/events/event-20231203" data-astro-cid-ro7pgs3h><img src="/images/slides/slide-5.webp" alt="" data-astro-cid-ro7pgs3h><div data-astro-cid-ro7pgs3h><p data-astro-cid-ro7pgs3h>開催日：</p><p data-astro-cid-ro7pgs3h>2023年12月03日（日）</p></div><div data-astro-cid-ro7pgs3h><p data-astro-cid-ro7pgs3h>開催時間：</p><p data-astro-cid-ro7pgs3h>13:00〜15:30</p></div><div data-astro-cid-ro7pgs3h><p data-astro-cid-ro7pgs3h>定員：</p><p data-astro-cid-ro7pgs3h>80名</p></div><div data-astro-cid-ro7pgs3h><p data-astro-cid-ro7pgs3h>申込方法：</p><p data-astro-cid-ro7pgs3h>2023年11月7日（火）から</p></div></a></div><div class="card" data-astro-cid-ro7pgs3h><a href="/events/event-20230910" data-astro-cid-ro7pgs3h><img src="/images/slides/slide-4.webp" alt="" data-astro-cid-ro7pgs3h><div data-astro-cid-ro7pgs3h><p data-astro-cid-ro7pgs3h>開催日：</p><p data-astro-cid-ro7pgs3h>2023年09月10日（日）</p></div><div data-astro-cid-ro7pgs3h><p data-astro-cid-ro7pgs3h>開催時間：</p><p data-astro-cid-ro7pgs3h>10:00〜15:00</p></div><div data-astro-cid-ro7pgs3h><p data-astro-cid-ro7pgs3h>申込方法：</p><p data-astro-cid-ro7pgs3h>申込不要</p></div></a></div></div></div></div><div class="bg-primary repaet-image" data-astro-cid-ro7pgs3h>${renderComponent($$result2, "MainContentOtherPage", $$MainContentOtherPage, { "data-astro-cid-ro7pgs3h": true })}</div></main>${renderComponent($$result2, "Icons", $$Icons, { "data-astro-cid-ro7pgs3h": true })}` })}`;
}, "/Users/admin/Develop/ganpro/src/pages/events.astro", void 0);

const $$file = "/Users/admin/Develop/ganpro/src/pages/events.astro";
const $$url = "/events";

export { $$Events as default, $$file as file, $$url as url };

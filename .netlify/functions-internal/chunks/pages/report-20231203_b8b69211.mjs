import { e as createAstro, f as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_9d9a3d97.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$BreadCrumb, b as $$Icons, c as $$Layout } from './about_e2c47abb.mjs';
import { $ as $$MainContent } from './cource-1_29b6a8ae.mjs';
/* empty css                                     *//* empty css                           *//* empty css                           *//* empty css                              *//* empty css                           *//* empty css                           *//* empty css                              *//* empty css                              */
const $$Astro = createAstro();
const $$Report20231203 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Report20231203;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u6D3B\u52D5\u5831\u544A\u300C\u7B2C16\u56DE\u304C\u3093\u8A3A\u7642\u5E02\u6C11\u516C\u958B\u8B1B\u5EA7\u300D", "data-astro-cid-4z7n74nf": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-4z7n74nf>${renderComponent($$result2, "BreadCrumb", $$BreadCrumb, { "data-astro-cid-4z7n74nf": true })}<div class="bg-primary event-wrapper" data-astro-cid-4z7n74nf><div class="event-desc" data-astro-cid-4z7n74nf><h2 data-astro-cid-4z7n74nf>活動報告「第16回がん診療市民公開講座」</h2><div data-astro-cid-4z7n74nf><p data-astro-cid-4z7n74nf>
多くの市民の皆様にご参加いただきありがとうございました。
</p><div class="imgFlex" data-astro-cid-4z7n74nf><img src="/images/report/20231203/img01.webp" alt="" data-astro-cid-4z7n74nf><img src="/images/report/20231203/img02.webp" alt="" data-astro-cid-4z7n74nf><img src="/images/report/20231203/img03.webp" alt="" data-astro-cid-4z7n74nf><img src="/images/report/20231203/img04.webp" alt="" data-astro-cid-4z7n74nf></div></div></div><div class="look" data-astro-cid-4z7n74nf><a href="/events" data-astro-cid-4z7n74nf>講座・イベント一覧へ</a></div></div><div class="bg-primary repaet-image" data-astro-cid-4z7n74nf>${renderComponent($$result2, "MainContent", $$MainContent, { "data-astro-cid-4z7n74nf": true })}</div></main>${renderComponent($$result2, "Icons", $$Icons, { "data-astro-cid-4z7n74nf": true })}` })}`;
}, "/Users/admin/Develop/ganpro/src/pages/report/report-20231203.astro", void 0);

const $$file = "/Users/admin/Develop/ganpro/src/pages/report/report-20231203.astro";
const $$url = "/report/report-20231203";

export { $$Report20231203 as default, $$file as file, $$url as url };

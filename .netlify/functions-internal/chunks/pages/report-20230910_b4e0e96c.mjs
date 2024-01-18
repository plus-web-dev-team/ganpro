import { e as createAstro, f as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_9d9a3d97.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$BreadCrumb, b as $$Icons, c as $$Layout } from './about_e2c47abb.mjs';
import { $ as $$MainContent } from './cource-1_29b6a8ae.mjs';
/* empty css                                     *//* empty css                           *//* empty css                           *//* empty css                              *//* empty css                           *//* empty css                           *//* empty css                              *//* empty css                              */
const $$Astro = createAstro();
const $$Report20230910 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Report20230910;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u6D3B\u52D5\u5831\u544A\u300C\u307F\u3093\u306A\u3067\u77E5\u308A\u305F\u3044\u304C\u3093\u306E\u3053\u3068\u30FB\u304B\u3093\u306E\u3053\u3068\u5C55\u300D", "data-astro-cid-yltcvsod": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-yltcvsod>${renderComponent($$result2, "BreadCrumb", $$BreadCrumb, { "data-astro-cid-yltcvsod": true })}<div class="bg-primary event-wrapper" data-astro-cid-yltcvsod><div class="event-desc" data-astro-cid-yltcvsod><h2 data-astro-cid-yltcvsod>活動報告「みんなで知りたいがんのこと・かんのこと展」</h2><div data-astro-cid-yltcvsod><p data-astro-cid-yltcvsod>
多くの市民の皆様にご参加いただきありがとうございました。
</p><div class="imgFlex" data-astro-cid-yltcvsod><img src="/images/report/20230910/img01.webp" alt="" data-astro-cid-yltcvsod><img src="/images/report/20230910/img02.webp" alt="" data-astro-cid-yltcvsod><img src="/images/report/20230910/img03.webp" alt="" data-astro-cid-yltcvsod><img src="/images/report/20230910/img04.webp" alt="" data-astro-cid-yltcvsod><img src="/images/report/20230910/img05.webp" alt="" data-astro-cid-yltcvsod><img src="/images/report/20230910/img06.webp" alt="" data-astro-cid-yltcvsod></div></div></div><div class="look" data-astro-cid-yltcvsod><a href="/events" data-astro-cid-yltcvsod>講座・イベント一覧へ</a></div></div><div class="bg-primary repaet-image" data-astro-cid-yltcvsod>${renderComponent($$result2, "MainContent", $$MainContent, { "data-astro-cid-yltcvsod": true })}</div></main>${renderComponent($$result2, "Icons", $$Icons, { "data-astro-cid-yltcvsod": true })}` })}`;
}, "/Users/admin/Develop/ganpro/src/pages/report/report-20230910.astro", void 0);

const $$file = "/Users/admin/Develop/ganpro/src/pages/report/report-20230910.astro";
const $$url = "/report/report-20230910";

export { $$Report20230910 as default, $$file as file, $$url as url };

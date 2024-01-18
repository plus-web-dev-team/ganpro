import { e as createAstro, f as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_9d9a3d97.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$BreadCrumb, a as $$MainContentOtherPage, b as $$Icons, c as $$Layout } from './about_e2c47abb.mjs';
/* empty css                                *//* empty css                           *//* empty css                           *//* empty css                              *//* empty css                           *//* empty css                           */
const $$Astro = createAstro();
const $$ELearning = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ELearning;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u5F18\u524D\u5927\u5B66\u304C\u3093\u30D7\u30ED | E\u30E9\u30FC\u30CB\u30F3\u30B0", "data-astro-cid-lluxx7y6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-lluxx7y6>${renderComponent($$result2, "BreadCrumb", $$BreadCrumb, { "data-astro-cid-lluxx7y6": true })}<div class="bg-primary e-leaning-wrapper" data-astro-cid-lluxx7y6><div class="e-leaning-desc" data-astro-cid-lluxx7y6><h2 data-astro-cid-lluxx7y6>履修者専用</h2><div class="card-wrapper" data-astro-cid-lluxx7y6><div class="card" data-astro-cid-lluxx7y6><div class="card-title" data-astro-cid-lluxx7y6><h3 data-astro-cid-lluxx7y6>
東北広域次世代がんプロ養成プラン<br data-astro-cid-lluxx7y6>共通科目
</h3></div><div class="card-desc" data-astro-cid-lluxx7y6><div data-astro-cid-lluxx7y6><p data-astro-cid-lluxx7y6>※講義は、別サイトへ移動します。</p><p data-astro-cid-lluxx7y6>
読み込みに時間がかかります。ご了承ください。
</p></div><div class="card-counter" data-astro-cid-lluxx7y6><img src="https://www.f-counter.net/j/63/1700122266/" alt="アクセスカウンター" width="88" data-astro-cid-lluxx7y6></div><div class="card-link" data-astro-cid-lluxx7y6><a href="https://hirosaki-u.platon.jpn.com" target="_blank" data-astro-cid-lluxx7y6>Eラーニングはこちらから</a></div></div></div></div></div></div><div class="bg-primary repaet-image" data-astro-cid-lluxx7y6>${renderComponent($$result2, "MainContentOtherPage", $$MainContentOtherPage, { "data-astro-cid-lluxx7y6": true })}</div></main>${renderComponent($$result2, "Icons", $$Icons, { "data-astro-cid-lluxx7y6": true })}` })}`;
}, "/Users/admin/Develop/ganpro/src/pages/e-learning.astro", void 0);

const $$file = "/Users/admin/Develop/ganpro/src/pages/e-learning.astro";
const $$url = "/e-learning";

export { $$ELearning as default, $$file as file, $$url as url };

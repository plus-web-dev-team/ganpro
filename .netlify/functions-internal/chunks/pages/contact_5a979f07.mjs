import { e as createAstro, f as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_9d9a3d97.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$BreadCrumb, b as $$Icons, c as $$Layout } from './about_e2c47abb.mjs';
/* empty css                             *//* empty css                           *//* empty css                           *//* empty css                              *//* empty css                           *//* empty css                           */
const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u5F18\u524D\u5927\u5B66\u304C\u3093\u30D7\u30ED | \u304A\u554F\u3044\u5408\u308F\u305B", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-uw5kdbxl>${renderComponent($$result2, "BreadCrumb", $$BreadCrumb, { "data-astro-cid-uw5kdbxl": true })}<div class="bg-primary contact-wrapper" data-astro-cid-uw5kdbxl><div class="contact-desc" data-astro-cid-uw5kdbxl><h2 data-astro-cid-uw5kdbxl>お問い合わせ</h2><p data-astro-cid-uw5kdbxl>
下記フォームに必要事項を入力後、確認ボタンを押してください。
</p><form method="post" action="/public/mail.php" data-astro-cid-uw5kdbxl><div data-astro-cid-uw5kdbxl><p data-astro-cid-uw5kdbxl>ご用件</p><select name="ご用件" data-astro-cid-uw5kdbxl><option value="" data-astro-cid-uw5kdbxl>選択してください</option><option value="ご質問・お問い合わせ" data-astro-cid-uw5kdbxl>ご質問・お問い合わせ</option><option value="〇〇〇〇〇〇〇〇" data-astro-cid-uw5kdbxl>〇〇〇〇〇〇〇〇</option></select></div><div data-astro-cid-uw5kdbxl><p data-astro-cid-uw5kdbxl>お名前</p><input size="20" type="text" name="お名前" data-astro-cid-uw5kdbxl><span data-astro-cid-uw5kdbxl>※必須</span></div><div data-astro-cid-uw5kdbxl><p data-astro-cid-uw5kdbxl>電話番号</p><input size="30" type="text" name="電話番号" data-astro-cid-uw5kdbxl><span data-astro-cid-uw5kdbxl>※必須</span></div><div data-astro-cid-uw5kdbxl><p data-astro-cid-uw5kdbxl>Mail（半角）</p><input size="30" type="text" name="Email" data-astro-cid-uw5kdbxl><span data-astro-cid-uw5kdbxl>※必須</span></div><div data-astro-cid-uw5kdbxl><p data-astro-cid-uw5kdbxl>お問い合わせ内容</p><textarea name="お問い合わせ内容" cols="50" rows="5" data-astro-cid-uw5kdbxl></textarea><span data-astro-cid-uw5kdbxl>※必須</span></div><div data-astro-cid-uw5kdbxl><input type="submit" value="確認" data-astro-cid-uw5kdbxl><input type="reset" value="リセット" data-astro-cid-uw5kdbxl></div></form></div></div></main>${renderComponent($$result2, "Icons", $$Icons, { "data-astro-cid-uw5kdbxl": true })}` })}`;
}, "/Users/admin/Develop/ganpro/src/pages/contact.astro", void 0);

const $$file = "/Users/admin/Develop/ganpro/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };

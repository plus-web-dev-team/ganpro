import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent, h as renderSlot, i as renderHead, j as addAttribute } from '../astro_9d9a3d97.mjs';
import 'html-escaper';
import 'clsx';
/* empty css                           *//* empty css                           *//* empty css                              *//* empty css                           *//* empty css                           */
const $$Astro$a = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<a href="/" data-astro-cid-pux6a34n><img src="/images/univ-logo.png" alt="" class="logo" data-astro-cid-pux6a34n><p class="sub" data-astro-cid-pux6a34n>
文部科学省「次世代のがんプロフェッショナル養成プラン」採択プログラム<br data-astro-cid-pux6a34n>東北広域次世代がんプロ養成プラン
</p></a><ul data-astro-cid-pux6a34n><li data-astro-cid-pux6a34n><a href="/" data-astro-cid-pux6a34n>ホーム</a></li><li data-astro-cid-pux6a34n><a href="/about" data-astro-cid-pux6a34n>がんプロについて</a></li><li data-astro-cid-pux6a34n><a href="/greeting" data-astro-cid-pux6a34n>ごあいさつ</a></li><li data-astro-cid-pux6a34n><a href="/events" data-astro-cid-pux6a34n>公開講座・イベント</a></li><li data-astro-cid-pux6a34n><a href="/cource" data-astro-cid-pux6a34n>養成コース</a></li><li data-astro-cid-pux6a34n><a href="#partner" data-astro-cid-pux6a34n>連携大学</a></li><li data-astro-cid-pux6a34n><a href="/contact" data-astro-cid-pux6a34n>お問い合わせ</a></li></ul><a href="/e-learning" class="login" data-astro-cid-pux6a34n>ログイン</a>`;
}, "/Users/admin/Develop/ganpro/src/components/Navigation.astro", void 0);

const $$Astro$9 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2><nav data-astro-cid-3ef6ksr2>${renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-3ef6ksr2": true })}</nav></header>`;
}, "/Users/admin/Develop/ganpro/src/components/Header.astro", void 0);

const $$Astro$8 = createAstro();
const $$SpNavigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SpNavigation;
  return renderTemplate`${maybeRenderHead()}<div class="spNav" data-astro-cid-mvfbubpx><a class="nav-button" href="#" data-astro-cid-mvfbubpx>メニュー</a><nav class="nav-wrap" data-astro-cid-mvfbubpx><ul class="nav" data-astro-cid-mvfbubpx><li data-astro-cid-mvfbubpx><a href="/" data-astro-cid-mvfbubpx>ホーム</a></li><li data-astro-cid-mvfbubpx><a href="/about" data-astro-cid-mvfbubpx>がんプロについて</a></li><li data-astro-cid-mvfbubpx><a href="/greeting" data-astro-cid-mvfbubpx>ごあいさつ</a></li><li data-astro-cid-mvfbubpx><a href="/events" data-astro-cid-mvfbubpx>講座・イベント</a></li><li data-astro-cid-mvfbubpx><a href="/cource" data-astro-cid-mvfbubpx>養成コース</a></li><li data-astro-cid-mvfbubpx><a href="/#partner" data-astro-cid-mvfbubpx>連携大学</a></li><li data-astro-cid-mvfbubpx><a href="/contact" data-astro-cid-mvfbubpx>お問い合わせ</a></li></ul></nav></div>`;
}, "/Users/admin/Develop/ganpro/src/components/SpNavigation.astro", void 0);

const $$Astro$7 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-primary" data-astro-cid-sz7xmlte>${renderComponent($$result, "SpNavigation", $$SpNavigation, { "data-astro-cid-sz7xmlte": true })}<div class="address" data-astro-cid-sz7xmlte><div data-astro-cid-sz7xmlte><img src="/images/logo-univ.svg" alt="弘前大学ロゴ" data-astro-cid-sz7xmlte><h3 data-astro-cid-sz7xmlte>弘前大学 大学院 医学研究科</h3><img src="/images/logo.svg" alt="" data-astro-cid-sz7xmlte></div><address data-astro-cid-sz7xmlte><section data-astro-cid-sz7xmlte><p data-astro-cid-sz7xmlte>東北広域次世代がんプロ養成プラン 弘前大学事務局</p><p data-astro-cid-sz7xmlte>
〒036-8562 青森県弘前市在府町5番地<br data-astro-cid-sz7xmlte>弘前大学医学研究科
</p></section><section data-astro-cid-sz7xmlte><p data-astro-cid-sz7xmlte>TEL：0172-39-5410</p><p data-astro-cid-sz7xmlte>FAX：0172-39-5209</p><a href="mailto:ganpro@hirosaki-u.ac.jp" data-astro-cid-sz7xmlte>メール：ganpro@hirosaki-u.ac.jp</a></section></address></div></footer>`;
}, "/Users/admin/Develop/ganpro/src/components/Footer.astro", void 0);

const $$Astro$6 = createAstro();
const $$Loading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Loading;
  return renderTemplate`${maybeRenderHead()}<div class="loading-content is-loading" data-astro-cid-52om46wh><p class="loading-img" data-astro-cid-52om46wh><img src="../images/loading.webp" alt="ローディング" data-astro-cid-52om46wh></p></div>`;
}, "/Users/admin/Develop/ganpro/src/components/Loading.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="ja"><head><meta charset="UTF-8"><meta name="description" content=""><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">', "</head><body>", "", "", "", '<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"><\/script><script>\n	// \u30D1\u30F3\u304F\u305A\u30EA\u30B9\u30C8\n	const pageTitle = document.title;\n	const titleParts = pageTitle.split("|");\n	let rightPart = pageTitle;\n\n	if (titleParts.length > 1) {\n		rightPart = titleParts[1].trim();\n	}\n\n	const currentPageElement = document.getElementById("currentPage");\n\n	if (currentPageElement) {\n		currentPageElement.textContent = rightPart;\n	}\n<\/script><script>\n	// \u30AB\u30EB\u30FC\u30BB\u30EB\n	const initializeSwiper = true;\n\n	if (initializeSwiper) {\n		document.addEventListener("DOMContentLoaded", function () {\n			const swiper = new Swiper(".swiper", {\n				loop: true,\n				speed: 1500,\n				slidesPerView: 1.5,\n				spaceBetween: 30,\n				centeredSlides: true,\n				autoplay: {\n					delay: 1000,\n					disableOnInteraction: false,\n				},\n				navigation: {\n					nextEl: ".swiper-button-next",\n					prevEl: ".swiper-button-prev",\n				},\n			});\n		});\n	}\n\n	document.addEventListener("DOMContentLoaded", function () {\n		const navButton = document.querySelector(".nav-button");\n		const navWrap = document.querySelector(".nav-wrap");\n\n		navButton.addEventListener("click", function (e) {\n			e.preventDefault(); // \u30AF\u30EA\u30C3\u30AF\u6642\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u52D5\u4F5C\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\n\n			if (navButton.classList.contains("active")) {\n				navButton.classList.remove("active");\n				navWrap.classList.add("close");\n				navWrap.classList.remove("open");\n			} else {\n				navButton.classList.add("active");\n				navWrap.classList.add("open");\n				navWrap.classList.remove("close");\n			}\n		});\n	});\n<\/script><script>\n	const loading = document.querySelector(".is-loading");\n	window.addEventListener("load", () => {\n		loading.classList.add("is-loaded");\n	});\n<\/script></body></html>'])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Loading", $$Loading, {}), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/admin/Develop/ganpro/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro();
const $$Carousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Carousel;
  return renderTemplate`${maybeRenderHead()}<div class="swiper" data-astro-cid-wfe7xcno><div class="swiper-wrapper" data-astro-cid-wfe7xcno><div class="swiper-slide" data-astro-cid-wfe7xcno><a href="/events/event-20231203" data-astro-cid-wfe7xcno><img src="/images/slides/slide-5.webp" alt="第16回がん診療市民公開講座" data-astro-cid-wfe7xcno></a></div><div class="swiper-slide" data-astro-cid-wfe7xcno><a href="/events/event-20230910" data-astro-cid-wfe7xcno><img src="/images/slides/slide-4.webp" alt="みんなで知りたいがんのこと・かんのこと展" data-astro-cid-wfe7xcno></a></div><div class="swiper-slide" data-astro-cid-wfe7xcno><a href="/events/event-20231203" data-astro-cid-wfe7xcno><img src="/images/slides/slide-5.webp" alt="第16回がん診療市民公開講座" data-astro-cid-wfe7xcno></a></div><div class="swiper-slide" data-astro-cid-wfe7xcno><a href="/events/event-20230910" data-astro-cid-wfe7xcno><img src="/images/slides/slide-4.webp" alt="みんなで知りたいがんのこと・かんのこと展" data-astro-cid-wfe7xcno></a></div></div><!-- ページネーション --><div class="swiper-pagination" data-astro-cid-wfe7xcno></div><!-- 前後の矢印 --><div class="swiper-button-prev" data-astro-cid-wfe7xcno></div><div class="swiper-button-next" data-astro-cid-wfe7xcno></div></div>`;
}, "/Users/admin/Develop/ganpro/src/components/Carousel.astro", void 0);

const $$Astro$3 = createAstro();
const $$Icons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Icons;
  return renderTemplate`${maybeRenderHead()}<div class="icons" data-astro-cid-apb64oph><div data-astro-cid-apb64oph><a href="https://www.facebook.com/Ganpro.Hirosaki/" target="_blank" data-astro-cid-apb64oph><img src="/images/fb.svg" alt="" data-astro-cid-apb64oph><p data-astro-cid-apb64oph>&nbsp;</p></a><a href="/calender" data-astro-cid-apb64oph><img src="/images/calender.svg" alt="" data-astro-cid-apb64oph><p data-astro-cid-apb64oph>日程はこちら</p></a></div></div>`;
}, "/Users/admin/Develop/ganpro/src/components/Icons.astro", void 0);

const $$Astro$2 = createAstro();
const $$BreadCrumb = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BreadCrumb;
  return renderTemplate`${maybeRenderHead()}<nav class="breadcrumbs" data-astro-cid-dowv5jz3><ul data-astro-cid-dowv5jz3><li data-astro-cid-dowv5jz3><a href="/" data-astro-cid-dowv5jz3>ホーム</a></li><li id="currentPage" data-astro-cid-dowv5jz3></li></ul></nav>`;
}, "/Users/admin/Develop/ganpro/src/components/BreadCrumb.astro", void 0);

const $$Astro$1 = createAstro();
const $$MainContentOtherPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainContentOtherPage;
  return renderTemplate`${maybeRenderHead()}<div class="main-content" data-astro-cid-apq5lpqr><div class="column-right" data-astro-cid-apq5lpqr><article data-astro-cid-apq5lpqr><div class="cource" data-astro-cid-apq5lpqr><h2 data-astro-cid-apq5lpqr>養成コース</h2><div data-astro-cid-apq5lpqr><a href="/cource/cource-1" data-astro-cid-apq5lpqr>地域がん医療<br data-astro-cid-apq5lpqr>次世代リーダー育成コース</a><a href="/cource/cource-2" data-astro-cid-apq5lpqr>地域がん医療を推進する<br data-astro-cid-apq5lpqr>次世代病理診断医育成コース</a><a href="/cource/cource-3" data-astro-cid-apq5lpqr>地域がん医療<br data-astro-cid-apq5lpqr>次世代放射線治療医育成コース</a></div></div><div class="event" data-astro-cid-apq5lpqr><h2 data-astro-cid-apq5lpqr>講座・イベント</h2>${renderComponent($$result, "Carousel", $$Carousel, { "data-astro-cid-apq5lpqr": true })}</div></article><article data-astro-cid-apq5lpqr><div class="partner" data-astro-cid-apq5lpqr><h2 data-astro-cid-apq5lpqr>連携大学</h2><ul data-astro-cid-apq5lpqr><li data-astro-cid-apq5lpqr><a href="http://www.ganpro.med.tohoku.ac.jp/index.html" target="_blank" data-astro-cid-apq5lpqr>東北大学</a></li><li data-astro-cid-apq5lpqr><a href="http://www.med.akita-u.ac.jp/~ganpro29/" target="_blank" data-astro-cid-apq5lpqr>秋田大学</a></li><li data-astro-cid-apq5lpqr><a href="https://www.id.yamagata-u.ac.jp/ganpro/" target="_blank" data-astro-cid-apq5lpqr>山形大学</a></li><li data-astro-cid-apq5lpqr><a href="https://www.med.niigata-u.ac.jp/gan/" target="_blank" data-astro-cid-apq5lpqr>新潟大学</a></li><li data-astro-cid-apq5lpqr><a href="https://www.fmu.ac.jp/byoin/25syuyocenter/08professional/index.html" target="_blank" data-astro-cid-apq5lpqr>福島県立医科大学</a></li></ul></div><div class="relevance" data-astro-cid-apq5lpqr><h2 data-astro-cid-apq5lpqr>弘前大学関連</h2><div class="related" data-astro-cid-apq5lpqr><div data-astro-cid-apq5lpqr><a href="http://www.med.hirosaki-u.ac.jp/~oncology/" target="_blank" data-astro-cid-apq5lpqr><img src="/images/face-right.svg" alt="腫瘍内科学講座" data-astro-cid-apq5lpqr><p data-astro-cid-apq5lpqr>腫瘍内科学講座</p></a></div><div data-astro-cid-apq5lpqr><a href="http://www.med.hirosaki-u.ac.jp/~anatopathol/" target="_blank" data-astro-cid-apq5lpqr><img src="/images/face-center_smallSmile.svg" alt="病理診断学講座" data-astro-cid-apq5lpqr><p data-astro-cid-apq5lpqr>病理診断学講座</p></a></div><div data-astro-cid-apq5lpqr><a href="http://www.med.hirosaki-u.ac.jp/~radio/" target="_blank" data-astro-cid-apq5lpqr><img src="/images/face-center_smile.svg" alt="放射線腫瘍学講座、放射線診断学講座" data-astro-cid-apq5lpqr><p data-astro-cid-apq5lpqr>放射線腫瘍学講座<br data-astro-cid-apq5lpqr>放射線診断学講座</p></a></div><div data-astro-cid-apq5lpqr><a href="https://www.med.hirosaki-u.ac.jp/~cancer-c/index.html" target="_blank" data-astro-cid-apq5lpqr><img src="/images/face-left.svg" alt="医学部附属病院腫瘍センター" data-astro-cid-apq5lpqr><p data-astro-cid-apq5lpqr>医学部附属病院<br data-astro-cid-apq5lpqr>腫瘍センター</p></a></div></div></div></article></div></div>`;
}, "/Users/admin/Develop/ganpro/src/components/MainContentOtherPage.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u5F18\u524D\u5927\u5B66\u304C\u3093\u30D7\u30ED | \u304C\u3093\u30D7\u30ED\u306B\u3064\u3044\u3066", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-kh7btl4r>${renderComponent($$result2, "BreadCrumb", $$BreadCrumb, { "data-astro-cid-kh7btl4r": true })}<div class="bg-primary about-wrapper" data-astro-cid-kh7btl4r><div class="about-desc" data-astro-cid-kh7btl4r><h2 data-astro-cid-kh7btl4r>がんプロについて</h2><div id="overview" class="anchor" data-astro-cid-kh7btl4r><h3 data-astro-cid-kh7btl4r>事業概要</h3><p data-astro-cid-kh7btl4r>
青森県は若年層を含めたがん死亡率が最も高い地域であり、同時に広域な面積に対して医療資源が不足している地域である。さらに日本が抱える大きな問題である人口減・少子高齢化が、全国トップで進んでおり、その中でがん医療の諸問題を解決するためには、単なる専門医療職の育成のみでは限界がある。育成された専門医療職が地域全体のネットワークの中で、自らが有機的につながりを広げて活躍することが求められている。本事業の特徴は、顕在化している課題に取り組む各種専門医療資格取得のための学習と同時に、教育技法そのものを学び、そして実際のネットワーク作りに参加してその構築方法も学習するところにある。本事業の目的は、コース履修後に地域がん教育の拡散と地域医療ネットワーク構築を担う一員として、地域住民とがん患者家族の視点を持って、予防から終末期医療までの全過程におけるがん医療の諸問題の解決にあたる人材を育成することにある。
</p></div><div id="talented" class="anchor" data-astro-cid-kh7btl4r><h3 data-astro-cid-kh7btl4r>養成する人材</h3><p data-astro-cid-kh7btl4r>
県内においては、放射線治療医、核医学治療医および病理診断医の不在から、がん関連の拠点病院等の条件を満たせない背景がある。これより、それぞれの分野における次世代専門医育成のコースを作る。また、緩和医療の教育体制が充実されてきた一方で、終末期医療に関わる医療人材の連携に課題が残る。また、がん関連学際領域についての学習の場が限られている。これらに対し、限られた医療資源において患者視点でより具体的な医療連携を構築する技能から習得し、またがん関連の学際領域を学習できる。
</p></div><div data-astro-cid-kh7btl4r><a href="/cource" data-astro-cid-kh7btl4r>養成コースはこちら</a></div></div></div><div class="bg-primary repaet-image" data-astro-cid-kh7btl4r>${renderComponent($$result2, "MainContentOtherPage", $$MainContentOtherPage, { "data-astro-cid-kh7btl4r": true })}</div></main>${renderComponent($$result2, "Icons", $$Icons, { "data-astro-cid-kh7btl4r": true })}` })}`;
}, "/Users/admin/Develop/ganpro/src/pages/about.astro", void 0);

const $$file = "/Users/admin/Develop/ganpro/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BreadCrumb as $, $$MainContentOtherPage as a, $$Icons as b, $$Layout as c, $$Carousel as d, about as e };

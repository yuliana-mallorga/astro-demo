import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderSlot, b as createAstro, d as renderComponent, f as renderHead } from './astro/server_D1ZBQIOj.mjs';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$HeaderButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderButton;
  const { path } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(path, "href")} class="text-sm px-5 py-2.5  text-white inline-flex transition-all duration-200 ease-in-out hover:shadow-lg flex-row text-white text-center justify-center w-full h-full font-medium rounded-lg cursor-pointer hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium group-hover:text-sky-100 bg-slate-950 group-hover:bg-black backdrop-blur-3xl hove: scale-110 scale-90 gap-x-2 opacity-70 hover:opacity-100"> ${renderSlot($$result, $$slots["before"])} ${renderSlot($$result, $$slots["default"])} ${renderSlot($$result, $$slots["after"])} </a>`;
}, "/home/yuliana/Documents/My-Projects-2024/Projects-with-astro/curso-astro-demo/src/components/HeaderButton.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="py-8 px-4 mx-auto lg:py-16 lg:px-6"> <div class="mx-auto text-center mb-8 lg:mb-16"> <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-white">
SpaceX launches 🚀
</h2> <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
All information about SpaceX launches
</p> </div> <nav class="flex flex-col mx-auto items-center justify-between w-4/5 text-center md:flex-row"> ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "path": "/" }, { "before": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-rocket"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg>`, "default": ($$result2) => renderTemplate` 
Latest releases
` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "path": "/about" }, { "before": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-hexagon"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path><path d="M12 9h.01"></path><path d="M11 12h1v4h1"></path></svg>`, "default": ($$result2) => renderTemplate` 
About the project
` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "path": "/404" }, { "before": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20.984 12.535a9 9 0 1 0 -8.431 8.448"></path><path d="M12 7v5l3 3"></path><path d="M19 16v6"></path><path d="M22 19l-3 3l-3 -3"></path></svg>`, "default": ($$result2) => renderTemplate` 
The oldest
` })} </nav> </header>`;
}, "/home/yuliana/Documents/My-Projects-2024/Projects-with-astro/curso-astro-demo/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/yuliana/Documents/My-Projects-2024/Projects-with-astro/curso-astro-demo/node_modules/.pnpm/astro@4.10.3_typescript@5.4.5/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="SpaceX Launches"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-gray-900 min-h-screen pb-32"> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-5xl px-4 m-auto"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/home/yuliana/Documents/My-Projects-2024/Projects-with-astro/curso-astro-demo/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };

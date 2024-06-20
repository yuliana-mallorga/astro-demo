/* empty css                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_D1ZBQIOj.mjs';
import { $ as $$Layout } from './Layout_DUY34byq.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col justify-center items-center"> <h1 class="text-white text-3xl text-center">
This page does not exist.
</h1> <img src="https://midu.dev/images/this-is-fine-404.gif" alt="Not found"> </div> ` })}`;
}, "/home/yuliana/Documents/My-Projects-2024/Projects-with-astro/curso-astro-demo/src/pages/404.astro", void 0);

const $$file = "/home/yuliana/Documents/My-Projects-2024/Projects-with-astro/curso-astro-demo/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };

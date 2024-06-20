/* empty css                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from './astro/server_D1ZBQIOj.mjs';
import { $ as $$Layout } from './Layout_DUY34byq.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About the project" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-white text-center"> <h1 class="text-3xl font-bold mb-14">About the project</h1> <p class="font-semibold text-lg">The SpaceX launches project is a demo for the Astro course.</p> </div> ` })}`;
}, "/home/yuliana/Documents/My-Projects-2024/Projects-with-astro/curso-astro-demo/src/pages/about.astro", void 0);

const $$file = "/home/yuliana/Documents/My-Projects-2024/Projects-with-astro/curso-astro-demo/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };

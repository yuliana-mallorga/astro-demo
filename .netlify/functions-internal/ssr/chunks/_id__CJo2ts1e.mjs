/* empty css                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from './astro/server_D1ZBQIOj.mjs';
import { $ as $$Layout } from './Layout_DUY34byq.mjs';
import { g as getLaunchBy } from './spacex_C2PZxN3M.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let launch;
  if (id) {
    launch = await getLaunchBy({ id });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Lanzamiento ${id}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="flex flex-col gap-y-5 text-white"> <img class="w-52 h-auto"${addAttribute(launch?.links.patch.small, "src")}${addAttribute(launch?.name, "alt")}> <h2 class="text-4xl font-bold">Launch #${launch?.flight_number}</h2> <p class="text-lg">${launch?.details}</p> </article> ` })}`;
}, "/home/yuliana/Documents/My-Projects-2024/Projects-with-astro/curso-astro-demo/src/pages/launch/[id].astro", void 0);

const $$file = "/home/yuliana/Documents/My-Projects-2024/Projects-with-astro/curso-astro-demo/src/pages/launch/[id].astro";
const $$url = "/launch/[id]";

export { $$id as default, $$file as file, prerender, $$url as url };

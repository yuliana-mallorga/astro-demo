/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from './astro/server_D1ZBQIOj.mjs';
import { $ as $$Layout } from './Layout_DUY34byq.mjs';
import { a as getLatestLaunches } from './spacex_C2PZxN3M.mjs';

const $$Astro = createAstro();
const $$CardLaunch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardLaunch;
  const { success, flightNumber, id, img, details } = Astro2.props;
  const launchStatus = success ? "Success" : "Failure";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/launch/${id}`, "href")} class="rouned-lg border shadow-md bg-gray-800 border-gray-700 
  hover:scale-105 hover:bg-gray-700 hover:border-gray-500 transition 
  flex flex-col w-full"> <picture class="flex justify-center p-4"> <img class="mb-5 rounded-lg"${addAttribute(img, "src")}${addAttribute(`Patch for launch ${id}`, "alt")}> </picture> <header class="p-4 flex-grow"> <span${addAttribute([
    "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded",
    {
      "bg-green-400 text-green-900": success,
      "bg-red-400 text-red-900": !success
    }
  ], "class:list")}> ${launchStatus} </span> <h2 class="my-2 text-2xl font-bold tracking-tight text-white">
Flight #${flightNumber} </h2> <p class="mb-4 font-light text-gray-400"> ${details !== null && details?.length > 100 ? details.slice(0, 100) + "..." : details} </p> </header> </a>`;
}, "/home/yuliana/Documents/My-Projects-2024/Projects-with-astro/curso-astro-demo/src/components/CardLaunch.astro", void 0);

const $$Launches = createComponent(async ($$result, $$props, $$slots) => {
  const launches = await getLatestLaunches();
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"> ${launches.map(
    (launch) => renderTemplate`${renderComponent($$result, "CardLaunch", $$CardLaunch, { "id": launch.id, "img": launch.links.patch.small, "success": launch.success, "flightNumber": launch.flight_number, "details": launch.details })}`
  )} </div>`;
}, "/home/yuliana/Documents/My-Projects-2024/Projects-with-astro/curso-astro-demo/src/components/Launches.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SpaceX Launches" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Launches", $$Launches, {})} ` })}`;
}, "/home/yuliana/Documents/My-Projects-2024/Projects-with-astro/curso-astro-demo/src/pages/index.astro", void 0);

const $$file = "/home/yuliana/Documents/My-Projects-2024/Projects-with-astro/curso-astro-demo/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

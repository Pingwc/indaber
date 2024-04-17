/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_2eN6dZb_.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_yJbkbElJ.mjs';
import 'clsx';
/* empty css                             */

const CLIENTES = [{
  id: "escudo_SanAntonio",
  name: "Ayuntamiento de San Antonio",
  url: "https://www.santantoni.net/es"
}, {
  id: "escudo_SantaEulalia",
  name: "Ayuntamiento de Santa Eulalia",
  url: "https://santaeulariadesriu.com/es/"
}, {
  id: "escudo_Formentera",
  name: "Consell Insular de Formentera",
  url: "https://www.consellinsulardeformentera.cat/index.php?lang=es"
}, {
  id: "ferrovial",
  name: "Ferrovial",
  url: "https://www.ferrovial.com/es/"
}];

const $$Astro$1 = createAstro();
const $$Clientes$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Clientes$1;
  return renderTemplate`${maybeRenderHead()}<section class="my-40" data-astro-cid-uejwba36> <h3 class="text-2xl font-semibold uppercase text-orange-500 flex items-center justify-center" data-astro-cid-uejwba36>
Clientes
</h3> <div class="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-4 px-20 lg:px-60" data-astro-cid-uejwba36> ${CLIENTES.map(({ id, name, url }) => renderTemplate`<div class="relative" data-astro-cid-uejwba36> <a class="company-link group relative mx-10 sm:mx-0 flex h-24 md:h-32 lg:h-40 items-center justify-center overflow-hidden"${addAttribute(`Visita la web de ${name}`, "title")}${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-uejwba36> <img${addAttribute(`/img/clientes/${id}.svg`, "src")}${addAttribute(`Logo de ${name}`, "alt")} class="company-logo w-20 h-auto px-2 transition group-hover:scale-110" data-astro-cid-uejwba36> </a> <span class="text-white block text-center mt-2" data-astro-cid-uejwba36>${name}</span> </div>`)} </div> <div class="mt-10 flex items-center justify-center text-white" data-astro-cid-uejwba36>
Y muchos otros...
</div> </section> `;
}, "C:/Users/pingw/Astro/indaber/indaber/src/sections/clientes.astro", void 0);

const $$Astro = createAstro();
const $$Clientes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Clientes;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Port" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Clientes1", $$Clientes$1, {})} ` })}`;
}, "C:/Users/pingw/Astro/indaber/indaber/src/pages/clientes.astro", void 0);

const $$file = "C:/Users/pingw/Astro/indaber/indaber/src/pages/clientes.astro";
const $$url = "/clientes";

export { $$Clientes as default, $$file as file, $$url as url };

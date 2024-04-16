/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_2eN6dZb_.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_BKtPaY8v.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$3 = createAstro();
const $$Mapa = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Mapa;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col w-full items-center py-10 bg-gray-200" data-astro-cid-gxjd33wb> <h2 class="text-black text-2xl font-semibold py-5" data-astro-cid-gxjd33wb>Donde estamos</h2> <figure class="map-container px-5" data-astro-cid-gxjd33wb> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.4319758116476!2d1.427910775811374!3d38.91410297172058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1299468f1d61abe7%3A0x8622feb0f5157ca7!2sIndaber%20Ibiza!5e0!3m2!1ses!2ses!4v1710240076574!5m2!1ses!2ses" width="1000" height="250" style="border:0" allowfullscreen="" loading="lazy" title="Mapa" data-astro-cid-gxjd33wb>
    </iframe> <figcaption class="text-black py-3 font-semibold text-center" data-astro-cid-gxjd33wb>
Calle Pere Francés 40, 07800 Ibiza
</figcaption> </figure> </div> `;
}, "C:/Users/pingw/Astro/indaber/indaber/src/sections/mapa.astro", void 0);

const MARCAS = [{
  id: "solaredge",
  name: "Solar Edge",
  url: "https://www.solaredge.com/es/"
}, {
  id: "victron",
  name: "Victron",
  url: "https://www.victronenergy.com.es/"
}, {
  id: "goodwe",
  name: "Goodwe",
  url: "https://es.goodwe.com/"
}, {
  id: "SMA",
  name: "Sunny Portal",
  url: "https://www.sma.de/es/"
}, {
  id: "salicru",
  name: "Salicru",
  url: "https://www.salicru.com/"
}, {
  id: "ingeteam",
  name: "Ingeconsun",
  url: "https://www.ingeteam.com/es-es/inicio.aspx"
}];

const $$Astro$2 = createAstro();
const $$Marcas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Marcas;
  return renderTemplate`${maybeRenderHead()}<section class="my-40" data-astro-cid-qfcziibn> <h3 class="text-2xl font-semibold uppercase text-white flex items-center justify-center" data-astro-cid-qfcziibn>
Marcas
</h3> <h2 class="text-2xl text-white flex items-center justify-center" data-astro-cid-qfcziibn>
Algunas de las marcas con las que trabajamos:
</h2> <div class="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 px-20 lg:px-60" data-astro-cid-qfcziibn> ${MARCAS.map(({ id, name, url }) => renderTemplate`<div class="relative" data-astro-cid-qfcziibn> <a class="company-link group relative flex h-24 md:h-32 lg:h-40 items-center justify-center overflow-hidden"${addAttribute(`Visita la web de ${name}`, "title")}${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-qfcziibn> <img${addAttribute(`/img/marcas/${id}.svg`, "src")}${addAttribute(`Logo de ${name}`, "alt")} class="company-logo w-40 h-auto px-2 transition group-hover:scale-110" data-astro-cid-qfcziibn> </a> <span class="text-white block text-center mt-2" data-astro-cid-qfcziibn>${name}</span> </div>`)} </div> <div class="mt-10 flex items-center justify-center text-white" data-astro-cid-qfcziibn>
Y muchos otros...
</div> </section> `;
}, "C:/Users/pingw/Astro/indaber/indaber/src/sections/marcas.astro", void 0);

const $$Astro$1 = createAstro();
const $$Parallax = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Parallax;
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center relative" data-astro-cid-2f47y5ps> <div class="absolute inset-0 overflow-hidden" data-astro-cid-2f47y5ps> <div class="parallax-bg h-full" style="background-image: url('../../img/fotos/paneles.jpeg');" data-astro-cid-2f47y5ps></div> </div> <div class="text-white text-center z-10" data-astro-cid-2f47y5ps> <h1 class="text-4xl md:text-6xl font-bold mb-4" data-astro-cid-2f47y5ps>Indaber</h1> </div> </section> <section class="py-20 text-center" data-astro-cid-2f47y5ps> <p class="text-xl text-white" data-astro-cid-2f47y5ps>Expertos en instalaciones electricas</p> </section> <section class="py-20 flex-1 md:flex items-center" data-astro-cid-2f47y5ps> <div class="text-center" data-astro-cid-2f47y5ps> <h2 class="text-3xl md:text-4xl font-semibold mb-4 text-white uppercase" data-astro-cid-2f47y5ps>
Instalaciones para empresas y particulares
</h2> <h3 class="text-4xl md:text-5xl font bold mb-4 text-white" data-astro-cid-2f47y5ps>
Proyectos a medida
</h3> <p class="text-xl text-white" data-astro-cid-2f47y5ps>
Ya seas una empresa que quiere mejorar su consumo de la red electrica, o
      un particular que quiere tener autoconsumo.
</p> </div> <div class="" data-astro-cid-2f47y5ps> <div class="" data-astro-cid-2f47y5ps> <img src="../../img/fotos/electricista.jpg" alt="Imagen de un electricista" class="max-w-full h-auto" loading="lazy" data-astro-cid-2f47y5ps> </div> </div> </section> <section class="py-20 text-center" data-astro-cid-2f47y5ps> <p class="text-xl text-white" data-astro-cid-2f47y5ps>Prueba</p> </section> `;
}, "C:/Users/pingw/Astro/indaber/indaber/src/sections/parallax.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Parallax", $$Parallax, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Mapa", $$Mapa, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Marcas", $$Marcas, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/Users/pingw/Astro/indaber/indaber/src/pages/index.astro", void 0);

const $$file = "C:/Users/pingw/Astro/indaber/indaber/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

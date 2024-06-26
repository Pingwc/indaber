/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_2eN6dZb_.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_yJbkbElJ.mjs';

const $$Astro = createAstro();
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="h-full flex relative"> <div class="absolute inset-0 overflow-hidden h-20 border-1"> <div class="h-full" style="background-image: url('../../img/fotos/paneles.jpeg'); background-position: bottom; filter:blur(3px)"></div> </div> <div class="text-white z-10"> <h1 class="text-2xl md:text-4xl font-bold mb-4">Contacta con nosotros</h1> </div> </section> <section class="flex mt-6"> <div class="flex-1 bg-green-300"> <div class="form-container bg-slate-600 rounded-md my-6 mx-6"> <form name="contacto" method="POST" data-netlify="true" class="text-white ml-5 py-5"> <div class="mb-4"> <label for="nombre">
Nombre
<span class="text-orange-500">*</span> <br> </label> <input type="text" id="nombre" name="nombre" required class="text-black"> </div> <div class="mb-4"> <label for="apellidos">
Apellido(s)
<br> </label> <input type="text" id="apellidos" name="apellidos" class="text-black"> </div> <div class="mb-4"> <label for="email">
Correo electrónico
<span class="text-orange-500">*</span> <br> </label> <input type="email" id="email" name="email" required class="text-black"> </div> <div class="mb-4"> <label for="telefono">
Teléfono
<br> </label> <input type="text" id="telefono" name="telefono" class="text-black"> </div> <div class="mb-4"> <label for="mensaje">
Describa la consulta
<span class="text-orange-500">*</span> <br> </label> <textarea rows="8" cols="60" id="mensaje" name="mensaje" class="text-black"></textarea> </div> <div class="mb-4"> <input type="checkbox" id="politica" name="politica"> <label for="politica"> Acepta la política de privacidad </label> </div> <button type="submit" value="Enviar" class="bg-slate-300 rounded px-2">Enviar</button> </form> </div> </div> <div class="flex-1 bg-white py-5 px-5"> <h2 class="text-black my-4">
Rellena el formulario para contactarnos. <br>
O puedes ponerse en contact a traves de:
</h2> <div class="flex-1 md:mb-0 inline-block md:inline"> <ul class=""> <li class=""> <a class="flex items-center justify-center sm:justify-normal hover:text-orange-500" title="Abrir mapa" href="https://www.google.com/maps/place/Indaber+Ibiza/@38.914103,1.429842,19z/data=!3m1!5s0x1299468f1d7d98d5:0xf5380d23d4e5c353!4m6!3m5!1s0x1299468f1d61abe7:0x8622feb0f5157ca7!8m2!3d38.914103!4d1.4304857!16s%2Fg%2F11xjhx0r5?entry=ttu"> <span class="list-icon mr-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="#F58426" class="icon icon-tabler icons-tabler-filled icon-tabler-location"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20.891 2.006l.106 -.006l.13 .008l.09 .016l.123 .035l.107 .046l.1 .057l.09 .067l.082 .075l.052 .059l.082 .116l.052 .096c.047 .1 .077 .206 .09 .316l.005 .106c0 .075 -.008 .149 -.024 .22l-.035 .123l-6.532 18.077a1.55 1.55 0 0 1 -1.409 .903a1.547 1.547 0 0 1 -1.329 -.747l-.065 -.127l-3.352 -6.702l-6.67 -3.336a1.55 1.55 0 0 1 -.898 -1.259l-.006 -.149c0 -.56 .301 -1.072 .841 -1.37l.14 -.07l18.017 -6.506l.106 -.03l.108 -.018z"></path> </svg> </span> <span class="list-text"> C/ Pere Francés 40, 07800 Ibiza</span> </a> </li> <li class=""> <a class="flex items-center justify-center sm:justify-normal hover:text-orange-500" href="emailto:info@indaber.es" title="Enviar email"> <span class="list-icon mr-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="#F58426" class="icon icon-tabler icons-tabler-filled icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"></path><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"></path> </svg> </span> <span class="list-text">info@indaber.es</span> </a> </li> <li class="list-group"> <a class="flex justify-center sm:justify-normal hover:text-orange-500" href="tel:(+34)971 306 537" title="Llamar"> <span class="list-icon mr-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="#F58426" class="icon icon-tabler icons-tabler-filled icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"></path> </svg> </span> <span class="list-text">971 306 537</span> </a> </li> </ul> </div> </div> </section> ` })}`;
}, "C:/Users/pingw/Astro/indaber/indaber/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/pingw/Astro/indaber/indaber/src/pages/contacto.astro";
const $$url = "/contacto";

export { $$Contacto as default, $$file as file, $$url as url };

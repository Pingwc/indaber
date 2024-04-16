import { renderers } from './renderers.mjs';
import { manifest } from './manifest_kE_d-VaM.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DVLg2UQs.mjs');
const _page1 = () => import('./chunks/404_CLjavACO.mjs');
const _page2 = () => import('./chunks/clientes_DwBrEV3Z.mjs');
const _page3 = () => import('./chunks/contacto_Omg8lyPs.mjs');
const _page4 = () => import('./chunks/index_CtWhIDeD.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/clientes.astro", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "71f4da30-ea65-40c4-8eee-b368e9f8316d"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

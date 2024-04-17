import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CazB8X_6.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DVLg2UQs.mjs');
const _page1 = () => import('./chunks/404_BVRUKCiq.mjs');
const _page2 = () => import('./chunks/clientes_Dwn1A-Kd.mjs');
const _page3 = () => import('./chunks/contacto_B1seSARd.mjs');
const _page4 = () => import('./chunks/index_BfLMHWA2.mjs');
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
    "middlewareSecret": "e53c62fc-3584-4d64-a954-694743642f23"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

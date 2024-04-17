import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_2eN6dZb_.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/clientes.BqZRR7SC.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/clientes.BqZRR7SC.css"},{"type":"inline","content":".company-link[data-astro-cid-uejwba36]{background:#f5f5f5}\n"}],"routeData":{"route":"/clientes","isIndex":false,"type":"page","pattern":"^\\/clientes\\/?$","segments":[[{"content":"clientes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/clientes.astro","pathname":"/clientes","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/clientes.BqZRR7SC.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/clientes.BqZRR7SC.css"},{"type":"inline","content":".map-container[data-astro-cid-gxjd33wb]{position:relative;width:100%;max-width:1200px}.map-container[data-astro-cid-gxjd33wb] iframe[data-astro-cid-gxjd33wb]{width:100%;top:0;left:0}.company-link[data-astro-cid-qfcziibn]{background:#f5f5f5}.parallax-bg[data-astro-cid-2f47y5ps]{background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover}main[data-astro-cid-j7pv25f6]{margin:auto;padding:1rem;width:800px;max-width:calc(100% - 2rem);color:#fff;font-size:20px;line-height:1.6}.astro-a[data-astro-cid-j7pv25f6]{position:absolute;top:-32px;left:50%;transform:translate(-50%);width:220px;height:auto;z-index:-1}h1[data-astro-cid-j7pv25f6]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:1em}.text-gradient[data-astro-cid-j7pv25f6]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}.instructions[data-astro-cid-j7pv25f6]{margin-bottom:2rem;border:1px solid rgba(var(--accent-light),25%);background:linear-gradient(rgba(var(--accent-dark),66%),rgba(var(--accent-dark),33%));padding:1.5rem;border-radius:8px}.instructions[data-astro-cid-j7pv25f6] code[data-astro-cid-j7pv25f6]{font-size:.8em;font-weight:700;background:rgba(var(--accent-light),12%);color:rgb(var(--accent-light));border-radius:4px;padding:.3em .4em}.instructions[data-astro-cid-j7pv25f6] strong[data-astro-cid-j7pv25f6]{color:rgb(var(--accent-light))}.link-card-grid[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));gap:2rem;padding:0}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/pingw/Astro/indaber/indaber/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/pingw/Astro/indaber/indaber/src/pages/clientes.astro",{"propagation":"none","containsHead":true}],["C:/Users/pingw/Astro/indaber/indaber/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/Users/pingw/Astro/indaber/indaber/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/clientes.astro":"chunks/pages/clientes_DIKGqwGO.mjs","/src/pages/contacto.astro":"chunks/pages/contacto_CXWb1Ceq.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_D3fYcdvj.mjs","/src/pages/index.astro":"chunks/pages/index_Bo7Cjm5Y.mjs","\u0000@astrojs-manifest":"manifest_CazB8X_6.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DVLg2UQs.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_BVRUKCiq.mjs","\u0000@astro-page:src/pages/clientes@_@astro":"chunks/clientes_Dwn1A-Kd.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"chunks/contacto_B1seSARd.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BfLMHWA2.mjs","@astrojs/preact/client.js":"_astro/client.eLX1r-s3.js","C:/Users/pingw/Astro/indaber/indaber/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.BBxi1RXY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/clientes.BqZRR7SC.css","/favicon.svg","/logoindaber.png","/mail.svg","/telephone.svg","/_astro/client.Boh3tsRH.js","/_astro/client.eLX1r-s3.js","/_astro/signals.module.BBxi1RXY.js","/img/clientes/escudo_Formentera.svg","/img/clientes/escudo_SanAntonio.svg","/img/clientes/escudo_SantaEulalia.svg","/img/clientes/ferrovial.svg","/img/fotos/electricista.jpg","/img/fotos/paneles.jpeg","/img/marcas/goodwe.svg","/img/marcas/ingeteam.svg","/img/marcas/salicru.svg","/img/marcas/SMA.svg","/img/marcas/solaredge.svg","/img/marcas/victron.svg"],"buildFormat":"directory"});

export { manifest };

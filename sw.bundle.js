if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const o=e=>c(e,d),f={module:{uri:d},exports:s,require:o};i[d]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(r(...e),s)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"207.bundle.js",revision:"a5fe1012f6891a38031119e360a4ceb2"},{url:"app.webmanifest.json",revision:"18cf09308159b9e4a289956f26c8f99c"},{url:"app~7bd12dde.bundle.js",revision:"e268d5a43be570026460cb1c79bb501c"},{url:"app~7bd12dde.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"4b0b5c896a496fcf6075b431d177d1b5"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"f311f9844961ced84ca322fbcd7c3c48"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~f6f82d47.bundle.js",revision:"d74907853e0add19307e5705555e50c8"},{url:"app~f6f82d47.css",revision:"40ea38ade2b47f6dd4941cedfdb1f45b"},{url:"favicon.png",revision:"95072826d5c526038e692d23973b0398"},{url:"icons/icon-128x128.png",revision:"590005d6f58c7a74cc95e46ad10816a6"},{url:"icons/icon-144x144.png",revision:"085a3084bed9b4e1cb55e389851c639f"},{url:"icons/icon-152x152.png",revision:"ac575c6c593dffa9d818ccb557561202"},{url:"icons/icon-192x192.png",revision:"70a6667006f304f6ec60a082a614b0af"},{url:"icons/icon-384x384.png",revision:"1e6b3dfa33fbd63980cd770c74ed8664"},{url:"icons/icon-512x512.png",revision:"30344d615111e36f6b9caa075d9231f0"},{url:"icons/icon-72x72.png",revision:"ae48c855ee5e17c3193be54243e995fb"},{url:"icons/icon-96x96.png",revision:"d8ed64b98e59c75494a913e9e3cbb01b"},{url:"index.html",revision:"8595b9f6c31fd6cdcd767f2c9701ed70"},{url:"src/public/favicon.png",revision:"95072826d5c526038e692d23973b0398"},{url:"src/public/hero/hero-image_2_large.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"src/public/hero/hero-image_2_small.jpg",revision:"91b2b5504ec9d04f563827504b5b91da"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"restaurantdb-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map

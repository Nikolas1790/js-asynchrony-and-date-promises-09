function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var l=r("7Y9D8");function u(e,o){const n=Math.random()>.3;return new Promise(((t,r)=>{setTimeout((()=>{n?t({position:e,delay:o}):(r({position:e,delay:o}),console.log(o))}),o)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(o){o.preventDefault();let{elements:{delay:n,step:t,amount:r}}=o.currentTarget;for(n=Number(n.value),t=Number(t.value),r=Number(r.value),i=1;i<=r;i+=1)u(i,n).then((({position:o,delay:n})=>{e(l).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{e(l).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)})),n+=t}));
//# sourceMappingURL=03-promises.6de58bab.js.map

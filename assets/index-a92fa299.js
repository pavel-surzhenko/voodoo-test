(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i="https://voodoo-sandbox.myshopify.com/";async function a(){try{return await(await fetch(`${i}products.json?limit=12`)).json()}catch(s){throw new Error(`Error fetching from API: #${s}`)}}function l(s){let o="";return s.products.forEach(r=>{var n,e,t;o+=`<div class="relative">
                        <div class="mb-3 border border-black relative cursor-pointer" id="card" >
                            <img
                                src="${r.images[0].src}"
                                alt="product"
                                class="object-cover h-full w-full"
                            />
                            <div class="text-xs rounded bg-black text-white p-2 absolute top-3 left-3">USED</div>
                            <div class="px-4 py-6 text-white text-md hidden absolute inset-0 bg-black bg-opacity-80 cursor-pointer">
                                <h3 class="pb-2" >More info</h3>
                                <div class="pb-2">Size: ${(n=r.options[0])==null?void 0:n.values}</div>
                                <div class="pb-2">Colors: ${(e=r.options[1])!=null&&e.values?r.options[1].values:""}</div>
                                <div>Element: ${(t=r.options[2])!=null&&t.values?r.options[2].values:""}</div>
                                <span class="text-red-500 absolute top-2 right-2"><img src="/voodoo-test/xmark-solid.svg" alt="xmark" class="w-10 h-10"/></span>
                            </div>
                        </div>
                        <div class="flex justify-between ">
                            <span >${r.title}</span>
                            <span class='font-medium'>${r.vendor}</span>
                        </div>
                        <div class="flex justify-between mb-3">
                            <span >${r.variants[0].price}$</span>
                            <span class="font-normal">${r.product_type}</span>
                        </div>
                        <button class="sm:invisible bg-black text-center text-white w-full rounded p-3 h-10">PICK-UP IN <span class="underline">2200</span></button>
                        
                    </div>`}),o}async function d(){try{const s=await a(),o=l(s);document.getElementById("list-container").innerHTML=o;const r=e=>{e.currentTarget.children[2].classList.toggle("hidden")};document.querySelectorAll("#card").forEach(e=>e.addEventListener("click",r))}catch(s){throw new Error(`Error rendering list: ${s}`)}}function u(){const s=document.getElementById("arrowBtn");s==null||s.addEventListener("click",()=>{const o=document.getElementById("hiddenInfo");o==null||o.classList.toggle("hidden"),s.classList.toggle("rotate-180")})}d();u();

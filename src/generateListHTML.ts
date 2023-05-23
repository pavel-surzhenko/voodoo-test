import { IApiResponse } from "./types";

export function generateListHTML(data: IApiResponse) {
    let html = ''
    data.products.forEach((item) => {

        html += `<div class="relative">
                        <div class="mb-3 border border-black relative cursor-pointer" id="card" >
                            <img
                                src="${item.images[0].src}"
                                alt="product"
                                class="object-cover h-full w-full"
                            />
                            <div class="text-xs rounded bg-black text-white p-2 absolute top-3 left-3">USED</div>
                            <div class="px-4 py-6 text-white text-md hidden absolute inset-0 bg-black bg-opacity-80 rounded cursor-pointer">
                                <h3 class="pb-2" >More info</h3>
                                <div class="pb-2">Size: ${item.options[0]?.values}</div>
                                <div class="pb-2">Colors: ${item.options[1]?.values ? item.options[1].values : ''}</div>
                                <div>Element: ${item.options[2]?.values ? item.options[2].values : ''}</div>
                                <span class="text-red-500 text-xl absolute top-2 right-2">&#10006;</span>
                            </div>
                        </div>
                        <div class="flex justify-between ">
                            <span >${item.title}</span>
                            <span class='font-medium'>${item.vendor}</span>
                        </div>
                        <div class="flex justify-between mb-3">
                            <span >${item.variants[0].price}$</span>
                            <span class="font-normal">${item.product_type}</span>
                        </div>
                        <button class="sm:invisible bg-black text-center text-white w-full rounded p-3 h-10">PICK-UP IN <span class="underline">2200</span></button>
                        
                    </div>`
    })

    return html
}

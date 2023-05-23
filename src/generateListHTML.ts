import { IApiResponse } from "./types";

export function generateListHTML(data: IApiResponse) {
    let html = ''
    data.products.forEach((item) => {

        html += `<div class="font-bold">
                        <div class="mb-3 border border-black relative">
                            <img
                                src="${item.images[0].src}"
                                alt="product"
                                class="object-cover h-full w-full"
                            />
                            <div class="text-xs rounded bg-black text-white p-2 absolute top-3 left-3">USED</div>
                        </div>
                        <div class="flex justify-between ">
                            <span >${item.title}</span>
                            <span class='font-medium'>${item.vendor}</span>
                        </div>
                        <div class="flex justify-between mb-3">
                            <span >${item.variants[0].price}$</span>
                            <span class="font-normal">${item.product_type}</span>
                        </div>
                        <button class="sm:invisible bg-black text-center text-white w-full rounded p-4">PICK-UP IN <span class="underline">2200</span></button>
                    </div>`
    })

    return html
}
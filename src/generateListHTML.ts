import { IApiResponse } from "./types";

export function generateListHTML(data: IApiResponse) {
    let html = ''
    data.products.forEach((item) => {

        html += `<div class="font-bold">
                        <div class="mb-3 border border-black">
                            <img
                                src="${item.images[0].src}"
                                alt="product"
                                class="object-cover h-full w-full"
                            />
                        </div>
                        <div class="flex justify-between ">
                            <span >${item.title}</span>
                            <span class='font-medium'>${item.vendor}</span>
                        </div>
                        <div class="flex justify-between">
                            <span >${item.variants[0].price}$</span>
                            <span class="font-normal">${item.product_type}</span>
                        </div>
                    </div>`
    })

    return html
}
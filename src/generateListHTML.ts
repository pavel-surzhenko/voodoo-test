import { IApiResponse } from "./types";

export function generateListHTML(data: IApiResponse) {
    let html = 'div'
    data.products.forEach((item) => {
        html += `<h2>${item.title}</h2>`
    })

    return html
}
import { IApiResponse } from "./types";

async function fetchProductsList(): Promise<IApiResponse> {
    try {
        const response = await fetch('https://voodoo-sandbox.myshopify.com/products.json?limit=12')
        const data = await response.json()
        console.log(data);

        return data as IApiResponse
    } catch (error) {
        throw new Error(`Error fetching from API: #${error}`)
    }
}

function generateListHTML(data: IApiResponse) {
    let html = 'div'
    data.products.forEach((item) => {
        html += `<h2>${item.title}</h2>`
    })

    return html
}

async function renderProductsLis() {
    try {
        const data = await fetchProductsList()
        const listHTML = generateListHTML(data)
        console.log(listHTML);

        document.getElementById('list-container')!.innerHTML = listHTML
    } catch (error) {
        throw new Error(`Error rendering list: ${error}`)
    }
}
renderProductsLis()
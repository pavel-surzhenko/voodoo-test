import { fetchProductsList } from "./api";
import { generateListHTML } from "./generateListHTML";

export async function renderProductsLis() {
    try {
        const data = await fetchProductsList()
        const listHTML = generateListHTML(data)

        document.getElementById('list-container')!.innerHTML = listHTML
    } catch (error) {
        throw new Error(`Error rendering list: ${error}`)
    }
}


import { fetchProductsList } from "./api";
import { generateListHTML } from "./generateListHTML";

export async function renderProductsLis() {
    try {
        const data = await fetchProductsList()
        const listHTML = generateListHTML(data)

        document.getElementById('list-container')!.innerHTML = listHTML

        const handleClick = (event: Event) => {
            const card = event.currentTarget as Element
            card.children[2].classList.toggle('hidden')
        }

        const cards: NodeListOf<Element> = document.querySelectorAll('#card')
        console.log(cards);

        cards.forEach((card: Element) => card.addEventListener('click', handleClick))

    } catch (error) {
        throw new Error(`Error rendering list: ${error}`)
    }
}


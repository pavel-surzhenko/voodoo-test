import { IApiResponse } from "./types";

export async function fetchProductsList(): Promise<IApiResponse> {
    try {
        const response = await fetch('https://voodoo-sandbox.myshopify.com/products.json?limit=12')
        const data = await response.json()
        console.log(data);

        return data as IApiResponse
    } catch (error) {
        throw new Error(`Error fetching from API: #${error}`)
    }
}
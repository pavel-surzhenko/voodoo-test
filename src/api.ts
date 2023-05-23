import { IApiResponse } from "./types";
const API = 'https://voodoo-sandbox.myshopify.com/'

export async function fetchProductsList(): Promise<IApiResponse> {
    try {
        const response = await fetch(`${API}products.json?limit=12`)
        const data = await response.json()

        return data as IApiResponse
    } catch (error) {
        throw new Error(`Error fetching from API: #${error}`)
    }
}
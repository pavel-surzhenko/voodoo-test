export interface IProduct {
    body_html: string | null
    created_at: string
    handle: string
    id: number
    images: IImage[]
    options: IOptions
    product_type: string
    published_at: string
    tags: []
    title: string
    updated_at: string
    variants: IVariants[]
    vendor: string
}

interface IImage {
    created_at: string
    height: number
    id: number
    position: number
    product_id: number
    src: string
    updated_at: string
    variant_ids: []
    width: number
}
interface IOptions {
    name: string
    position: number
    values: string[]
}
interface IVariants {
    available: boolean
    compare_at_price: string
    created_at: string
    featured_image: null
    grams: number
    id: number
    option1: string
    option2: string
    option3: string
    position: number
    price: string
    product_id: number
    requires_shipping: boolean
    sku: string
    taxable: boolean
    title: string
    updated_at: string
}

export interface IApiResponse {
    products: IProduct[];
}
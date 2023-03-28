import { Product } from "../components/types"
import { ActionTypes } from "./ActionTypes"

export const addToCartAction = (product: Product) => {
    return {
        type: ActionTypes.add,
        payload: product
    }
}

export const removeFromCartAction = (id: number) => {
    return {
        type: ActionTypes.remove,
        payload: id
    }
}

export const getProductsAction = (products: Product[]) => {
    return {
        type: ActionTypes.read,
        payload: products
    }
}
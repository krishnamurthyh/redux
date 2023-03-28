import axios from "axios"
import { Product } from "./types"

export const getProducts = async () => {
    const products = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
        .then((res) => {
            return res.data as Product[]
        })
        .catch((error) => {
            console.log(error)
        })

    return products
}
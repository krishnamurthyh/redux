import axios from "axios"
import { Products } from "../types"

export const getFields = async () => {
    const fields = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
        .then((res) => {
            return res.data as Products
        })
        .catch((error) => {
            console.log(error)
        })

    return fields
}
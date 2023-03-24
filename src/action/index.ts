import { Products } from "../types"
import { ActionTypes } from "./ActionTypes"

export const createFieldAction = (field: any) => {
    return {
        type: ActionTypes.create,
        payload: field
    }
}

export const getFieldsAction = (field: Products) => {
    return {
        type: ActionTypes.read,
        payload: field
    }
}
import { ActionTypes } from "../action/ActionTypes"
import { Products } from "../types"

const initialState: Products[] = []

type TCreateField = {
    type: ActionTypes.create,
    payload: Products
}
type TDeleteField = {
    type: ActionTypes.delete,
    payload: Products
}
type TReadProducts = {
    type: ActionTypes.read,
    payload: Products[]
}
type TAction = TCreateField | TDeleteField | TReadProducts

export const fieldReducer = (state = initialState, action: TAction) => {
    switch (action.type) {
        case ActionTypes.create:
            return [...state, action.payload];
        case ActionTypes.read:
            return [...action.payload];
        default:
            return state
    }
}
import { ActionTypes } from "../action/ActionTypes"
import { Product } from "../components/types"

type TCartAddAction = {
    type: ActionTypes.add,
    payload: Product
}
type TCartRemoveAction = {
    type: ActionTypes.remove,
    payload: number
}

type TCartAction = TCartAddAction | TCartRemoveAction

const initialState: Product[] = []

export const cartReducer = (state = initialState, action: TCartAction) => {
    switch (action.type) {
        case ActionTypes.add:
            return [...state, action.payload]
        case ActionTypes.remove:
            return state.filter((item) => item.id !== action.payload)
        default:
            return state
    }
}
import { ActionTypes } from "../action/ActionTypes"
import { Product } from "../components/types"

const initialState: Product[] = []

type TProductAction = {
    type: ActionTypes.read,
    payload: Product[]
}

export const productReducer = (state = initialState, action: TProductAction) => {
    switch (action.type) {
        case ActionTypes.read:
            return [...action.payload];
        default:
            return state
    }
}
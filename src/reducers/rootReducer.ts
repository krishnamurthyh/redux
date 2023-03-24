import { combineReducers } from "redux";
import { fieldReducer } from "./fieldReducer";

const rootReducer = combineReducers({
    fields: fieldReducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;
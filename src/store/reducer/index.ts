import {combineReducers} from "redux";
import {UserReducer} from "./userReducer";

export const rootReducer = combineReducers({
    user: UserReducer
})

export type RootState = ReturnType<typeof rootReducer>;

import {IUserState, UserAction, UserActionType} from "../../types/types";

const initialState: IUserState = {
    isAuth: false
}

export const UserReducer = (state = initialState, action: UserAction): IUserState => {
    switch (action.type) {
        case UserActionType.AUTORIZATION:
            return {isAuth: true}
        case UserActionType.LOGOUT:
            return {isAuth: false}
        default:
            return state;
    }
}

import {UserActionType} from "../../types/types";

export const setAuth = () => ({type: UserActionType.AUTORIZATION});
export const removeAuth = () => ({type: UserActionType.LOGOUT});


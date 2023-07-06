

export interface IUser {
    email:string;
    password:string;
}

export interface ICategory {
    id:number;
    name:string;
    dateCreated:number;
}

export interface CategoryItemProps {
    category: ICategory,
    handleOpenDelete: any,
    handleOpenEdit: any
}

export interface CategoryItemDeleteProps {
    category: ICategory,
    handleOpenDelete: any,
}
export interface CategoryItemEditProps {
    category: ICategory,
    handleOpenEdit: any
}

export interface ITask {
    id:number;
    name:string;
    dateStart:Date;
    dateEnd:Date;
    userId: number;
}

export enum UserActionType {
    AUTORIZATION = 'AUTORIZATION',
    LOGOUT = 'LOGOUT'
}
export interface IUserActionType {
    type: UserActionType.AUTORIZATION | UserActionType.LOGOUT
}
export interface IUserState {
    isAuth:boolean
}
export type UserAction = IUserActionType

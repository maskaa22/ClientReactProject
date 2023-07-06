import axios, {AxiosError, AxiosInstance} from "axios";
import {IUser} from "../types/types";
import {SwalFunction} from "../utils/SwalFunction";
import {store} from '../store'
import {setAuth} from "../store/action/user";
import {BASE_URL, CATEGORY, LOGIN, REGISTRATION} from "../config/constants";

const authAxios: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
});

export const registration = async (email:string, password:string, role:string) => {
    try {

        return await authAxios.post<IUser>(REGISTRATION, {email, password, role})
            .catch(err=>{
                SwalFunction('Error', `${err.response.data.message}`, 'error', 'OK', true);
            })
    } catch (error) {
        const err = error as AxiosError;
        SwalFunction('Error', `${err.response?.data}`, 'error', 'OK', true);
    }
};
export async function login(email:string, password:string) {
    try {

        return await authAxios.post(LOGIN, {email, password})
            .then(res => {
                localStorage.setItem('token', res.data.access_token);
                store.dispatch(setAuth());
            })
            .catch(err => {
                SwalFunction('Error', `${err.response.data.message}`, 'error', 'OK', true);
            });
    } catch (error) {
        const err = error as AxiosError;
        SwalFunction('Error', `${err.response?.data}`, 'error', 'OK', true);
    }
}
export async function createCategory(name:string, handleClose:any) {
    try {

        return await authAxios.post(CATEGORY, {name}, {withCredentials: true})
            .then(() => {
                handleClose()
                SwalFunction('Category created', ``, 'success', 'OK', true);
            })
            .catch(err => {
                handleClose()
                SwalFunction('Error', `${err.response.data.message}`, 'error', 'OK', true);
            });
    } catch (error) {
        const err = error as AxiosError;
        SwalFunction('Error', `${err.response?.data}`, 'error', 'OK', true);
    }
}
export async function getCategories() {
    try {
        const response = await authAxios.get(CATEGORY, {withCredentials: true});

        return response.data
    } catch (e) {
        console.log(e);
    }
}
export async function deleteCategory(id:number, handleClose:any) {
    try {
        return await authAxios.delete(`${CATEGORY}/${id}`)
            .then(() => {
                handleClose()
                SwalFunction('Category deleted', ``, 'success', 'OK', true);
            })
            .catch(err => {
                handleClose()
                SwalFunction('Error', `${err.response.data.message}`, 'error', 'OK', true);
            });
    } catch (error) {
        const err = error as AxiosError;
        SwalFunction('Error', `${err.response?.data}`, 'error', 'OK', true);
    }
}
export async function editCategory(name:string, id:number, handleClose:any) {
    try {
        return await authAxios.patch(`${CATEGORY}/${id}`, {name})
            .then(() => {
                handleClose()
                SwalFunction('Category update', ``, 'success', 'OK', true);
            })
            .catch(err => {
                handleClose()
                SwalFunction('Error', `${err.response.data.message}`, 'error', 'OK', true);
            });
    } catch (error) {
        const err = error as AxiosError;
        SwalFunction('Error', `${err.response?.data}`, 'error', 'OK', true);
    }
}

import axios, {AxiosError} from "axios";
import {IUser} from "../types/types";
import {SwalFunction} from "../utils/SwalFunction";
import {store} from '../store'
import {setAuth} from "../store/action/user";

export const registration = async (email:string, password:string, role:string) => {
    try {

        return await axios.post<IUser>('http://localhost:5000/auth/registration', {email, password, role})
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

        return await axios.post('http://localhost:5000/auth/login', {email, password})
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
export async function getUsers() {
    try {
        const response = await axios.get('http://localhost:5000/users')
        console.log(response.data);

    } catch (e) {
        console.log(e);
    }
}

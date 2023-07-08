import axios, {AxiosError, AxiosInstance} from "axios";

import {BASE_URL, CATEGORY, LOGIN, REGISTRATION, TOKEN} from "../config/constants";
import {IUser} from "../types/types";
import {setAuth} from "../store/action/user";
import {SwalFunction} from "../utils/SwalFunction";
import {store} from '../store';

const authAxios: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
    },
});

export const registration = async (email: string, password: string, role: string) => {
    try {

        return await authAxios.post<IUser>(REGISTRATION, {email, password, role})
            .then((res) => {
                SwalFunction('User created', ``, 'success', 'OK', true);
                return res.data.email;
            })
            .catch(err => {
                SwalFunction('Error', `${err.response.data.message}`, 'error', 'OK', true);
            });
    } catch (error) {
        const err = error as AxiosError;
        SwalFunction('Error', `${err.response?.data}`, 'error', 'OK', true);
    }
};

export async function login(email: string, password: string) {
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

export async function createCategory(name: string, handleClose: any) {
    try {

        return await authAxios.post(CATEGORY, {name}, {
            withCredentials: true, headers: {
                Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
            }
        })
            .then(() => {
                handleClose();
                SwalFunction('Category created', ``, 'success', 'OK', true);
            })
            .catch(err => {
                handleClose();
                SwalFunction('Error', `${err.response.data.message}`, 'error', 'OK', true);
            });
    } catch (error) {
        const err = error as AxiosError;
        SwalFunction('Error', `${err.response?.data}`, 'error', 'OK', true);
    }
}

export async function getCategories() {
    try {
        const response = await authAxios.get(CATEGORY, {
            withCredentials: true, headers: {
                Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
            }
        });

        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        SwalFunction('Error', `${err.response?.data}`, 'error', 'OK', true);
    }
}

export async function deleteCategory(id: number, handleClose: any) {
    try {
        return await authAxios.delete(`${CATEGORY}/${id}`, {
            withCredentials: true, headers: {
                Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
            }
        })
            .then(() => {
                handleClose();
                SwalFunction('Category deleted', ``, 'success', 'OK', true);
            })
            .catch(err => {
                handleClose();
                SwalFunction('Error', `${err.response.data.message}`, 'error', 'OK', true);
            });
    } catch (error) {
        const err = error as AxiosError;
        SwalFunction('Error', `${err.response?.data}`, 'error', 'OK', true);
    }
}

export async function editCategory(name: string, id: number, handleClose: any) {
    try {
        return await authAxios.patch(`${CATEGORY}/${id}`, {name}, {
            withCredentials: true, headers: {
                Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
            }
        })
            .then(() => {
                handleClose();
                SwalFunction('Category update', ``, 'success', 'OK', true);
            })
            .catch(err => {
                handleClose();
                SwalFunction('Error', `${err.response.data.message}`, 'error', 'OK', true);
            });
    } catch (error) {
        const err = error as AxiosError;
        SwalFunction('Error', `${err.response?.data}`, 'error', 'OK', true);
    }
}

export async function createTask(name: string, description: string, dateStart: Date, dateEnd: Date, idCategory: number) {
    try {

        return await authAxios.post(`categories/${idCategory}/task`, {
                name,
                description,
                dateStart,
                dateEnd,
                idCategory
            },
            {
                withCredentials: true, headers: {
                    Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
                }
            })
            .then((res) => {
                SwalFunction('Task created', ``, 'success', 'OK', true);
                return res.data.name;
            })
            .catch(err => {
                SwalFunction('Error', `${err.response.data.message}`, 'error', 'OK', true);
            });
    } catch (error) {
        const err = error as AxiosError;
        SwalFunction('Error', `${err.response?.data}`, 'error', 'OK', true);
    }
}

export async function getTasks(idCategory: number) {
    try {
        const response = await authAxios.get(`categories/${idCategory}/task`, {
            withCredentials: true, headers: {
                Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
            }
        });

        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        SwalFunction('Error', `${err.response?.data}`, 'error', 'OK', true);
    }
}

export async function getCountTasks(idCategory: number) {
    try {
        const response = await authAxios.get(`categories/${idCategory}/tasks`, {
            withCredentials: true, headers: {
                Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
            }
        });

        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        SwalFunction('Error', `${err.response?.data}`, 'error', 'OK', true);
    }
}

export async function editTask(name: string, description: string, dateStart: Date, dateEnd: Date, category: number, task_id: number) {
    try {

        return await authAxios.patch(`${CATEGORY}/${category}/task/${task_id}`, {
            name,
            description,
            dateStart,
            dateEnd,
            category
        }, {
            withCredentials: true, headers: {
                Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
            }
        })
            .then((res) => {
                SwalFunction('Edit update', ``, 'success', 'OK', true);
                return res.data.affected;
            })
            .catch(err => {
                SwalFunction('Error', `${err.response.data.message}`, 'error', 'OK', true);
            });
    } catch (error) {
        const err = error as AxiosError;
        SwalFunction('Error', `${err.response?.data}`, 'error', 'OK', true);
    }
}

export async function deleteTask(categoryId: number, handleClose: any, task_id: number) {
    try {

        return await authAxios.delete(`${CATEGORY}/${categoryId}/task/${task_id}`, {
            withCredentials: true, headers: {
                Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
            }
        })
            .then(() => {
                handleClose();
                SwalFunction('Task deleted', ``, 'success', 'OK', true);
            })
            .catch(err => {
                handleClose();
                SwalFunction('Error', `${err.response.data.message}`, 'error', 'OK', true);
            });
    } catch (error) {
        const err = error as AxiosError;
        SwalFunction('Error', `${err.response?.data}`, 'error', 'OK', true);
    }
}

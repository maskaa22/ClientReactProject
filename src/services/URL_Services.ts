import axios from "axios";

const api = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000'
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
});
api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401
        && error.config && !error.config._isRetry
    ) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`'http://localhost:5000/auth/refresh'`, {withCredentials: true});

            localStorage.setItem('token', response.data.tokenPair.access_token);

            return api.request(originalRequest);
        } catch (e) {
            console.log('Не авторизований', e);
        }
    }
    throw error;
});

export class AuthService {

    // static async login(email, password) {
    //     return api.post(AUTH_LOGIN, {email, password})
    // }

    static async registration(email:string, password:string, role:string) {
        return api.post('/auth/registration', {email, password, role})
    }
}

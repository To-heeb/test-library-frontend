import axios from "axios";
import { useAuthContext, removeToken } from "./contexts/AuthContext";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/v1`
})

axios.interceptors.request.use((config) => {
    const auth = useAuthContext();
    config.headers.Authorization = `Bearer ${auth.token}`
})

axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const { response } = error;
    if (response === 401) {
        removeToken()
    }
});

export default axiosClient
import axios from "axios";

export const API_URL = "http://localhost:8080/api/v1"
axios.defaults.baseURL = API_URL
axios.interceptors.response.use(resp => resp, async error => {
    if(error.response.status === 401) {
        const {status, data} = await axios.post('/auth/refresh', {}, {withCredentials: true});
        if (status === 200) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${data.refresh_token}`
        }
    }
    return error;
});

import axios from "axios";

export const API_URL = "http://127.0.0.1:8080/api/v1"
axios.defaults.baseURL = API_URL
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://127.0.0.1:8080';
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

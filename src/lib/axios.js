import axios from "axios";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Authorization": "Bearer " + localStorage.getItem("token"),
    },
    withCredentials: true,
});

export default instance;
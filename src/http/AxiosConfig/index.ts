import axios from "axios";

const BACK_URL = "http://localhost:3000";

const http = axios.create({
    baseURL: BACK_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export { http };

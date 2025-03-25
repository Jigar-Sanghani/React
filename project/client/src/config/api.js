import axios from "axios";

export const API = axios.create({
    baseURL: "http://localhost:4454/api/v1"
})
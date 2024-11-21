import axios from "axios";

const apiUrl = "https://dummyjson.com/";

export const api = axios.create({
    baseURL: apiUrl
});

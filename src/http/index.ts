import axios, { InternalAxiosRequestConfig } from "axios";

const $host = axios.create({
  baseURL: import.meta.env.VITE_GOOGLE_API_BASE_URL
});

export { $host };

import axios from "axios";

import { setupInterceptorsTo } from "./interceptors";

export const api = setupInterceptorsTo(
  axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_API_URL,
    timeout: 10 * 1000, // 10 seconds
    headers: { "Content-Type": "application/json" },
  })
);

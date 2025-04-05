import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/v1/auth/login",
    SIGNUP: "/api/v1/auth/signup",
    ME: "/api/v1/auth/me",
  },
};

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },

  withCredentials: true,
});


// Add Authorization header before request is sent
AxiosInstance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(
      localStorage.getItem("tokens") || "{}",
    ).accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// To handle response and errors globally
AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized, please login again.");
    }
    return Promise.reject(error);
  },
);

export const getUser = () => {
  return AxiosInstance.get("/api/v1/auth/me");
};

export default AxiosInstance;

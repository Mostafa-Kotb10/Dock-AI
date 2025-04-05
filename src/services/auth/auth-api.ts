import { SignInValues } from "@/pages/sign-portal/schema";

import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

interface Response {
  accessToken: string;
  refreshToken: string;
}

export const signIn = (data: SignInValues) => {
  return AxiosInstance.post<Response>("/api/v1/auth/login", data);
};

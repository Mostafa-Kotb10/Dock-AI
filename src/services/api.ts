import axios from "axios";

import { useMutation, useQuery } from "@tanstack/react-query";

const BASE_URL = "https://4.161.48.34:8080";

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

export const SignIn = (data) => {
  return AxiosInstance.post("/api/v1/auth/login", data);
};

export const useSignIn = () => {
  return useMutation({
    mutationFn: SignIn,
  });
};

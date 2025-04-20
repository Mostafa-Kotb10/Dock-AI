import { AxiosInstance, AxiosInstanceNoAuth } from "@/lib/axios";
import { SignInValues } from "@/pages/sign-portal/schema";
import { AuthTokens } from "@/types/auth";
import { User } from "@/types/user";

// 🔐 Sign-in
export const signIn = async (data: SignInValues) => {
  console.log("Sign Func", data);
  return (await AxiosInstanceNoAuth.post("/api/v1/auth/login", data)).data;
};

// 👤 Get user info
export const getUser = () => {
  return AxiosInstance.get<User>("/api/v1/auth/me");
};

// 🔁 Refresh tokens using refreshToken in request body
export const refreshSession = (refreshToken: string) => {
  return AxiosInstance.post("/api/v1/auth/refresh", {
    refreshToken,
  });
};

import { AxiosInstance, AxiosInstanceNoAuth } from "@/lib/axios";
import { SignInValues, SignUpValues } from "@/pages/sign-portal/schema";
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
// 🔐 Sign-UP
export const signUp = async (data: SignUpValues)=>{
  
  const { repassword, ...requestData } = data;
  console.log("Singup Func",requestData );
  return (await AxiosInstance.post("/api/v1/auth/signup",{...requestData ,phone:"88888",name:"kk"}));
}

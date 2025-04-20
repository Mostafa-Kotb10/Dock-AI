import { AxiosInstance } from "@/lib/axios";

export const getUser = () => {
  return AxiosInstance.get("/api/v1/auth/me");
};

export default AxiosInstance;

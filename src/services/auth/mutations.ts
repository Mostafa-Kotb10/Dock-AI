import { useMutation } from "@tanstack/react-query";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { signIn } from "./auth-api";

export const useSignIn = () => {
  const { setItem } = useLocalStorage("tokens", {});
  const navigate = useNavigate();

  const { mutate, data: tokens } = useMutation({
    mutationFn: signIn,
    onSuccess(tokens) {
      setItem(tokens?.data);
      console.log("sign in: success");
      navigate("/dashboard");
    },
    onError: () => {
      console.log("Error");
    },
  });

  return { mutate, data: tokens };
};

export const useSignOut = () => {
  const { removeItem } = useLocalStorage("tokens", {});
  const navigate = useNavigate();

  const signOut = () => {
    navigate("/");
    removeItem();
  };

  return { signOut };
};

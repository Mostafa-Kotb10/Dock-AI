import { signUpContext } from "@/context/SignUpFormContext";
import { useContext } from "react";

const useSignUpContext = () => {
  const context = useContext(signUpContext);

  if (!context) throw Error("should ony be used in SignUpProvider child");
  return context;
};

export default useSignUpContext;

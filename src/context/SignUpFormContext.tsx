/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

interface SignUpContextVlues {
  isSignUp: boolean;
  toggleForm: () => void;
}

export const signUpContext = createContext<SignUpContextVlues | undefined>(
  undefined
);

export const SignUpContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <signUpContext.Provider value={{ isSignUp, toggleForm }}>
      {children}
    </signUpContext.Provider>
  );
};

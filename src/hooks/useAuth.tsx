// src/hooks/useAuth.ts
import { createContext, useContext } from "react";
import { User } from "@/types/user";
import { AuthTokens } from "@/types/auth.ts";

// Define context type
interface AuthContextType {
  user: User | null;
  token: AuthTokens | null;
  setToken: (token: AuthTokens | null) => void;
  setUser: (user: User | null) => void;
  logout: () => void;
}

// Create context
export const AuthContext = createContext<AuthContextType | null>(null);

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

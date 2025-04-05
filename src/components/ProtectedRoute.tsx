import { useGetUser } from "@/services/queries";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useState, useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { getItem } = useLocalStorage("tokens", null);
  const { isPending } = useGetUser();
  const navigate = useNavigate();
  const [isTokenChecked, setIsTokenChecked] = useState(false);

  useEffect(() => {
    const token = getItem();
    if (!token) {
      navigate("/sign-portal");
      console.log("No token found, redirecting to sign-portal");
    } else {
      setIsTokenChecked(true);
    }
  }, [getItem, navigate]);

  if (!isTokenChecked || isPending) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedRoute;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthV2 from "@/hooks/useAuthV2";
import { useGetMe } from "../queries";
import { FullScreenSpinner } from "@/components/Spinner";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { tokens } = useAuthV2();
  const navigate = useNavigate();
  const { isPending, isError } = useGetMe();

  const [isLoadingTokens, setIsLoadingTokens] = useState(true); // track token loading

  useEffect(() => {
    if (tokens !== null) {
      setIsLoadingTokens(false); // tokens loaded, stop waiting
    }
  }, [tokens]);

  useEffect(() => {
    if ((!tokens || isError) && !isLoadingTokens) {
      navigate("/sign-portal", { replace: true });
    }
  }, [tokens, isError, isLoadingTokens, navigate]);

  if (isLoadingTokens || isPending) {
    return <FullScreenSpinner />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

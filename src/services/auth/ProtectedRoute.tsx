import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthV2 from "@/hooks/useAuthV2";
import { useGetMe } from "../user/queries";
import { FullScreenSpinner } from "@/components/Spinner";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { tokens } = useAuthV2();
  const navigate = useNavigate();
  const { isPending, isError } = useGetMe();

  useEffect(() => {
    if ((!tokens || isError) && !isPending) {
      navigate("/sign-portal", { replace: true });
    }
  }, [tokens, isError, isPending, navigate]);

  if (isPending) {
    return <FullScreenSpinner />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

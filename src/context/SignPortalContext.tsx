/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface SignPortalContextType {
  portal: "sign-in" | "sign-up";
  setPortal: (portal: "sign-in" | "sign-up") => void;
}

export const signPortalContext = createContext<SignPortalContextType | null>(
  null,
);

export const SignPortalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchParams] = useSearchParams();
  const portalParam = searchParams.get("portal") || "sign-in";

  const [portal, setPortal] = useState(portalParam);

  useEffect(() => {
    setPortal(portalParam);
  }, [portalParam]);
  return (
    <signPortalContext.Provider
      value={{ portal: portal as "sign-in" | "sign-up", setPortal }}
    >
      {children}
    </signPortalContext.Provider>
  );
};

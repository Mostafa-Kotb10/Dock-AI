import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "motion/react";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Logo from "@/components/Logo";

const variants: Variants = {
  "sign-in": {
    left: 0,
  },
  "sign-up": {
    left: "75%",
  },
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const SignPortal = () => {
  const [searchParams] = useSearchParams();
  const portalParam = searchParams.get("portal") || "sign-in";

  const [portal, setPortal] = useState(portalParam);

  useEffect(() => {
    setPortal(portalParam);
  }, [portalParam]);

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-gray-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={portal}
          initial={{ left: portal === "sign-in" ? 0 : "70%", width: "30%" }}
          animate={{ left: portal === "sign-in" ? 0 : "70%" }}
          exit={{ left: portal === "sign-in" ? "70%" : 0 }}
          transition={{ ease: "easeInOut", duration: 0.7 }}
          className={cn(
            "absolute flex h-full flex-col items-center rounded-lg bg-white shadow-lg",
          )}
        >
          <Logo className="mt-20 h-[170px]" />
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            {portal === "sign-in" ? <SignIn /> : <SignUp />}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SignPortal;

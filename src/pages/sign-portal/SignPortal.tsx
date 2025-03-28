import { motion, AnimatePresence } from "motion/react";

import { cn } from "@/lib/utils";

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Logo from "@/components/Logo";
import useSignPortalContext from "@/hooks/useSignPortalContext";

const SignPortal = () => {
  const { portal } = useSignPortalContext();

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-gray-100 ">
      <AnimatePresence mode="wait">
        <motion.div
          key={portal}
          initial={{ left: portal === "sign-in" ? 0 : "70%", width: "30%" }}
          animate={{ left: portal === "sign-in" ? 0 : "70%" }}
          exit={{ left: portal === "sign-in" ? "70%" : 0 }}
          transition={{ ease: "easeInOut", duration: 0.7 }}
          className={cn(
            "absolute flex h-full flex-col items-center rounded-lg bg-white shadow-lg gap-1",
          )}
        >
          <Logo className="mt-20 h-[120px]" />
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="w-full px-14 overflow-x-hidden overflow-y-auto"
          >
            {portal === "sign-in" ? <SignIn /> : <SignUp />}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SignPortal;

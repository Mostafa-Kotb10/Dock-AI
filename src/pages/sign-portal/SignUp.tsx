import { Form, useForm } from "react-hook-form";
import useSignPortalContext from "@/hooks/useSignPortalContext";

const SignUp = () => {
  const form = useForm();
  const { setPortal } = useSignPortalContext();
  return (
    <div className="">
      Sign In
      <Form {...form}>
        This is the sign in form
        <div>
          already have an account?{" "}
          <button
            onClick={() => setPortal("sign-in")}
            className="cursor-pointer text-blue-500"
          >
            Sign up now
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;

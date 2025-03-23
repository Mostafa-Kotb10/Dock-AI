import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";

const SignIn = () => {
  const form = useForm();

  return (
    <div className="">
      Sign In
      <Form {...form}>
        <div className="">
          This is a test form
          <div>
            don't have an account?{" "}
            <Link
              to={"/sign-portal?portal=sign-up"}
              className="cursor-pointer text-blue-500"
            >
              create account
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;

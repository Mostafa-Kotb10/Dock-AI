import { Form, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const form = useForm();
  return (
    <div className="">
      Sign In
      <Form {...form}>
        This is the sign in form
        <div>
          already have an account?{" "}
          <Link
            to={"/sign-portal?portal=sign-in"}
            className="cursor-pointer text-blue-500"
          >
            sign in
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;

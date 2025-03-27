<<<<<<< HEAD
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
=======
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { signUpSchema, SignUpValues } from "@/validation/schema";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const form = useForm<SignUpValues>({
    mode: "onChange",

    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpValues) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="space-y-6  w-96"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input className="bg-gray-200" placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="bg-gray-200"
                  placeholder="Email "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="bg-gray-200"
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="repassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="bg-gray-200"
                  placeholder="Confirm Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-3">
          <div className="space-y-6">
            <Button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700"
            >
              Sign Up
            </Button>
            <div className="text-center  space-y-0.5 ">
              <span className="font-light ">Already have an account?</span>
            <Link
              to={"/sign-portal?portal=sign-in"}
              className="cursor-pointer text-blue-500"
            >
              Login
            </Link>
            </div>
            

            <hr />
          </div>

          <div className=" text-center space-y-2">
            <span className="block text-center">Or</span>
            <Button className="w-full bg-gray-900 hover:bg-gray-700">
              <FcGoogle />Sign Up with Google
            </Button>
          </div>
>>>>>>> 4f9ed8afe47e128d0c546f460cd188880374c722
        </div>
      </form>
    </Form>
  );
};

export default SignUp;

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

import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signInSchema, SignInValues } from "@/validation/schema";

const SignIn = () => {
  const form = useForm<SignInValues>({
    mode: "onChange",
    defaultValues: {
      remember: false,
    },
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInValues) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="bg-gray-200"
                  placeholder="Email or phone number"
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

        <div className="space-x- flex items-center justify-between">
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem className="">
                <div className="flex items-center space-y-0.5 space-x-2">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-base">Remember me </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <div>
            <Link to={""} className="cursor-pointer text-blue-500">
              Forgot password?
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-6">
            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              Sign In
            </Button>

            <hr className="" />
          </div>

          <div className="space-y-4 text-center">
            <span className="block text-center">Or</span>
            <Button className="w-full bg-gray-900 hover:bg-gray-700">
              Sign In with Google
            </Button>
            Dont have an account?{" "}
            <Link
              to={"/sign-portal?portal=sign-up"}
              className="cursor-pointer text-blue-500"
            >
              sign up now
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SignIn;

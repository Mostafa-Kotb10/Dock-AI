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
import { signInSchema, SignInValues } from "@/pages/sign-portal/schema";
import { FcGoogle } from "react-icons/fc";
import useSignPortalContext from "@/hooks/useSignPortalContext";
import { useSignIn } from "@/services/auth/mutations";

const SignIn = () => {
  const { mutate: signIn, data } = useSignIn();
  const form = useForm<SignInValues>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(signInSchema),
  });

  const { setPortalParam } = useSignPortalContext();

  const onSubmit = (data: SignInValues) => {
    signIn(data);
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="username"
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
                  autoComplete="current-password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <div className="flex items-center justify-between space-x-2">
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center space-y-0.5 space-x-2">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-base">Remember me</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <div>
            <Link
              to="/forgot-password"
              className="cursor-pointer text-blue-500"
            >
              Forgot password?
            </Link>
          </div>
        </div> */}

        <div className="space-y-6">
          <div className="space-y-6">
            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400"
            >
              Sign In
            </Button>

            <hr />
          </div>

          <div className="space-y-4 text-center">
            <span className="block text-center">Or</span>
            <Button className="flex w-full items-center gap-2 bg-gray-900 hover:bg-gray-700">
              <FcGoogle size={20} /> Sign In with Google
            </Button>
            <span>Don't have an account? </span>
            <span
              onClick={() => setPortalParam("sign-up")}
              className="cursor-pointer text-blue-500"
            >
              Sign up now
            </span>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SignIn;

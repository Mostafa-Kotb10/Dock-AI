import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import onboardingSrc from "@/assets/images/onboarding.png";
import { useForm } from "react-hook-form";
import { onboardingFormSchema, OnboardingValues } from "@/validation/schema";
import { useSignUpStore } from "@/store/signUpStore";
import {
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useSignUp } from "@/services/auth/mutations";

const Onboarding = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={onboardingSrc}
          alt="Onboarding Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-cyan-950/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 grid h-full grid-cols-2">
        {/* Intro Section */}
        <div className="flex flex-col justify-center space-y-6 px-10 py-20 text-white">
          <h2 className="text-5xl font-bold">Welcome to FastAF</h2>
          <p className="max-w-lg text-lg text-white/80">
            Let’s get your pharmacy up and running. Just a few steps to go!
          </p>
        </div>

        {/* Multi-Step Form Section */}
        <div className="flex items-center justify-center px-6 py-12 shadow-2xl">
          <Card className="h-[35rem] w-full max-w-xl rounded-sm border-none shadow-none">
            <CardHeader>
              <CardTitle>
                <p className="max-w-sm text-4xl font-bold">
                  Configure your Pharmacy
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative flex h-full items-center">
              {/* Multi-step form will go here */}
              <PharmacyNameForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const PharmacyNameForm = () => {
  const { data: signUpValues } = useSignUpStore();
  const { signUp } = useSignUp();
  const form = useForm<OnboardingValues>({
    mode: "onChange",
    resolver: zodResolver(onboardingFormSchema),
    defaultValues: {
      pharmacy: {
        name: "",
      },
    },
  });

  // Function to handle form submit
  const onSubmit = (data: OnboardingValues) => {
    const formData = {
      ...signUpValues,
      pharmacy: data.pharmacy,
    };

    console.log("form-data", formData)
    signUp(formData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1">
        <FormField
          name="pharmacy.name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="pharmacyName" className="text-lg">
                Pharmacy Name
              </FormLabel>
              <Input
                id="pharmacyName"
                placeholder="Enter pharmacy name"
                className="rounded-sm"
                {...field} // Linking the input with the form state
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="absolute right-5 bottom-0">Next</Button>
      </form>
    </Form>
  );
};

export default Onboarding;

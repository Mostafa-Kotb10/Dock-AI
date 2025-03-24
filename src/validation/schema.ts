import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  remember: z.boolean()
});

export type SignInValues = z.infer<typeof signInSchema>;

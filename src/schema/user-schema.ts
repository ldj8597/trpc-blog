import * as z from "zod";

export const registerUserSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be 3 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
});

export type RegisterUserInput = z.infer<typeof registerUserSchema>;

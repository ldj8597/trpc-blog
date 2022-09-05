import * as z from "zod";

export const registerUserSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  email: z.string().email({ message: "Invalid email address" }),
});

export type RegisterUserInput = z.infer<typeof registerUserSchema>;

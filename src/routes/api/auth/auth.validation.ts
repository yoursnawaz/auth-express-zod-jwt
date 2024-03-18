import { z } from "zod";

export const SignupSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email({ message: "Invalid email format" }),
  password: z.string({ required_error: "Password is required" }).min(8, { message: "Password must contain at least 8 character(s)" }),
});

export const LoginSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email({ message: "Invalid email" }),
  password: z.string({ required_error: "Password is required" }),
});

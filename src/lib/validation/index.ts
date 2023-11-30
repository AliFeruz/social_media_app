import * as z from "zod";

export const SignUpValidation = z.object({
    name: z.string().min(2, { message: 'too short'}),
    username: z.string().min(2, { message: 'too short'}),
    email: z.string().email(),
    password: z.string().min(7, { message: 'Password must be at least 7 characters'}),

  });
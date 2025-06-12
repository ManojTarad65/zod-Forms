import { z } from "zod";


//1. simple validation
// export const signUpSchema = z.object({
//     name: z.string().min(3, "Name must be at least 3 characters long"),
//     email: z.string().email("Invalid email address"),
//     password: z.string().min(6, "Password must be at least 6 characters long"),
// });


//2. complex validation
export const signUpSchema = z.object({
    name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name must be at most 50 characters long")
    .regex(/^[a-zA-Z ]+$/, "Name must contain only letters and spaces"),


    email: z.string()
    .email("Invalid email address")
    .refine((value)=>value.endsWith("@gmail.com") || value.endsWith("@yahoo.com") || value.endsWith("@hotmail.com"), 
    {message:"Email must be a valid email address"}),

    password: z.string()
    .min(6, "Password must be at least 8 characters long")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character")
    .max(20, "Password must not exceed 20 characters "),    
});
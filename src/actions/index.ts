"use server"
import { signUpSchema } from "@/schemas"
import { z } from "zod"

export async function createUser(values: z.infer<typeof signUpSchema>) {
const result = signUpSchema.safeParse(values)
if (!result.success) {
    return {status:"error", message: result.error.message};
}
console.log(values.name, values.email, values.password)

return {status:"success", message: "User created successfully"};
}

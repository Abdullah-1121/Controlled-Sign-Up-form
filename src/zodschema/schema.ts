import { z , ZodType } from "zod";
import { Fields } from "./types"
export const Formschema :ZodType<Fields>=z.object({
    username:z.string().min(3,'username must be at least 3 characters').max(10,'username must be at most 10 characters'),
    email:z.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'Invalid email'
),
age:z
.number({ invalid_type_error: "Age must be a number" })
.min(18, { message: "Age must be at least 18" })
.max(60, { message: "Age must be less than or equal to 60" }),
password: z
.string()
.min(8, { message: "Password is too short" })
.max(20, { message: "Password is too long" }),
confirmPassword: z.string(),
})
.refine((data) => data.password === data.confirmPassword, {
message: "Passwords do not match",
path: ["confirmPassword"], // path of error : where to show the error message
})

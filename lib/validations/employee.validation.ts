import { z } from "zod";

const employeeValidation = z.object({
  name: z
    .string()
    .min(1, { message: "This field is required" })
    .min(3, { message: "Minimum 3 characters" })
    .max(20, { message: "Maximum 20 character" }),
  email: z
    .string()
    .min(1, { message: "This field is required" })
    .email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(1, { message: "This field is required" })
    .regex(/^\d+$/, { message: "Only numbers are allowed" })
    .min(6, { message: "Minimum 6 characters" })
    .max(14, { message: "Invalid phone number" }),
  jobTile: z
    .string()
    .min(1, { message: "This field is required" })
    .min(2, { message: "Minimum 2 characters" })
    .max(20, { message: "Maximum 20 character" }),
  department: z
    .string()
    .min(1, { message: "This field is required" })
    .min(2, { message: "Minimum 2 characters" })
    .max(20, { message: "Maximum 20 character" }),
  salary: z
    .string()
    .min(1, { message: "This field is required" })
    .regex(/^\d+$/, { message: "Only numbers are allowed" })
    .max(15, { message: "Maximum 15 character" }),
});

type employeeValidationType = z.infer<typeof employeeValidation>;

export { employeeValidation, type employeeValidationType };

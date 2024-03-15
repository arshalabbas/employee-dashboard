"use client";

import {
  employeeValidation,
  employeeValidationType,
} from "@/lib/validations/employee.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TextInput from "../ui/TextInput";
import { updateEmployee } from "@/lib/actions/employee.actions";
import { useRouter } from "next/navigation";

interface Props {
  btnTitle: string;
  employee?: {
    id?: string;
    name: string;
    email: string;
    phone: string;
    jobTitle: string;
    department: string;
    salary: string;
  };
}

const EmployeeForm = ({ btnTitle, employee }: Props) => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<employeeValidationType>({
    resolver: zodResolver(employeeValidation),
    defaultValues: {
      name: employee?.name,
      email: employee?.email,
      phone: employee?.phone,
      jobTile: employee?.jobTitle,
      department: employee?.department,
      salary: employee?.salary,
    },
  });

  const onSubmit = async (values: employeeValidationType) => {
    await updateEmployee({
      id: employee?.id,
      name: values.name,
      email: values.email,
      phone: values.phone,
      jobTitle: values.jobTile,
      department: values.department,
      salary: values.salary,
    }).then(() => router.push("/employees"));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div className="flex gap-5 max-sm:flex-col">
        <TextInput<employeeValidationType>
          register={register}
          name="name"
          type="text"
          label="Full Name"
          placeholder="Enter the full name..."
          errorMessage={errors.name?.message}
        />
      </div>
      <div className="flex gap-5 max-sm:flex-col">
        <TextInput<employeeValidationType>
          register={register}
          name="email"
          type="text"
          label="Email"
          placeholder="Enter the email..."
          errorMessage={errors.email?.message}
        />
        <TextInput<employeeValidationType>
          register={register}
          name="phone"
          type="text"
          label="Phone Number"
          placeholder="Enter the phone number..."
          errorMessage={errors.phone?.message}
        />
      </div>
      <div className="flex gap-5 max-sm:flex-col">
        <TextInput<employeeValidationType>
          register={register}
          name="jobTile"
          type="text"
          label="Job Title"
          placeholder="Enter the job title..."
          errorMessage={errors.jobTile?.message}
        />
        <TextInput<employeeValidationType>
          register={register}
          name="department"
          type="text"
          label="Department"
          placeholder="Enter the dept..."
          errorMessage={errors.department?.message}
        />
      </div>
      <div className="flex gap-5 max-sm:flex-col">
        <TextInput<employeeValidationType>
          register={register}
          name="salary"
          type="text"
          label="Salary"
          placeholder="Enter the salary..."
          errorMessage={errors.salary?.message}
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-wide mt-5"
        >
          {btnTitle}
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;

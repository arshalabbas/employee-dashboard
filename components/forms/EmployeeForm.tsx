"use client";

import {
  employeeValidation,
  employeeValidationType,
} from "@/lib/validations/employee.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TextInput from "../ui/TextInput";

const EmployeeForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<employeeValidationType>({
    resolver: zodResolver(employeeValidation),
  });

  const onSubmit = (value: employeeValidationType) => {};
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
          type="email"
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
          Add User
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;

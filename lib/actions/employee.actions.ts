"use server";

import mongoose from "mongoose";
import Employee from "../models/employee.model";
import connectToDB from "../mongoose";
import { revalidatePath } from "next/cache";

interface Props {
  id?: string;
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  department: string;
  salary: string;
}

// function to create or update the employee
export async function updateEmployee({
  id,
  name,
  email,
  phone,
  jobTitle,
  department,
  salary,
}: Props) {
  try {
    connectToDB();

    if (id) {
      const employeeObjectId = new mongoose.Types.ObjectId(id);

      await Employee.findByIdAndUpdate(employeeObjectId, {
        name,
        email,
        phone,
        jobTitle,
        department,
        salary,
      });
    } else {
      await Employee.create({
        name,
        email,
        phone,
        jobTitle,
        department,
        salary,
        date: new Date(),
      });
    }

    revalidatePath("/employees");
  } catch (error: any) {
    throw new Error(`Error adding new Employee: ${error.message}`);
  }
}

// function to fetch all employeees
export async function fetchAllEmployees() {
  try {
    connectToDB();
    const employeesData = await Employee.find().sort({ date: "desc" });

    return employeesData;
  } catch (error: any) {
    throw new Error(`Error fetching all employees: ${error.message}`);
  }
}

// function to fetch employee by id
export async function fetchEmployee(id: string) {
  try {
    connectToDB();

    const employeeObjectId = new mongoose.Types.ObjectId(id);
    const employee = await Employee.findById(employeeObjectId);

    return employee;
  } catch (error: any) {
    throw new Error(`Error fetching employee: ${error.message}`);
  }
}

// function to remove employee
export async function deleteEmployee(id: string, pathname: string) {
  try {
    connectToDB();

    const objectId = new mongoose.Types.ObjectId(id);

    await Employee.deleteOne({ _id: objectId });

    revalidatePath(pathname);
  } catch (error: any) {
    throw new Error(`Error deleting Employee: ${error.message}`);
  }
}

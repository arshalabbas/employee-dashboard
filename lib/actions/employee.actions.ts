"use server";

import Employee from "../models/employee.model";
import connectToDB from "../mongoose";

interface Props {
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  department: string;
  salary: string;
}

export async function addEmployee({
  name,
  email,
  phone,
  jobTitle,
  department,
  salary,
}: Props) {
  try {
    connectToDB();

    await Employee.create({
      name,
      email,
      phone,
      jobTitle,
      department,
      salary,
      date: new Date(),
    });
  } catch (error: any) {
    throw new Error(`Error adding new Employee: ${error.message}`);
  }
}

export async function fetchAllEmployees() {
  try {
    connectToDB();
    const employeesData = await Employee.find().sort({ date: "desc" });

    return employeesData;
  } catch (error: any) {
    throw new Error(`Error fetching all employees: ${error.message}`);
  }
}

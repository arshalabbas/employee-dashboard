import EmployeeTable from "@/components/tables/EmployeeTable";
import { fetchAllEmployees } from "@/lib/actions/employee.actions";

const Page = async () => {
  const employeesData = await fetchAllEmployees();

  return (
    <section>
      <h1 className="text-head">Employees</h1>
      <EmployeeTable employeesData={employeesData} />
    </section>
  );
};

export default Page;

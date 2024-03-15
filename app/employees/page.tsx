import SearchEmployee from "@/components/shared/SearchEmployee";
import EmployeeTable from "@/components/tables/EmployeeTable";
import { fetchEmployees } from "@/lib/actions/employee.actions";

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <section>
      <h1 className="text-head">Employees</h1>
      <SearchEmployee />
      <EmployeeTable query={query} />
    </section>
  );
};

export default Page;

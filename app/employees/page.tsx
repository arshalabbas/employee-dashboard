import FilterBar from "@/components/shared/FilterBar";
import SearchEmployee from "@/components/shared/SearchEmployee";
import EmployeeTable from "@/components/tables/EmployeeTable";
import { fetchEmployees } from "@/lib/actions/employee.actions";

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    sort?: boolean;
  };
}) => {
  const query = searchParams?.query || "";
  const sort = searchParams?.sort || false;

  return (
    <section>
      <h1 className="text-head">Employees</h1>
      <SearchEmployee />
      <FilterBar />
      <EmployeeTable query={query} sort={sort} />
    </section>
  );
};

export default Page;

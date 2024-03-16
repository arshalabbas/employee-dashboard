import { fetchEmployees } from "@/lib/actions/employee.actions";

export default async function Home() {
  const employeesData = await fetchEmployees();

  const avgSalary = Math.trunc(
    employeesData.reduce(
      (accumulator, currentValue) => accumulator + +currentValue.salary,
      0
    ) / employeesData.length
  );

  const highestSalary =
    employeesData.length > 0
      ? Math.max(...employeesData.map((employee) => +employee.salary))
      : 0;

  return (
    <section>
      <h1 className="text-head">Insights</h1>
      <div className="join join-vertical lg:join-horizontal shadow-md w-full">
        <div className="join-item p-10">
          <p className="text-6xl max-sm:text-4xl font-black text-secondary text-center">
            {employeesData.length}
          </p>
          <p className="text-center opacity-80">Total Employees</p>
        </div>
        <div className="join-item p-10">
          <p className="text-6xl max-sm:text-4xl font-black text-accent text-center">
            {isNaN(avgSalary) ? 0 : avgSalary}
          </p>
          <p className="text-center opacity-80">Average Salary</p>
        </div>
        <div className="join-item p-10">
          <p className="text-6xl max-sm:text-4xl font-black text-secondary text-center">
            {highestSalary}
          </p>
          <p className="text-center opacity-80">Highest Salery</p>
        </div>
      </div>
    </section>
  );
}

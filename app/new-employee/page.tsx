import EmployeeForm from "@/components/forms/EmployeeForm";

const Page = () => {
  return (
    <section>
      <h1 className="text-head">New Employee</h1>
      <EmployeeForm btnTitle="Add Employee" />
    </section>
  );
};

export default Page;

import { StringValidation } from "zod";
import TableRow from "../ui/TableRow";

const EmployeeTable = ({
  employeesData,
}: {
  employeesData: {
    _id: string;
    name: string;
    jobTitle: string;
    department: string;
    salary: string;
    email: string;
    phone: string;
  }[];
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Salary</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map((employee, index) => (
            <TableRow
              key={employee._id.toString()}
              _id={employee._id.toString()}
              name={employee.name}
              jobTitle={employee.jobTitle}
              department={employee.department}
              salary={employee.salary}
              phone={employee.phone}
              email={employee.email}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;

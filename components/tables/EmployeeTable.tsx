"use client";

import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const EmployeeDetailsModal = ({ id }: { id: string }) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
  );
};

const showEmployeeModal = (id: string) => {
  (document.getElementById(id) as HTMLDialogElement)?.showModal();
};

const EmployeeTable = ({
  employeesData,
}: {
  employeesData: {
    name: string;
    jobTitle: string;
    department: string;
    salary: string;
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
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{employee.name}</td>
              <td>
                {employee.jobTitle}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {employee.department}
                </span>
              </td>
              <td>{employee.salary}</td>
              <td>
                <button
                  className="btn btn-ghost"
                  onClick={() => showEmployeeModal(index.toString())}
                >
                  <FaEye className="text-xl" />{" "}
                  <span className="hidden lg:block">View</span>
                </button>
                <button className="btn btn-ghost">
                  <FaEdit className="text-xl" />{" "}
                  <span className="hidden lg:block">Edit</span>
                </button>
                <button className="btn btn-ghost">
                  <FaTrash className="text-xl text-error" />{" "}
                  <span className="hidden lg:block">Delete</span>
                </button>
                <EmployeeDetailsModal id={index.toString()} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;

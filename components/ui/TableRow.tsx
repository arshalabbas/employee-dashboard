"use client";

import Link from "next/link";
import { FaEdit, FaEye, FaPhone, FaTrash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AlertModal, { alertButtonOnClickHandler } from "./AlertModal";
import { usePathname } from "next/navigation";
import { deleteEmployee } from "@/lib/actions/employee.actions";

interface Props {
  _id: string;
  name: string;
  jobTitle: string;
  department: string;
  salary: string;
  index: number;
  phone: string;
  email: string;
}

const EmployeeDetailsModal = ({
  id,
  employee,
}: {
  id: string;
  employee: Props;
}) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div>
          <div>
            <h3 className="text-lg font-black">{employee.name}</h3>
            <p className="badge badge-outline badge-secondary">
              {employee.jobTitle}
            </p>
          </div>
          <div className="divider"></div>
          <div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-3">
                <p className="text-sm opacity-70">Department</p>
                <p className="font-semibold">{employee.department}</p>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-sm opacity-70">Salary</p>
                <p className="font-semibold">{employee.salary}</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between">
              <a href={`mailto:${employee.email}`} className="btn btn-ghost">
                <MdEmail className="text-lg" />
                {employee.email}
              </a>
              <a href={`tel:${employee.phone}`} className="btn btn-ghost">
                <FaPhone className="text-lg" />
                {employee.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

const showEmployeeModal = (id: string) => {
  (document.getElementById(id) as HTMLDialogElement)?.showModal();
};

const deleteEmployeeHandler = async (id: string, pathname: string) => {
  await deleteEmployee(id, pathname);
};

const TableRow = ({
  _id,
  name,
  jobTitle,
  department,
  salary,
  index,
  phone,
  email,
}: Props) => {
  const pathname = usePathname();
  return (
    <tr className="hover">
      <th className="max-sm:hidden">{index + 1}</th>
      <td>{name}</td>
      <td>
        {jobTitle}
        <br />
        <span className="badge badge-primary badge-outline badge-sm max-sm:hidden">
          {department}
        </span>
      </td>
      <td>{salary}</td>
      <td className="flex max-sm:flex-col">
        <button
          className="btn btn-ghost"
          onClick={() => showEmployeeModal(_id)}
        >
          <FaEye className="text-xl" />{" "}
          <span className="hidden lg:block">View</span>
        </button>
        <Link href={`/edit/${_id}`} className="btn btn-ghost">
          <FaEdit className="text-xl" />{" "}
          <span className="hidden lg:block">Edit</span>
        </Link>
        <button
          className="btn btn-ghost"
          onClick={() => alertButtonOnClickHandler(_id + "delete")}
        >
          <FaTrash className="text-xl text-error" />{" "}
          <span className="hidden lg:block">Delete</span>
        </button>
        <EmployeeDetailsModal
          id={_id}
          employee={{
            name,
            jobTitle,
            department,
            salary,
            phone,
            email,
            index,
            _id,
          }}
        />
        <AlertModal
          id={_id + "delete"}
          buttonTitle="Delete"
          body="Are you sure about this decision?"
          successHandler={() => deleteEmployeeHandler(_id, pathname)}
        />
      </td>
    </tr>
  );
};

export default TableRow;

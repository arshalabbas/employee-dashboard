import { IconType } from "react-icons";
import { FaUserPlus } from "react-icons/fa";
import { TiHome, TiUser } from "react-icons/ti";

interface sideBarItemType {
  title: string;
  route: string;
  Icon: IconType;
}

const sideBarItems: sideBarItemType[] = [
  {
    title: "Home",
    route: "/",
    Icon: TiHome,
  },
  {
    title: "Employees",
    route: "/employees",
    Icon: TiUser,
  },
  {
    title: "New Employee",
    route: "/new-employee",
    Icon: FaUserPlus,
  },
];

export default sideBarItems;

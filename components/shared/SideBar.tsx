import sideBarItems from "@/constants/sideBarItems";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="flex sticky left-0 top-0 z-20 h-screen max-md:hidden">
      <div className="w-fit min-h-full bg-base-200 p-4 pt-20">
        {/* Sidebar content here */}
        <ul className="menu menu-lg">
          {sideBarItems.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.route}>
                  <item.Icon className="text-xl" />
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center">
        {/* Page content here */}
      </div>
    </div>
  );
};

export default SideBar;

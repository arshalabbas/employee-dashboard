"use client";

import sideBarItems from "@/constants/sideBarItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex sticky left-0 top-0 z-20 h-screen max-md:hidden">
      <div className="w-fit min-h-full bg-base-200 p-4 pt-20">
        {/* Sidebar content here */}
        <ul className="menu menu-lg gap-3">
          {sideBarItems.map((item, index) => {
            const isActive =
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;
            return (
              <li key={index}>
                <Link href={item.route} className={`${isActive && "active"}`}>
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

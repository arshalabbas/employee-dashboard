import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./index.css";
import NavBar from "@/components/shared/NavBar";
import SideBar from "@/components/shared/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Employee Dashboard",
  description: "A Simple CRUD App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="flex flex-row">
          <SideBar />
          <section className="main-container py-24">
            <div className="w-full max-w-4xl">{children}</div>
          </section>
          {/* <RightSidebar /> */}
        </main>
      </body>
    </html>
  );
}

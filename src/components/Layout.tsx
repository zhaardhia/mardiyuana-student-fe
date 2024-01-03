import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Icon } from "@iconify/react";
import Link from "next/link";
// import { useSessionUser } from '../contexts/SessionUserContext'
import { useRouter } from "next/router";
import Navbar from "./Navbar";
// import { Toaster } from "@/components/ui/toaster"

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { asPath, pathname } = useRouter();
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="pt-[9rem] sm:pt-[7rem] pb-[3rem] sm:pl-[10rem] bg-[#E4EBF7] min-h-screen">{children}</div>
      {/* <Toaster /> */}
    </>
  );
};

export default Layout;

"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";
import { useAppContext } from "@/context/AppContext";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { Menu } = useAppContext();
  const pn = usePathname();
  return (
    <div className={`h-screen w-screen ${pn.includes("watch") ? "lg:overflow-y-hidden overflow-y-scroll" : "overflow-y-scroll"}  bg-white`}>
      <Navbar />
      {/* Sidebar */}
      <div
        className={`fixed top-0 h-screen bg-black/5 transition-all duration-300 ease-in-out z-30 min-w-64 ${
          Menu ? "left-0" : "-left-[600px]"
        }`}
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <main
        className={`relative ${
          pn.includes("watch") ? "h-[calc(100vh-56px)]" : "min-h-screen"
        } h-auto w-full  transition-all duration-300 ease-in-out ${
          Menu ? "md:pl-[260px]" : "md:pl-0"
        }`}
      >
        {children}
      </main>
    </div>
  );
}

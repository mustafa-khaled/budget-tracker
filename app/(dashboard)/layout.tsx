import Navbar from "@/components/navbar/Navbar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-full flex-col">
      <Navbar />
      <main className="w-full">{children}</main>
    </div>
  );
}

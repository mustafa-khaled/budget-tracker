import Logo from "@/components/Logo";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      <Logo />

      <div className="mt-12">{children}</div>
    </div>
  );
}

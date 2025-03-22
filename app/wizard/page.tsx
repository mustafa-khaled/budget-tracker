import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function WizardPage() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="container flex max-w-2xl flex-col items-center justify-between gap-4">
      <h1 className="text-center text-3xl">
        Welcome, <span className="ml-2 font-bold">{user.firstName}</span>
      </h1>
    </div>
  );
}

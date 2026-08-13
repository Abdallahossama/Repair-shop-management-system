import { Users } from "./columns";
import { UsersTable } from "./users-table";
import { Metadata } from "next";
import { User } from "lucide-react";

export const metadata: Metadata = {
  title: {
    template: "Users",
    default: "Users",
  },
};
async function getData(): Promise<Users[]> {
  // Fetch data from your API here.
  return [
    {
      id: "u_01",
      name: "Dana Whitmore",
      email: "dana.whitmore@repairshop.com",
      role: "Admin",
      active: true,
    },
    {
      id: "u_02",
      name: "Reuben Castellanos",
      email: "reuben.castellanos@repairshop.com",
      role: "Manager",
      active: true,
    },
    {
      id: "u_03",
      name: "Aisha Bello",
      email: "aisha.bello@repairshop.com",
      role: "Manager",
      active: true,
    },
    {
      id: "u_04",
      name: "Miles Petrov",
      email: "miles.petrov@repairshop.com",
      role: "Employee",
      active: true,
    },
    {
      id: "u_05",
      name: "Jenna Kowalczyk",
      email: "jenna.kowalczyk@repairshop.com",
      role: "Employee",
      active: true,
    },
    {
      id: "u_06",
      name: "Theo Adeyemi",
      email: "theo.adeyemi@repairshop.com",
      role: "Employee",
      active: true,
    },
    {
      id: "u_07",
      name: "Clara Vestergaard",
      email: "clara.vestergaard@repairshop.com",
      role: "Employee",
      active: true,
    },
    {
      id: "u_08",
      name: "Samuel Ngata",
      email: "samuel.ngata@repairshop.com",
      role: "Employee",
      active: false,
    },
    {
      id: "u_09",
      name: "Lucia Ferrari",
      email: "lucia.ferrari@repairshop.com",
      role: "Employee",
      active: true,
    },
    {
      id: "u_10",
      name: "Brandon Ochieng",
      email: "brandon.ochieng@repairshop.com",
      role: "Employee",
      active: false,
    },
    {
      id: "u_11",
      name: "Noor Haddadi",
      email: "noor.haddadi@repairshop.com",
      role: "Employee",
      active: true,
    },
    {
      id: "u_12",
      name: "Gus Lindenberg",
      email: "gus.lindenberg@repairshop.com",
      role: "Employee",
      active: true,
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center gap-2">
        <User size={30} />
        <h1 className="text-4xl font-semibold">Users</h1>
      </div>
      <UsersTable initialData={data} />
    </div>
  );
}

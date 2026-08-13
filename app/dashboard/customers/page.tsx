import { Customers } from "./columns";
import { CustomersTable } from "./customers-table";
import { Metadata } from "next";
import { Store } from "lucide-react";

export const metadata: Metadata = {
  title: {
    template: "Customers",
    default: "Customers",
  },
};
async function getData(): Promise<Customers[]> {
  // Fetch data from your API here.
  return [
    {
      id: "c1a4f207",
      name: "Marcus Hollis",
      fullAddress: "412 Rowan St, Springfield, IL 62704",
      phone: "(217) 555-0142",
      email: "marcus.hollis@example.com",
    },
    {
      id: "b7d92e31",
      name: "Priya Raman",
      fullAddress: "88 Kestrel Ave, Apt 3B, Madison, WI 53703",
      phone: "(608) 555-0198",
      email: "priya.raman@example.com",
    },
    {
      id: "f3c08a5d",
      name: "Daniel Okafor",
      fullAddress: "1730 Belmont Rd, Columbus, OH 43201",
      phone: "(614) 555-0177",
      email: "daniel.okafor@example.com",
    },
    {
      id: "a92b16ce",
      name: "Sofia Marchetti",
      fullAddress: "205 Elmwood Ct, Naperville, IL 60540",
      phone: "(630) 555-0121",
      email: "sofia.marchetti@example.com",
    },
    {
      id: "6e5d70b4",
      name: "Tyler Brennan",
      fullAddress: "77 Canal St, Unit 12, Grand Rapids, MI 49503",
      phone: "(616) 555-0163",
      email: "tyler.brennan@example.com",
    },
    {
      id: "d40fc812",
      name: "Amina Yusuf",
      fullAddress: "3391 Larkspur Ln, Minneapolis, MN 55408",
      phone: "(612) 555-0135",
      email: "amina.yusuf@example.com",
    },
    {
      id: "8fb3ad60",
      name: "Grant Whitfield",
      fullAddress: "14 Oak Hollow Dr, Bloomington, IN 47401",
      phone: "(812) 555-0109",
      email: "grant.whitfield@example.com",
    },
    {
      id: "2c7e94f8",
      name: "Leah Ostrowski",
      fullAddress: "620 W Fulton St, Chicago, IL 60661",
      phone: "(312) 555-0188",
      email: "leah.ostrowski@example.com",
    },
    {
      id: "5a1d6b73",
      name: "Hector Salinas",
      fullAddress: "902 Pinecrest Blvd, Peoria, IL 61604",
      phone: "(309) 555-0154",
      email: "hector.salinas@example.com",
    },
    {
      id: "e6802c19",
      name: "Nina Kovalenko",
      fullAddress: "48 Harborview Rd, Milwaukee, WI 53202",
      phone: "(414) 555-0172",
      email: "nina.kovalenko@example.com",
    },
    {
      id: "9d34e7a0",
      name: "Omar Haddad",
      fullAddress: "1155 Sycamore Way, Dayton, OH 45402",
      phone: "(937) 555-0146",
      email: "omar.haddad@example.com",
    },
    {
      id: "37f5c2be",
      name: "Rachel Lindqvist",
      fullAddress: "26 Birchwood Trl, Ann Arbor, MI 48103",
      phone: "(734) 555-0117",
      email: "rachel.lindqvist@example.com",
    },
    {
      id: "c58a03df",
      name: "Kevin Tran",
      fullAddress: "781 Meridian Ave, Indianapolis, IN 46204",
      phone: "(317) 555-0190",
      email: "kevin.tran@example.com",
    },
    {
      id: "1b96f4ac",
      name: "Deborah Nkemelu",
      fullAddress: "340 Ashland Pkwy, Aurora, IL 60505",
      phone: "(331) 555-0128",
      email: "deborah.nkemelu@example.com",
    },
    {
      id: "7e2c8501",
      name: "Julian Ferreira",
      fullAddress: "59 Quarry Rd, Cincinnati, OH 45202",
      phone: "(513) 555-0166",
      email: "julian.ferreira@example.com",
    },
    {
      id: "4af71d92",
      name: "Camille Boucher",
      fullAddress: "1204 Stonebridge Dr, Rockford, IL 61108",
      phone: "(779) 555-0113",
      email: "camille.boucher@example.com",
    },
    {
      id: "b03e6f47",
      name: "Isaac Mbeki",
      fullAddress: "915 Glenview St, Toledo, OH 43604",
      phone: "(419) 555-0159",
      email: "isaac.mbeki@example.com",
    },
    {
      id: "68c1ba30",
      name: "Hannah Delacroix",
      fullAddress: "37 Foxtail Cir, Champaign, IL 61820",
      phone: "(217) 555-0104",
      email: "hannah.delacroix@example.com",
    },
    {
      id: "df509e26",
      name: "Victor Nakamura",
      fullAddress: "2280 Riverbend Ave, Kalamazoo, MI 49007",
      phone: "(269) 555-0181",
      email: "victor.nakamura@example.com",
    },
    {
      id: "0e7d3c58",
      name: "Bianca Ortiz",
      fullAddress: "146 Cypress Grove Ln, Joliet, IL 60435",
      phone: "(815) 555-0193",
      email: "bianca.ortiz@example.com",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center gap-2">
        <Store size={30} />
        <h1 className="text-4xl font-semibold">Customers</h1>
      </div>
      <CustomersTable initialData={data} />
    </div>
  );
}

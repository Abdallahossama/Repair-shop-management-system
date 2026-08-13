import { type Tickets as TicketsRow } from "./columns";
import { TicketsTable } from "./tickets-table";
import { Metadata } from "next";
import { Tickets } from "lucide-react";

export const metadata: Metadata = {
  title: {
    template: "Tickets",
    default: "Tickets",
  },
};
async function getData(): Promise<TicketsRow[]> {
  // Fetch data from your API here.
  return [
    {
      id: "t_1001",
      title: "Cracked screen — iPhone 13",
      notes: "Customer declined the screen protector add-on. Part on order.",
      status: "OPEN",
      assignedTo: "Miles Petrov",
      createdDate: new Date("2025-07-28"),
      updatedDate: new Date("2025-08-04"),
    },
    {
      id: "t_1002",
      title: "Laptop won't power on — Dell XPS 15",
      notes: "Traced to a failed DC jack. Quoted labor plus part.",
      status: "OPEN",
      assignedTo: "Jenna Kowalczyk",
      createdDate: new Date("2025-07-30"),
      updatedDate: new Date("2025-08-06"),
    },
    {
      id: "t_1003",
      title: "Battery swap — MacBook Air M1",
      notes: "Cycle count over 1200. Battery in stock, same-day turnaround.",
      status: "COMPLETED",
      assignedTo: "Theo Adeyemi",
      createdDate: new Date("2025-07-14"),
      updatedDate: new Date("2025-07-16"),
    },
    {
      id: "t_1004",
      title: "Water damage assessment — Galaxy S22",
      notes:
        "Board cleaned in ultrasonic. Waiting on customer approval before reassembly.",
      status: "OPEN",
      assignedTo: "Clara Vestergaard",
      createdDate: new Date("2025-08-01"),
      updatedDate: new Date("2025-08-08"),
    },
    {
      id: "t_1005",
      title: "Data recovery — external SSD",
      notes: "Partition table corrupt. Roughly 80% of files recovered so far.",
      status: "OPEN",
      assignedTo: "Lucia Ferrari",
      createdDate: new Date("2025-08-02"),
      updatedDate: new Date("2025-08-09"),
    },
    {
      id: "t_1006",
      title: "Keyboard replacement — ThinkPad T480",
      notes: "Several dead keys after a spill. Replacement fitted and tested.",
      status: "COMPLETED",
      assignedTo: "Miles Petrov",
      createdDate: new Date("2025-07-19"),
      updatedDate: new Date("2025-07-23"),
    },
    {
      id: "t_1007",
      title: "Overheating desktop — custom build",
      notes: "Repasted the CPU and cleared a badly clogged front intake.",
      status: "COMPLETED",
      assignedTo: "Noor Haddadi",
      createdDate: new Date("2025-07-21"),
      updatedDate: new Date("2025-07-25"),
    },
    {
      id: "t_1008",
      title: "Charging port repair — iPad Pro 11",
      notes: "",
      status: "OPEN",
      assignedTo: "Gus Lindenberg",
      createdDate: new Date("2025-08-05"),
      updatedDate: new Date("2025-08-05"),
    },
    {
      id: "t_1009",
      title: "Windows reinstall + data migration",
      notes: "Customer has no backup. Imaging the drive before touching it.",
      status: "OPEN",
      assignedTo: "Jenna Kowalczyk",
      createdDate: new Date("2025-08-06"),
      updatedDate: new Date("2025-08-11"),
    },
    {
      id: "t_1010",
      title: "Hinge repair — HP Envy x360",
      notes: "Housing is cracked around the mount; needs the full lid assembly.",
      status: "OPEN",
      assignedTo: "Theo Adeyemi",
      createdDate: new Date("2025-08-07"),
      updatedDate: new Date("2025-08-10"),
    },
    {
      id: "t_1011",
      title: "Virus removal — small clinic workstation",
      notes: "Three machines from the same office. This is the first of three.",
      status: "COMPLETED",
      assignedTo: "Clara Vestergaard",
      createdDate: new Date("2025-07-24"),
      updatedDate: new Date("2025-07-29"),
    },
    {
      id: "t_1012",
      title: "RAM upgrade to 32GB — Precision 5560",
      notes: "Customer supplied the modules. Labor only.",
      status: "COMPLETED",
      assignedTo: "Lucia Ferrari",
      createdDate: new Date("2025-07-26"),
      updatedDate: new Date("2025-07-27"),
    },
    {
      id: "t_1013",
      title: "No display output — GTX 1660 Super",
      notes: "Tested fine in the bench rig. Suspect the customer's PSU.",
      status: "OPEN",
      assignedTo: "Noor Haddadi",
      createdDate: new Date("2025-08-08"),
      updatedDate: new Date("2025-08-12"),
    },
    {
      id: "t_1014",
      title: "Speaker crackling — Pixel 7",
      notes: "Debris in the earpiece mesh. Cleaned; monitoring before return.",
      status: "OPEN",
      assignedTo: "Gus Lindenberg",
      createdDate: new Date("2025-08-09"),
      updatedDate: new Date("2025-08-12"),
    },
    {
      id: "t_1015",
      title: "Printer network setup — office of 6",
      notes: "On-site visit. Static IP assigned and drivers pushed to all six.",
      status: "COMPLETED",
      assignedTo: "Miles Petrov",
      createdDate: new Date("2025-07-31"),
      updatedDate: new Date("2025-08-02"),
    },
    {
      id: "t_1016",
      title: "Trackpad unresponsive — MacBook Pro 14",
      notes: "Flex cable reseated, still intermittent. Escalating to a manager.",
      status: "OPEN",
      assignedTo: "Jenna Kowalczyk",
      createdDate: new Date("2025-08-10"),
      updatedDate: new Date("2025-08-12"),
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center gap-2">
        <Tickets size={30} />
        <h1 className="text-4xl font-semibold">Tickets</h1>
      </div>
      <TicketsTable initialData={data} />
    </div>
  );
}

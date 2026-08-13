"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { type DataTableFeatures } from "@/components/data-table/features";
import { NotesCell } from "@/components/data-table/notes-cell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

import { TicketMarkDoneButton, TicketRowActions } from "./row-actions";

// Shape per UserStories.md: tickets have an ID, title, notes and created /
// updated dates (story 8), are either OPEN or COMPLETED (story 9), and are
// assigned to a specific employee (story 10).
export type Tickets = {
  id: string;
  title: string;
  notes: string;
  status: "OPEN" | "COMPLETED";
  assignedTo: string;
  createdDate: Date;
  updatedDate: Date;
};

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, Tickets>();

// A factory rather than a plain const, because the row actions need a callback
// from whoever owns the ticket state. Call it inside a `useMemo` so the table
// isn't handed a brand-new column array on every render.
export function createColumns({
  onMarkAsDone,
  onDelete,
}: {
  onMarkAsDone: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return columnHelper.columns([
    columnHelper.display({
      id: "actions",
      cell: ({ row }) => (
        <TicketRowActions ticket={row.original} onDelete={onDelete} />
      ),
    }),
    columnHelper.accessor("title", {
      header: "Title",
      cell: ({ row }) => (
        <span className="font-medium">{row.original.title}</span>
      ),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status;

        return (
          <Badge variant={status === "OPEN" ? "default" : "secondary"}>
            {status}
          </Badge>
        );
      },
    }),
    columnHelper.accessor("assignedTo", {
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Assigned To
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    }),
    columnHelper.accessor("notes", {
      header: "Notes",
      cell: ({ row }) => (
        <NotesCell title={row.original.title} notes={row.original.notes} />
      ),
    }),
    columnHelper.accessor("createdDate", {
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Created
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => formatDate(row.original.createdDate),
    }),
    columnHelper.accessor("updatedDate", {
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Updated
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => formatDate(row.original.updatedDate),
    }),
    columnHelper.display({
      id: "markDone",
      cell: ({ row }) => (
        <TicketMarkDoneButton ticket={row.original} onMarkAsDone={onMarkAsDone} />
      ),
    }),
  ]);
}

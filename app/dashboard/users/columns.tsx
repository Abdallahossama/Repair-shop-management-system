"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { type DataTableFeatures } from "@/components/data-table/features";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { UserRowActions } from "./row-actions";

// Shape per UserStories.md: users have Employee, Manager, or Admin permissions
// (story 11), and access can be revoked without deleting the record (story 6),
// which is what `active` tracks.
export type Users = {
  id: string;
  name: string;
  email: string;
  role: "Employee" | "Manager" | "Admin";
  active: boolean;
};

const roleVariant: Record<Users["role"], "default" | "secondary" | "outline"> = {
  Admin: "default",
  Manager: "secondary",
  Employee: "outline",
};

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, Users>();

// A factory rather than a plain const, because the row actions need an
// `onDelete` callback from whoever owns the user state. Call it inside a
// `useMemo` so the table isn't handed a brand-new column array on every render.
export function createColumns({
  onDelete,
}: {
  onDelete: (id: string) => void;
}) {
  return columnHelper.columns([
    columnHelper.display({
      id: "actions",
      cell: ({ row }) => (
        <UserRowActions user={row.original} onDelete={onDelete} />
      ),
    }),
    columnHelper.accessor("name", {
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    }),
    columnHelper.accessor("email", {
      header: "Email",
    }),
    columnHelper.accessor("role", {
      header: "Role",
      cell: ({ row }) => {
        const role = row.original.role;

        return <Badge variant={roleVariant[role]}>{role}</Badge>;
      },
    }),
    columnHelper.accessor("active", {
      header: "Access",
      cell: ({ row }) => {
        return row.original.active ? (
          <Badge variant="secondary">Active</Badge>
        ) : (
          <Badge variant="destructive">Revoked</Badge>
        );
      },
    }),
  ]);
}

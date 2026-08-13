"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { type DataTableFeatures } from "@/components/data-table/features";

import { CustomerRowActions } from "./row-actions";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Customers = {
  id: string;
  name: string;
  fullAddress: string;
  phone: string;
  email: string;
};

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, Customers>();

// A factory rather than a plain const, because the row actions need an
// `onDelete` callback from whoever owns the customer state. Call it inside a
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
        <CustomerRowActions customer={row.original} onDelete={onDelete} />
      ),
    }),
    columnHelper.accessor("name", {
      header: "Name",
    }),
    columnHelper.accessor("phone", {
      header: "Phone",
    }),
    columnHelper.accessor("email", {
      header: "Email",
    }),
    columnHelper.accessor("fullAddress", {
      header: "Full Address",
    }),
  ]);
}

"use client";

import * as React from "react";

import { DataTable } from "@/components/data-table/data-table";

import { createColumns, type Customers } from "./columns";

// The customers table owns its rows in client state so deleting one updates the
// view immediately. The page still fetches on the server and passes them in.
export function CustomersTable({ initialData }: { initialData: Customers[] }) {
  const [customers, setCustomers] = React.useState(initialData);

  const handleDelete = React.useCallback((id: string) => {
    // TODO: call a server action that persists this, then let the server
    // component's data be the source of truth again.
    setCustomers((current) => current.filter((customer) => customer.id !== id));
  }, []);

  const columns = React.useMemo(
    () => createColumns({ onDelete: handleDelete }),
    [handleDelete],
  );

  return (
    <DataTable
      columns={columns}
      data={customers}
      filterColumn="email"
      filterPlaceholder="Filter emails..."
    />
  );
}

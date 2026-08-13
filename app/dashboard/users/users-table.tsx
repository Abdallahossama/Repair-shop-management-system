"use client";

import * as React from "react";

import { DataTable } from "@/components/data-table/data-table";

import { createColumns, type Users } from "./columns";

// The users table owns its rows in client state so deleting one updates the
// view immediately. The page still fetches on the server and passes them in.
export function UsersTable({ initialData }: { initialData: Users[] }) {
  const [users, setUsers] = React.useState(initialData);

  const handleDelete = React.useCallback((id: string) => {
    // TODO: call a server action that persists this, then let the server
    // component's data be the source of truth again.
    setUsers((current) => current.filter((user) => user.id !== id));
  }, []);

  const columns = React.useMemo(
    () => createColumns({ onDelete: handleDelete }),
    [handleDelete],
  );

  return (
    <DataTable
      columns={columns}
      data={users}
      filterColumn="name"
      filterPlaceholder="Filter names..."
    />
  );
}

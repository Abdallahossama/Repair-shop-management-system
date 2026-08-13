"use client";

import * as React from "react";

import { DataTable } from "@/components/data-table/data-table";

import { createColumns, type Tickets } from "./columns";

// The tickets table owns its rows in client state so completing a ticket shows
// up immediately. The page still fetches on the server and passes them in.
export function TicketsTable({ initialData }: { initialData: Tickets[] }) {
  const [tickets, setTickets] = React.useState(initialData);

  const handleMarkAsDone = React.useCallback((id: string) => {
    // TODO: call a server action that persists this, then drop the local state
    // and let the server component's data be the source of truth again.
    setTickets((current) =>
      current.map((ticket) =>
        ticket.id === id
          ? { ...ticket, status: "COMPLETED" as const, updatedDate: new Date() }
          : ticket,
      ),
    );
  }, []);

  const handleDelete = React.useCallback((id: string) => {
    // TODO: call a server action that persists this, then let the server
    // component's data be the source of truth again.
    setTickets((current) => current.filter((ticket) => ticket.id !== id));
  }, []);

  const columns = React.useMemo(
    () => createColumns({ onMarkAsDone: handleMarkAsDone, onDelete: handleDelete }),
    [handleMarkAsDone, handleDelete],
  );

  return (
    <DataTable
      columns={columns}
      data={tickets}
      filterColumn="title"
      filterPlaceholder="Filter titles..."
    />
  );
}

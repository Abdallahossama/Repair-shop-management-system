"use client";

import * as React from "react";
import { CircleCheckBig, MoreHorizontal, Pencil, Trash2 } from "lucide-react";

import { DeleteConfirmDialog } from "@/components/data-table/delete-confirm-dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { type Tickets } from "./columns";

// The "…" overflow menu holds the secondary / destructive actions. Lives in the
// first column. Delete goes through a confirm dialog before it fires.
export function TicketRowActions({
  ticket,
  onDelete,
}: {
  ticket: Tickets;
  onDelete: (id: string) => void;
}) {
  const [confirmDeleteOpen, setConfirmDeleteOpen] = React.useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="ghost" className="h-8 w-8 p-0" />}
        >
          <MoreHorizontal className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>
            <Pencil />
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            variant="destructive"
            onClick={() => setConfirmDeleteOpen(true)}
          >
            <Trash2 />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeleteConfirmDialog
        open={confirmDeleteOpen}
        onOpenChange={setConfirmDeleteOpen}
        entity="ticket"
        label={ticket.title}
        onConfirm={() => onDelete(ticket.id)}
      />
    </>
  );
}

// The primary action gets its own visible button, guarded by an "are you sure?"
// dialog. Lives in the last column. Kept always rendered (disabled once
// COMPLETED) so the column width doesn't shift when a ticket is completed.
export function TicketMarkDoneButton({
  ticket,
  onMarkAsDone,
}: {
  ticket: Tickets;
  onMarkAsDone: (id: string) => void;
}) {
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const alreadyDone = ticket.status === "COMPLETED";

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        disabled={alreadyDone}
        onClick={() => setConfirmOpen(true)}
      >
        <CircleCheckBig data-icon="inline-start" />
        {alreadyDone ? "Done" : "Mark done"}
      </Button>

      {/* Controlled, and a sibling of the button rather than nested in a menu:
          keeping the dialog outside any menu means nothing unmounts it before it
          can mount and take focus. */}
      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              <CircleCheckBig />
            </AlertDialogMedia>
            <AlertDialogTitle>Mark this ticket as done?</AlertDialogTitle>
            <AlertDialogDescription>
              “{ticket.title}” will be marked COMPLETED and its updated date set
              to today. You can reopen it later if the work isn’t finished.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                onMarkAsDone(ticket.id);
                setConfirmOpen(false);
              }}
            >
              <CircleCheckBig />
              Mark as done
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

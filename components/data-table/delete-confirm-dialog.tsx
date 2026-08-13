"use client";

import { Trash2 } from "lucide-react";

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

// Shared "are you sure?" prompt for destructive row deletes across every table.
// Controlled by the caller and rendered as a sibling of the "…" menu (never
// nested inside it): a menu unmounts its content when an item is chosen, which
// would tear a nested dialog down before it could mount and take focus.
export function DeleteConfirmDialog({
  open,
  onOpenChange,
  entity,
  label,
  onConfirm,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  // Noun for the row being deleted, e.g. "customer", "ticket", "user".
  entity: string;
  // What identifies the row — a name or title — echoed back so the user can
  // confirm they're deleting the one they meant to.
  label: string;
  onConfirm: () => void;
}) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <Trash2 />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete this {entity}?</AlertDialogTitle>
          <AlertDialogDescription>
            “{label}” will be permanently deleted. This can’t be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={() => {
              onConfirm();
              onOpenChange(false);
            }}
          >
            <Trash2 />
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

"use client";

import { StickyNote } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

// Notes are free text and too long to sit inline in a table row, so every table
// that has them renders this button instead and pops the full note on click.
// `title` is whatever identifies the row — a customer name, a ticket title.
export function NotesCell({
  title,
  notes,
}: {
  title: string;
  notes: string;
}) {
  if (!notes) {
    return <span className="text-muted-foreground">—</span>;
  }

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <StickyNote data-icon="inline-start" />
        Notes
      </PopoverTrigger>
      <PopoverContent align="start" className="w-80">
        <PopoverHeader>
          <PopoverTitle>{title}</PopoverTitle>
          <PopoverDescription className="whitespace-pre-wrap">
            {notes}
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}

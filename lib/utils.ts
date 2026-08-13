import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Pinned to UTC on purpose: table columns are client components that also render
// during SSR, so a timezone-dependent format would produce a different string on
// the server than in the browser and trip a hydration mismatch.
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
})

export function formatDate(date: Date) {
  return dateFormatter.format(date)
}

import { Bell, Store, Tickets, User } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
const TopNavBar = () => {
  return (
    <nav className="px-5 flex justify-between py-5 border-b-1 mb-7">
      <h1 className="text-2xl font-semibold">Repair Shop</h1>
      <div className="flex gap-5 justify-center items-center">
        <Link href={"/dashboard/customers"}>
          <Store />
        </Link>
        <Link href={"/dashboard/tickets"}>
          <Tickets />
        </Link>
        <Link href={"/dashboard/users"}>
          <User />
        </Link>
        |
        <Bell />
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="link" />}>
            <Avatar size="lg">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>My Account</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default TopNavBar;

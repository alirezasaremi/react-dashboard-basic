import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BadgeDollarSign,
  LifeBuoy,
} from "lucide-react";
import { NavLink } from "../types/navLink";

export const dashboard: NavLink = {
  id: 1,
  lable: "Dashboard",
  icon: LayoutDashboard,
  href: "/",
};

export const users: NavLink = { id: 2, lable: "Users", icon: Users, href: "/" };
export const products: NavLink = {
  id: 3,
  lable: "Products",
  icon: ShoppingCart,
  href: "/",
};
export const transactions: NavLink = {
  id: 4,
  lable: "Transactions",
  icon: BadgeDollarSign,
  href: "/",
};
export const supports: NavLink = {
  id: 5,
  lable: "Supports",
  icon: LifeBuoy,
  href: "/",
};

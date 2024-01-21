import { LucideIcon } from "lucide-react";

export type NavLink = {
  readonly id: number;
  lable: string;
  icon: LucideIcon | string;
  href: string;

};

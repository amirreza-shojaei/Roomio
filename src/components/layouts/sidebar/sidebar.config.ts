
import {
  LayoutDashboard,
  UserRound,
  Search,
  BedDouble,
  MessageSquare,
  Star,
  ArrowLeftRight,
  RobotArm,
  type LucideIcon,
} from "lucide-react";

export interface SidebarItemType {
  title: string;
  href: string;
  icon: LucideIcon;
}

export interface SidebarGroupType {
  title: string;
  items: SidebarItemType[];
}

export const studentSidebarItems: SidebarGroupType[] = [
  {
    title: "منوی اصلی",
    items: [
      {
        title: "داشبورد",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "پروفایل من",
        href: "/profile",
        icon: UserRound,
      },
      {
        title: "جستجو و انتخاب اتاق",
        href: "/rooms",
        icon: Search,
      },
           {
        title: "بخش هوشمند",
        href: "/ai",
        icon: RobotArm,
      },
      {
        title: "اتاق و تخت من",
        href: "/my-room",
        icon: BedDouble,
      },
    ],
  },

  {
    title: "ارتباطات",
    items: [
      {
        title: "گفتگوی اتاق",
        href: "/chat",
        icon: MessageSquare,
      },
      {
        title: "نظرات و امتیازها",
        href: "/reviews",
        icon: Star,
      },
    ],
  },

  {
    title: "درخواست‌ها",
    items: [
      {
        title: "درخواست جابجایی",
        href: "/requests",
        icon: ArrowLeftRight,
      },
    ],
  },
];

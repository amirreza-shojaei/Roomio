
"use client";

import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import HeaderActions from "./headerActions";

interface HeaderProps {
  onMenuClick?: () => void;
}

const pageTitles: Record<string, string> = {
  "/dashboard": "داشبورد",
  "/profile": "پروفایل من",
  "/rooms": "جستجو و انتخاب اتاق",
  "/my-room": "اتاق و تخت من",
  "/roommates": "هم‌اتاقی‌های من",
  "/chat": "گفتگوی اتاق",
  "/reviews": "نظرات و امتیازها",
  "/requests": "درخواست جابجایی",
};

export default function Header({ onMenuClick }: HeaderProps) {
  const pathname = usePathname();

  const title =
    pageTitles[pathname] ?? "Roomio";

  return (
    <header className="
      sticky top-0 z-30
      flex h-20 shrink-0 items-center justify-between
      border-b border-border
      bg-background
      px-4 sm:px-6 lg:px-8
    ">

      {/* Right Side */}
      <div className="flex min-w-0 items-center gap-3">

        <button
          onClick={onMenuClick}
          className="
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-xl border border-border
            text-muted-foreground
            transition-colors hover:bg-card-secondary
            lg:hidden
          "
          aria-label="باز کردن منو"
        >
          <Menu size={20} />
        </button>

        <div className="min-w-0">

          <h1 className="
            truncate text-lg font-bold
            text-foreground sm:text-xl
          ">
            {title}
          </h1>

        </div>
      </div>

      {/* Left Side */}
      <HeaderActions />

    </header>
  );
}

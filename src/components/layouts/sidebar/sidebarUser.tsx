"use client";

import { ChevronLeft, LogOut, UserRound, Settings } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface SidebarUserProps {
  name?: string;
  role?: string;
  avatar?: string;
}

export default function SidebarUser({
  name = "علی احمدی",
  role = "دانشجوی کارشناسی",
}: SidebarUserProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-border p-3">
      <div className="relative">
        <button
          className="
            flex w-full items-center gap-3
            rounded-xl border border-border
            bg-card p-3 text-right
            transition-colors hover:bg-card-secondary
          "
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary font-bold">
            {name.charAt(0)}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-foreground">
              {name}
            </p>
            <p className="truncate text-[11px] text-muted-foreground">
              {role}
            </p>
          </div>

          <ChevronLeft size={17} className="shrink-0 text-muted-foreground" />
        </button>

        {open && (
          <div
            className="
              absolute bottom-full right-0 mb-2 z-50
              w-52 rounded-xl border border-border
              bg-card p-2 shadow-xl
            "
          >
            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-card-secondary"
            >
              <UserRound size={17} />
              پروفایل من
            </Link>

            <Link
              href="/settings"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-card-secondary"
            >
              <Settings size={17} />
              تنظیمات
            </Link>

            <Link
              href="/Logout"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-card-secondary"
            >
              <LogOut size={17} className="text-red-800" />
              خروج
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
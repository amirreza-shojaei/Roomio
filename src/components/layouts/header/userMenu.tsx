
"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, UserRound, Settings } from "lucide-react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="
          flex items-center gap-2 rounded-xl
          p-1.5 transition-colors
          hover:bg-card-secondary
        "
      >
        <span className="hidden text-sm font-medium text-foreground sm:block">
          علی احمدی
        </span>

        <span className="
          flex h-9 w-9 items-center justify-center
          rounded-xl bg-primary text-primary-foreground
          font-bold
        ">
          ع
        </span>

        <ChevronDown
          size={15}
          className="hidden text-muted-foreground sm:block"
        />
      </button>

      {open && (
        <div className="
          absolute left-0 top-12 z-50
          w-52 rounded-xl border border-border
          bg-card p-2 shadow-xl
        ">

          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="
              flex items-center gap-3 rounded-lg
              px-3 py-2.5 text-sm text-foreground
              hover:bg-card-secondary
            "
          >
            <UserRound size={17} />
            پروفایل من
          </Link>

          <Link
            href="/settings"
            onClick={() => setOpen(false)}
            className="
              flex items-center gap-3 rounded-lg
              px-3 py-2.5 text-sm text-foreground
              hover:bg-card-secondary
            "
          >
            <Settings size={17} />
            تنظیمات
          </Link>

        </div>
      )}

    </div>
  );
}

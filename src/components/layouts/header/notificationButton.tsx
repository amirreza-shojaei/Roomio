
"use client";

import { useState } from "react";
import { Bell, Check } from "lucide-react";

export default function NotificationButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        aria-label="اعلان‌ها"
        aria-expanded={open}
        className="
          relative flex h-10 w-10 items-center justify-center
          rounded-xl border border-border
          bg-card text-muted-foreground
          transition-colors hover:bg-card-secondary
        "
      >
        <Bell size={19} />

        <span className="
          absolute right-2 top-2
          h-2 w-2 rounded-full
          bg-red-500 ring-2 ring-card
        " />
      </button>

      {open && (
        <div className="
          absolute left-0 top-12 z-50
          w-72 rounded-xl border border-border
          bg-card p-4 shadow-xl
        ">

          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold text-foreground">
              اعلان‌ها
            </h3>

            <button
              onClick={() => setOpen(false)}
              aria-label="بستن اعلان‌ها"
              className="text-xs text-muted-foreground"
            >
              بستن
            </button>
          </div>

          <div className="
            flex flex-col items-center gap-2
            py-6 text-muted-foreground
          ">
            <Check size={24} />
            <p className="text-sm">
              فعلاً اعلان جدیدی ندارید.
            </p>
          </div>

        </div>
      )}

    </div>
  );
}

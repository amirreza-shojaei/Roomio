import {
  ArrowLeft,
  BedDouble,
  Building2,
  DoorOpen,
  Layers3,
} from "lucide-react";

import type { RoomAssignment } from "../types/profile.types";

interface ResidenceCardProps {
  residence: RoomAssignment | null;
  onViewRoom: () => void;
}

export default function ResidenceCard({
  residence,
  onViewRoom,
}: ResidenceCardProps) {
  if (!residence) {
    return (
      <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Building2 size={21} />
          </span>

          <div>
            <h2 className="text-sm font-bold text-foreground">
              اطلاعات اقامت
            </h2>

            <p className="mt-1 text-[11px] text-muted-foreground">
              محل اقامت فعلی شما
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-card-secondary p-4 text-center">
          <p className="text-xs text-muted-foreground">
            هنوز اتاقی برای شما ثبت نشده است.
          </p>
        </div>

        <button
          type="button"
          onClick={onViewRoom}
          className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-primary/20 text-xs font-semibold text-primary transition hover:bg-primary hover:text-white"
        >
          مشاهده اتاق‌ها
          <ArrowLeft size={15} />
        </button>
      </section>
    );
  }

  const rows = [
    {
      label: "ساختمان",
      value: `ساختمان شماره ${residence.building}`,
      icon: Building2,
    },
    {
      label: "طبقه",
      value: `طبقه ${residence.floor}`,
      icon: Layers3,
    },
    {
      label: "اتاق",
      value: `اتاق ${residence.room}`,
      icon: DoorOpen,
    },
    {
      label: "تخت",
      value: `تخت شماره ${residence.bed}`,
      icon: BedDouble,
    },
  ];

  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-sm font-bold text-foreground">
            اطلاعات اقامت
          </h2>

          <p className="mt-1 text-[11px] text-muted-foreground">
            محل اقامت فعلی شما
          </p>
        </div>

        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Building2 size={20} />
        </span>
      </div>

      {/* Residence Summary */}
      <div className="flex items-center gap-3 rounded-xl bg-card-secondary p-3">
        <DoorOpen size={27} className="shrink-0 text-primary" />

        <div className="min-w-0 flex-1">
          <p className="text-[11px] text-muted-foreground">
            ساختمان شماره {residence.building}
          </p>

          <p className="mt-1 text-sm font-bold text-foreground">
            اتاق {residence.room}
          </p>
        </div>

        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
            residence.status === "active"
              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
          }`}
        >
          {residence.status === "active" ? "فعال" : "غیرفعال"}
        </span>
      </div>

      {/* Details */}
      <div className="mt-3">
        {rows.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center justify-between gap-3 border-b border-border py-3 last:border-b-0"
          >
            <span className="flex items-center gap-2 text-xs text-muted-foreground">
              <Icon size={15} />
              {label}
            </span>

            <strong className="text-xs font-semibold text-foreground">
              {value}
            </strong>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onViewRoom}
        className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-primary/20 text-xs font-semibold text-primary transition hover:bg-primary hover:text-white"
      >
        مشاهده اتاق من
        <ArrowLeft size={15} />
      </button>
    </section>
  );
}
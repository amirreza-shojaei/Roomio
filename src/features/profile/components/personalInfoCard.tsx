import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  Mail,
  Phone,
  UserRound,
  Users,
  ClipboardList,
  Pencil,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";
import type { ProfileData } from "../types/profile.types";

interface PersonalInfoCardProps {
  profile: ProfileData;
  onEdit: () => void;
}

type InfoKey =
  | "name"
  | "studentId"
  | "email"
  | "phone"
  | "major"
  | "degree"
  | "gender"
  | "entryYear";

const infoRows: {
  label: string;
  key: InfoKey;
  icon: LucideIcon;
}[] = [
  { label: "نام و نام خانوادگی", key: "name", icon: UserRound },
  { label: "شماره دانشجویی", key: "studentId", icon: ClipboardList },
  { label: "ایمیل دانشگاهی", key: "email", icon: Mail },
  { label: "شماره تماس", key: "phone", icon: Phone },
  { label: "رشته تحصیلی", key: "major", icon: BookOpen },
  { label: "مقطع تحصیلی", key: "degree", icon: GraduationCap },
  { label: "جنسیت", key: "gender", icon: Users },
  { label: "سال ورود به دانشگاه", key: "entryYear", icon: CalendarDays },
];

export default function PersonalInfoCard({
  profile,
  onEdit,
}: PersonalInfoCardProps) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-foreground">
            اطلاعات شخصی
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            اطلاعات هویتی و دانشگاهی شما
          </p>
        </div>

        <button
          type="button"
          onClick={onEdit}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-primary transition hover:bg-card-secondary"
        >
          <Pencil size={14} />
          ویرایش
        </button>
      </div>

      {/* Information Grid */}
      <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-border sm:grid-cols-2">
        {infoRows.map(({ label, key, icon: Icon }) => (
          <div
            key={key}
            className="flex min-h-[76px] items-center gap-3 border-b border-border p-3.5 last:border-b-0 sm:odd:border-l sm:nth-last-[-n+2]:border-b-0"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card-secondary text-primary">
              <Icon size={18} />
            </div>

            <div className="min-w-0">
              <p className="mb-1 text-[11px] text-muted-foreground">
                {label}
              </p>

              <p
                dir={key === "email" || key === "phone" ? "ltr" : "rtl"}
                className={`break-words text-sm font-semibold text-foreground ${
                  key === "email" || key === "phone"
                    ? "text-right"
                    : ""
                }`}
              >
                {profile[key] || "ثبت نشده"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
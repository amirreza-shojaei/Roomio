import {
  BookOpen,
  Check,
  Clock3,
  Eye,
  Moon,
  Cigarette,
  Sparkles,
  Star,
  Sun,
  Thermometer,
  UserPlus,
  Users,
  Volume2,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";
import type {
  LifestyleData,
  LifestylePreference,
} from "../types/profile.types";

interface LifestylePreferencesProps {
  lifestyle: LifestyleData;
}

const iconMap: Record<string, LucideIcon> = {
  moon: Moon,
  clock: Clock3,
  sparkles: Sparkles,
  "volume-2": Volume2,
  "book-open": BookOpen,
  users: Users,
  "user-plus": UserPlus,
};

function PreferenceCard({
  preference,
}: {
  preference: LifestylePreference;
}) {
  const Icon = iconMap[preference.icon] ?? Star;

  return (
    <div className="rounded-xl border border-border bg-card-secondary/40 p-4">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon size={18} />
        </span>

        <h3 className="text-xs font-bold text-foreground">
          {preference.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {preference.options.map((option) => {
          const selected = option === preference.selected;

          return (
            <span
              key={option}
              className={`inline-flex min-h-7 items-center gap-1 rounded-lg border px-2.5 py-1 text-[11px] ${
                selected
                  ? "border-primary/30 bg-primary/10 font-semibold text-primary"
                  : "border-border bg-card text-muted-foreground"
              }`}
            >
              {selected && <Check size={12} />}
              {option}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function LifestylePreferences({
  lifestyle,
}: LifestylePreferencesProps) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      {/* Header */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-foreground">
            ویژگی‌های شخصیتی و سبک زندگی
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            ترجیحات شما برای تجربه بهتر زندگی در خوابگاه
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-lg bg-card-secondary px-2.5 py-2 text-[10px] text-muted-foreground">
          <Eye size={14} />
          قابل مشاهده برای هم‌اتاقی‌ها
        </span>
      </div>

      {/* Preferences */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {lifestyle.preferences.map((preference) => (
          <PreferenceCard
            key={preference.key}
            preference={preference}
          />
        ))}

        {/* Smoking */}
        <div className="rounded-xl border border-border bg-card-secondary/40 p-4">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Cigarette size={18} />
            </span>

            <h3 className="text-xs font-bold text-foreground">
              مصرف سیگار یا قلیان
            </h3>
          </div>

          <span className="inline-flex items-center gap-1 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary">
            <Check size={12} />
            {lifestyle.smoking}
          </span>
        </div>

        {/* Environmental Sensitivities */}
        <div className="rounded-xl border border-border bg-card-secondary/40 p-4 sm:col-span-2">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Eye size={18} />
            </span>

            <h3 className="text-xs font-bold text-foreground">
              حساسیت‌های محیطی
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <SensitivityItem
              icon={Sun}
              title="حساسیت به نور"
              value={lifestyle.sensitivities.light}
            />

            <SensitivityItem
              icon={Sparkles}
              title="حساسیت به بو"
              value={lifestyle.sensitivities.smell}
            />

            <SensitivityItem
              icon={Thermometer}
              title="حساسیت به دما"
              value={lifestyle.sensitivities.temperature}
            />
          </div>
        </div>

        {/* Interests */}
        <div className="rounded-xl border border-border bg-card-secondary/40 p-4 sm:col-span-2">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Star size={18} />
            </span>

            <h3 className="text-xs font-bold text-foreground">
              علایق و سرگرمی‌ها
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {lifestyle.interests.length > 0 ? (
              lifestyle.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-lg bg-primary/10 px-3 py-2 text-[11px] font-semibold text-primary"
                >
                  {interest}
                </span>
              ))
            ) : (
              <p className="text-xs text-muted-foreground">
                هنوز علاقه‌مندی‌ای ثبت نشده است.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SensitivityItem({
  icon: Icon,
  title,
  value,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-lg bg-card px-3 py-3">
      <span className="flex items-center gap-2 text-[11px] text-muted-foreground">
        <Icon size={15} className="text-primary" />
        {title}
      </span>

      <strong className="text-xs text-foreground">{value}</strong>
    </div>
  );
}
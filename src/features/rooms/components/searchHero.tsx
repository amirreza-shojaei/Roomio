
import { Search, Sparkles, X } from "lucide-react";
import { toPersianNumber } from "../utils/room.utils";

interface SearchHeroProps {
  search: string;
  onSearchChange: (value: string) => void;
  totalRooms: number;
  totalBuildings: number;
}

export default function SearchHero({
  search,
  onSearchChange,
  totalRooms,
  totalBuildings,
}: SearchHeroProps) {
  return (
    <section className="
      relative overflow-hidden rounded-3xl
      border border-border bg-card
      p-5 sm:p-7 lg:p-9
    ">
      <div className="
        pointer-events-none absolute -left-16 -top-20
        h-64 w-64 rounded-full
        bg-primary/5 blur-3xl
      " />

      <div className="relative max-w-2xl">
        <div className="
          mb-4 inline-flex items-center gap-2
          rounded-full bg-primary/10
          px-3 py-1.5 text-xs font-medium text-primary
        ">
          <Sparkles size={15} />
          یافتن فضای مناسب برای شما
        </div>

        <h1 className="
          text-2xl font-extrabold text-foreground
          sm:text-3xl
        ">
          جستجوی اتاق
        </h1>

        <p className="
          mt-3 max-w-xl text-sm leading-7
          text-muted-foreground sm:text-base
        ">
          میان اتاق‌های موجود جستجو کنید و بهترین گزینه
          را براساس نیازها و سبک زندگی خود بیابید.
        </p>
      </div>

      <div className="
        relative mt-6 flex h-14 items-center gap-3
        rounded-2xl border border-border
        bg-background px-4
        transition-colors focus-within:border-primary
      ">
        <Search className="shrink-0 text-muted-foreground" size={21} />

        <input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="شماره اتاق یا نام ساختمان را جستجو کنید..."
          className="
            h-full min-w-0 flex-1 bg-transparent
            text-sm text-foreground outline-none
            placeholder:text-muted-foreground/70
          "
        />

        {search && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            aria-label="پاک کردن جستجو"
            className="
              rounded-lg p-2 text-muted-foreground
              hover:bg-card-secondary
            "
          >
            <X size={17} />
          </button>
        )}

        <span className="
          hidden rounded-lg bg-primary px-4 py-2
          text-xs font-semibold text-white sm:block
        ">
          جستجو
        </span>
      </div>

      <div className="
        relative mt-5 flex flex-wrap items-center
        gap-x-6 gap-y-3 text-xs text-muted-foreground
      ">
        <span className="flex items-center gap-2">
          <strong className="text-lg text-primary">
            {toPersianNumber(totalRooms)}
          </strong>
          اتاق قابل رزرو
        </span>

        <span className="hidden h-5 w-px bg-border sm:block" />

        <span className="flex items-center gap-2">
          <strong className="text-lg text-primary">
            {toPersianNumber(totalBuildings)}
          </strong>
          ساختمان فعال
        </span>
      </div>
    </section>
  );
}

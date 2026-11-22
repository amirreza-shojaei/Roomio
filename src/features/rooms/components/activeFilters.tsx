
import { X } from "lucide-react";

import type { RoomFiltersState } from "../types/room.types";
import { toPersianNumber } from "../utils/room.utils";

interface ActiveFiltersProps {
  filters: RoomFiltersState;
  updateFilter: <K extends keyof RoomFiltersState>(
    key: K,
    value: RoomFiltersState[K]
  ) => void;
}

export default function ActiveFilters({
  filters,
  updateFilter,
}: ActiveFiltersProps) {
  const active: {
    key: keyof RoomFiltersState;
    label: string;
    value: RoomFiltersState[keyof RoomFiltersState];
  }[] = [];

  if (filters.building !== "all") {
    active.push({
      key: "building",
      label: filters.building,
      value: "all",
    });
  }

  if (filters.floor !== "all") {
    active.push({
      key: "floor",
      label: `طبقه ${toPersianNumber(filters.floor)}`,
      value: "all",
    });
  }

  if (filters.capacity !== null) {
    active.push({
      key: "capacity",
      label: `${toPersianNumber(filters.capacity)} تخته`,
      value: null,
    });
  }

  if (filters.status !== "all") {
    active.push({
      key: "status",
      label: filters.status === "available" ? "کاملاً خالی" : "نیمه‌پر",
      value: "all",
    });
  }

  if (filters.balcony) {
    active.push({
      key: "balcony",
      label: "دارای بالکن",
      value: false,
    });
  }

  if (filters.privateBath) {
    active.push({
      key: "privateBath",
      label: "سرویس اختصاصی",
      value: false,
    });
  }

  if (active.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs text-muted-foreground">
        فیلترهای فعال:
      </span>

      {active.map((filter) => (
        <button
          key={filter.key}
          type="button"
          onClick={() =>
            updateFilter(filter.key, filter.value as never)
          }
          className="
            inline-flex items-center gap-1.5
            rounded-full border border-primary/20
            bg-primary/5 px-3 py-1.5
            text-[11px] font-medium text-primary
            transition-colors hover:bg-primary/10
          "
        >
          {filter.label}
          <X size={12} />
        </button>
      ))}
    </div>
  );
}

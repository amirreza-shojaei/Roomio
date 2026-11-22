
import {
  Building2,
  Layers,
  Filter,
  X,
} from "lucide-react";

import FilterSelect from "./filterSelect";
import FilterToggle from "./filterToggle";

import type { RoomFiltersState } from "../types/room.types";
import { toPersianNumber } from "../utils/room.utils";

interface RoomFiltersProps {
  filters: RoomFiltersState;
  updateFilter: <K extends keyof RoomFiltersState>(
    key: K,
    value: RoomFiltersState[K]
  ) => void;
  clearFilters: () => void;
  activeFilterCount: number;
  resultCount: number;
  isMobileOpen: boolean;
  onApply: () => void;
}

export default function RoomFilters({
  filters,
  updateFilter,
  clearFilters,
  activeFilterCount,
  resultCount,
  isMobileOpen,
  onApply,
}: RoomFiltersProps) {
  return (
    <aside className={`
      ${isMobileOpen ? "block" : "hidden"}
      lg:block
      w-full shrink-0 
    `}>
      <div className="
        overflow-hidden rounded-2xl
        border border-border bg-card 
      ">
        <div className="
          flex items-center justify-between
          border-b border-border p-4
        ">
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-primary" />

            <h2 className="font-bold text-foreground">
              فیلترها
            </h2>

            {activeFilterCount > 0 && (
              <span className="
                flex h-5 min-w-5 items-center justify-center
                rounded-full bg-primary px-1
                text-[10px] font-bold text-white
              ">
                {toPersianNumber(activeFilterCount)}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={clearFilters}
            className="
              text-xs text-muted-foreground
              transition-colors hover:text-primary
            "
          >
            پاک کردن همه
          </button>
        </div>

        <div className="space-y-5 p-4">

          <FilterSelect
            label="ساختمان"
            icon={<Building2 size={15} />}
            value={filters.building}
            onChange={(value) => updateFilter("building", value)}
          >
            <option value="all">همه ساختمان‌ها</option>
            <option value="ساختمان ابن‌سینا">ساختمان ابن‌سینا</option>
            <option value="ساختمان رازی">ساختمان رازی</option>
            <option value="ساختمان خوارزمی">ساختمان خوارزمی</option>
            <option value="ساختمان فارابی">ساختمان فارابی</option>
          </FilterSelect>

          <FilterSelect
            label="طبقه"
            icon={<Layers size={15} />}
            value={filters.floor}
            onChange={(value) => updateFilter("floor", value)}
          >
            <option value="all">همه طبقات</option>
            {[1, 2, 3, 4, 5].map((floor) => (
              <option key={floor} value={floor}>
                طبقه {toPersianNumber(floor)}
              </option>
            ))}
          </FilterSelect>

          <fieldset>
            <legend className="
              mb-3 text-xs font-semibold text-foreground
            ">
              ظرفیت اتاق
            </legend>

            <div className="flex gap-2">
              {[2, 3, 4].map((capacity) => {
                const active = filters.capacity === capacity;

                return (
                  <button
                    key={capacity}
                    type="button"
                    aria-pressed={active}
                    onClick={() =>
                      updateFilter(
                        "capacity",
                        active ? null : capacity
                      )
                    }
                    className={`
                      flex-1 rounded-lg border px-2 py-2
                      text-xs font-medium transition-colors
                      ${
                        active
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-background text-muted-foreground hover:border-primary"
                      }
                    `}
                  >
                    {toPersianNumber(capacity)} تخته
                  </button>
                );
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="
              mb-3 text-xs font-semibold text-foreground
            ">
              وضعیت اتاق
            </legend>

            <div className="space-y-3">
              {[
                { value: "all", label: "همه اتاق‌ها" },
                { value: "available", label: "کاملاً خالی" },
                { value: "partial", label: "نیمه‌پر" },
              ].map((item) => (
                <label
                  key={item.value}
                  className="
                    flex cursor-pointer items-center gap-2
                    text-sm text-muted-foreground
                  "
                >
                  <input
                    type="radio"
                    name="room-status"
                    checked={filters.status === item.value}
                    onChange={() =>
                      updateFilter(
                        "status",
                        item.value as RoomFiltersState["status"]
                      )
                    }
                    className="accent-[var(--primary)]"
                  />

                  {item.label}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="border-t border-border pt-2">
            <FilterToggle
              label="بالکن"
              detail="فقط اتاق‌های دارای بالکن"
              checked={filters.balcony}
              onChange={(value) => updateFilter("balcony", value)}
            />

            <div className="border-t border-border">
              <FilterToggle
                label="سرویس اختصاصی"
                detail="سرویس داخل اتاق"
                checked={filters.privateBath}
                onChange={(value) => updateFilter("privateBath", value)}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-border p-4 lg:hidden">
          <button
            type="button"
            onClick={onApply}
            className="
              w-full rounded-xl bg-primary
              px-4 py-3 text-sm font-semibold
              text-white transition-opacity hover:opacity-90
            "
          >
            مشاهده {toPersianNumber(resultCount)} نتیجه
          </button>
        </div>
      </div>
    </aside>
  );
}

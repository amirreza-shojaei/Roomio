
import { Grid2X2, List } from "lucide-react";

import type {
  RoomSortOption,
  RoomView,
} from "../types/room.types";

import { toPersianNumber } from "../utils/room.utils";

interface ResultsToolbarProps {
  count: number;
  sortBy: RoomSortOption;
  setSortBy: (value: RoomSortOption) => void;
  view: RoomView;
  setView: (value: RoomView) => void;
}

export default function ResultsToolbar({
  count,
  sortBy,
  setSortBy,
  view,
  setView,
}: ResultsToolbarProps) {
  return (
    <div className="
      flex flex-col gap-4
      sm:flex-row sm:items-center sm:justify-between
    ">
      <div>
        <h2 className="font-bold text-foreground">
          {toPersianNumber(count)} اتاق
        </h2>

        <p className="mt-1 text-xs text-muted-foreground">
          متناسب با جستجوی شما پیدا شد
        </p>
      </div>

      <div className="
        flex items-center justify-between gap-3
        sm:justify-end
      ">
        <label className="
          flex min-w-0 items-center gap-2
          text-xs text-muted-foreground
        ">
          <span className="shrink-0">مرتب‌سازی:</span>

          <select
            value={sortBy}
            onChange={(event) =>
              setSortBy(event.target.value as RoomSortOption)
            }
            className="
              min-w-0 bg-transparent py-2
              text-xs font-semibold text-gray-400
              outline-none 
            "
          >
            <option value="compatibility" >بیشترین سازگاری</option>
            <option value="floor">طبقه</option>
            <option value="capacity">ظرفیت</option>
            <option value="newest">جدیدترین</option>
          </select>
        </label>

        <div className="
          flex shrink-0 rounded-xl border
          border-border bg-card p-1
        ">
          <button
            type="button"
            aria-label="نمایش شبکه‌ای"
            aria-pressed={view === "grid"}
            onClick={() => setView("grid")}
            className={`
              rounded-lg p-2 transition-colors
              ${
                view === "grid"
                  ? "bg-primary text-white"
                  : "text-muted-foreground hover:bg-card-secondary"
              }
            `}
          >
            <Grid2X2 size={17} />
          </button>

          <button
            type="button"
            aria-label="نمایش فهرستی"
            aria-pressed={view === "list"}
            onClick={() => setView("list")}
            className={`
              rounded-lg p-2 transition-colors
              ${
                view === "list"
                  ? "bg-primary text-white"
                  : "text-muted-foreground hover:bg-card-secondary"
              }
            `}
          >
            <List size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

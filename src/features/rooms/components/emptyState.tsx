
import { SearchX } from "lucide-react";

interface EmptyStateProps {
  onClear: () => void;
}

export default function EmptyState({
  onClear,
}: EmptyStateProps) {
  return (
    <div className="
      flex min-h-[360px] flex-col
      items-center justify-center
      rounded-2xl border border-dashed
      border-border bg-card px-5 py-10
      text-center
    ">
      <div className="
        flex h-20 w-20 items-center
        justify-center rounded-3xl
        bg-primary/10 text-primary
      ">
        <SearchX size={36} />
      </div>

      <h3 className="
        mt-6 text-lg font-bold text-foreground
      ">
        اتاقی با این مشخصات پیدا نشد
      </h3>

      <p className="
        mt-2 max-w-sm text-sm leading-7
        text-muted-foreground
      ">
        فیلترها را کمی تغییر دهید یا عبارت دیگری
        را برای جستجو امتحان کنید.
      </p>

      <button
        type="button"
        onClick={onClear}
        className="
          mt-6 rounded-xl bg-primary
          px-5 py-3 text-sm font-semibold
          text-white transition-opacity
          hover:opacity-90
        "
      >
        پاک کردن فیلترها
      </button>
    </div>
  );
}

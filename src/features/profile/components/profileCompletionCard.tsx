import { ArrowLeft, ClipboardCheck } from "lucide-react";

interface ProfileCompletionCardProps {
  completion: number;
  onEdit: () => void;
}

export default function ProfileCompletionCard({
  completion,
  onEdit,
}: ProfileCompletionCardProps) {
  const percentage = Math.min(100, Math.max(0, completion));

  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <ClipboardCheck size={21} />
        </span>

        <strong className="text-2xl font-extrabold text-primary">
          {percentage.toLocaleString("fa-IR")}٪
        </strong>
      </div>

      <h2 className="text-sm font-bold text-foreground">
        تکمیل پروفایل
      </h2>

      <p className="mt-2 text-xs leading-7 text-muted-foreground">
        با تکمیل اطلاعات شخصی و ترجیحات خود، به پیدا کردن هم‌اتاقی سازگارتر کمک کنید.
      </p>

      {/* Progress */}
      <div
        className="mt-4 h-2 overflow-hidden rounded-full bg-card-secondary"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="درصد تکمیل پروفایل"
      >
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-2 flex items-center justify-between text-[11px]">
        <span className="text-muted-foreground">میزان تکمیل</span>

        <span className="font-semibold text-foreground">
          {percentage.toLocaleString("fa-IR")} از ۱۰۰
        </span>
      </div>

      <button
        type="button"
        onClick={onEdit}
        className="mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-primary/20 text-xs font-semibold text-primary transition hover:bg-primary hover:text-white"
      >
        تکمیل اطلاعات
        <ArrowLeft size={15} />
      </button>
    </section>
  );
}
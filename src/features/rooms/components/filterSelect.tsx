
import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface FilterSelectProps {
  label: string;
  icon: ReactNode;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}

export default function FilterSelect({
  label,
  icon,
  value,
  onChange,
  children,
}: FilterSelectProps) {
  return (
    <label className="block">
      <span className="
        mb-2 flex items-center gap-2
        text-xs font-semibold text-foreground
      ">
        <span className="text-muted-foreground">
          {icon}
        </span>
        {label}
      </span>

      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="
            h-11 w-full appearance-none
            rounded-xl border border-border
            bg-background px-3 pl-9
            text-sm text-foreground outline-none
            transition-colors focus:border-primary
          "
        >
          {children}
        </select>

        <ChevronDown
          size={15}
          className="
            pointer-events-none absolute left-3
            top-1/2 -translate-y-1/2
            text-muted-foreground
          "
        />
      </div>
    </label>
  );
}


interface FilterToggleProps {
  label: string;
  detail: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function FilterToggle({
  label,
  detail,
  checked,
  onChange,
}: FilterToggleProps) {
  return (
    <label className="
      flex cursor-pointer items-center
      justify-between gap-3 py-3
    ">
      <span>
        <span className="
          block text-sm font-semibold text-foreground
        ">
          {label}
        </span>

        <span className="
          mt-1 block text-[11px]
          text-muted-foreground
        ">
          {detail}
        </span>
      </span>

      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="peer sr-only"
      />

      <span className="
        relative h-6 w-11 shrink-0 rounded-full
        bg-border transition-colors
        after:absolute after:right-1 after:top-1
        after:h-4 after:w-4 after:rounded-full
        after:bg-white after:transition-transform
        peer-checked:bg-primary
        peer-checked:after:-translate-x-5
        peer-focus-visible:outline
        peer-focus-visible:outline-2
        peer-focus-visible:outline-primary
      " />
    </label>
  );
}

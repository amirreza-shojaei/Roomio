
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <button
        disabled
        aria-label="تغییر تم"
        className="
          flex h-10 w-10 items-center justify-center
          rounded-xl border border-border
          bg-card text-muted-foreground
          opacity-50
        "
      >
        <span className="h-5 w-5" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="تغییر تم"
      title="تغییر تم"
      className="
        flex h-10 w-10 items-center justify-center
        rounded-xl border border-border
        bg-card text-muted-foreground
        transition-all duration-200
        hover:border-primary hover:text-primary
      "
    >
      {isDark ? (
        <Sun size={19} />
      ) : (
        <Moon size={19} />
      )}
    </button>
  );
}

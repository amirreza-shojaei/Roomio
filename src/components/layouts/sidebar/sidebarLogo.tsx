
import { Building2 } from "lucide-react";
import Link from "next/link";

export default function SidebarLogo() {
  return (
    <Link
      href="/dashboard"
      className="flex items-center gap-3"
    >
      <div className="
        flex h-11 w-11 items-center justify-center
        rounded-xl bg-primary text-primary-foreground
        shadow-lg shadow-primary/20
      ">
        <Building2 size={25} />
      </div>

      <div className="flex flex-col">
        <span className="
          text-xl font-extrabold tracking-tight
          text-foreground
        ">
          Roomio
        </span>

        <span className="
          text-[10px] text-muted-foreground
        ">
          مدیریت هوشمند خوابگاه
        </span>
      </div>
    </Link>
  );
}

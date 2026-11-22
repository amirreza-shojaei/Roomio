
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SidebarItemType } from "./sidebar.config";

interface SidebarItemProps {
  item: SidebarItemType;
  onClick?: () => void;
}

export default function SidebarItem({
  item,
  onClick,
}: SidebarItemProps) {
  const pathname = usePathname();

  const isActive =
    pathname === item.href ||
    pathname.startsWith(`${item.href}/`);

  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`
        group flex items-center gap-3
        rounded-xl px-3 py-3
        text-sm font-medium
        transition-all duration-200

        ${
          isActive
            ? "bg-primary/15 text-primary"
            : "text-muted-foreground hover:bg-card-secondary hover:text-foreground"
        }
      `}
    >
      <Icon
        size={19}
        strokeWidth={isActive ? 2.3 : 1.8}
        className="shrink-0"
      />

      <span className="truncate">
        {item.title}
      </span>

      {isActive && (
        <span className="
          mr-auto h-1.5 w-1.5 rounded-full
          bg-primary
        " />
      )}
    </Link>
  );
}

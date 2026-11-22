
import SidebarItem from "./sidebarItem";
import { studentSidebarItems } from "./sidebar.config";

interface SidebarMenuProps {
  onItemClick?: () => void;
}

export default function SidebarMenu({
  onItemClick,
}: SidebarMenuProps) {
  return (
    <nav className="flex flex-col gap-6">
      {studentSidebarItems.map((group) => (
        <div key={group.title}>

          <h3 className="
            mb-3 px-3 text-[11px] font-medium
            text-muted-foreground/70
          ">
            {group.title}
          </h3>

          <div className="flex flex-col gap-1">
            {group.items.map((item) => (
              <SidebarItem
                key={item.href}
                item={item}
                onClick={onItemClick}
              />
            ))}
          </div>

        </div>
      ))}
    </nav>
  );
}



import SidebarLogo from "./sidebarLogo";
import SidebarMenu from "./sidebarMenu";
import SidebarUser from "./sidebarUser";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <button
          aria-label="بستن منو"
          onClick={onClose}
          className="
            fixed inset-0 z-40
            bg-black/50 backdrop-blur-[2px]
            lg:hidden
          "
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 right-0 z-50
          flex w-[260px] flex-col
          border-l border-border
          bg-card

          transition-transform duration-300 ease-in-out

          ${isOpen ? "translate-x-0" : "translate-x-full"}

          lg:static lg:z-auto
          lg:translate-x-0 lg:shrink-0
        `}
      >
        {/* Logo */}
        <div className="
          flex h-[80px] shrink-0
          items-center justify-center
          border-b border-border px-5
        ">
          <SidebarLogo />
        </div>

        {/* Menu */}
        <div className="
          min-h-0 flex-1 overflow-y-auto
          px-3 py-5
        ">
          <SidebarMenu onItemClick={onClose} />
        </div>

        {/* User */}
        <div className="shrink-0">
          <SidebarUser />
        </div>

      </aside>
    </>
  );
}

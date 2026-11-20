import NotificationButton from "./notificationButton";
import UserMenu from "./userMenu";
import ThemeToggle from "../themes/themeToggle";

export default function HeaderActions() {
  return (
    <div className="flex shrink-0 items-center gap-2 sm:gap-3">

      <NotificationButton />

      <ThemeToggle />

      <div className="mx-1 hidden h-7 w-px bg-border sm:block" />

      <UserMenu />

    </div>
  );
}

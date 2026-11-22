
"use client";

import { useState } from "react";

import Header from "./header";
import Sidebar from "./sidebar";

interface DashboardShellProps {
  children: React.ReactNode;
}

export default function DashboardShell({
  children,
}: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      dir="rtl"
      className="
        flex h-dvh w-full overflow-hidden
        bg-background
      "
    >
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="
        flex min-w-0 flex-1 flex-col
        overflow-hidden
      ">
        <Header
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="
          min-h-0 flex-1 overflow-y-auto
          p-4 sm:p-6 lg:p-8
        ">
          {children}
        </main>
      </div>
    </div>
  );
}

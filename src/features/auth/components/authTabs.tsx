
"use client";

import type { AuthMode } from "../types/auth.types";

type AuthTabsProps = {
  mode: AuthMode;
  onChange: (mode: AuthMode) => void;
};

export default function AuthTabs({
  mode,
  onChange,
}: AuthTabsProps) {
  return (
    <div className="auth-tabs" role="tablist" aria-label="ورود یا ثبت‌نام">
      <button
        type="button"
        role="tab"
        aria-selected={mode === "login"}
        className={mode === "login" ? "active" : ""}
        onClick={() => onChange("login")}
      >
        ورود
      </button>

      <button
        type="button"
        role="tab"
        aria-selected={mode === "register"}
        className={mode === "register" ? "active" : ""}
        onClick={() => onChange("register")}
      >
        ثبت‌نام
      </button>
    </div>
  );
}


"use client";

import { useState } from "react";

type AuthFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  minLength?: number;
};

export default function AuthField({
  label,
  name,
  placeholder,
  type = "text",
  autoComplete,
  required = true,
  minLength,
}: AuthFieldProps) {
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";

  return (
    <label className="auth-field">
      <span className="auth-field-label">{label}</span>

      <span className="auth-input-shell">
        <input
          name={name}
          type={isPassword && visible ? "text" : type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          minLength={minLength}
        />

        {isPassword && (
          <button
            type="button"
            className="auth-visibility-button"
            onClick={() => setVisible((value) => !value)}
            aria-label={
              visible ? "پنهان کردن رمز عبور" : "نمایش رمز عبور"
            }
          >
            {visible ? "پنهان" : "نمایش"}
          </button>
        )}
      </span>
    </label>
  );
}

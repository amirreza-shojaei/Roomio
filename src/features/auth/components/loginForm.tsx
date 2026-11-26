
"use client";

import type { FormEvent } from "react";
import AuthField from "./authField";

type LoginFormProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onForgotPassword: () => void;
  message: string;
};

export default function LoginForm({
  onSubmit,
  onForgotPassword,
  message,
}: LoginFormProps) {
  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <AuthField
        label="شماره دانشجویی یا ایمیل"
        name="identity"
        placeholder="مثلاً ۴۰۱۱۲۳۴۵ یا name@uni.ac.ir"
        autoComplete="username"
      />

      <AuthField
        label="رمز عبور"
        name="password"
        placeholder="رمز عبور خود را وارد کنید"
        type="password"
        autoComplete="current-password"
      />

      <button
        type="button"
        className="auth-forgot-link"
        onClick={onForgotPassword}
      >
        رمز عبور را فراموش کرده‌اید؟
      </button>

      {message && (
        <p className="auth-message" role="status">
          {message}
        </p>
      )}

      <button className="auth-primary-button" type="submit">
        ورود به سامانه
        <span aria-hidden="true">←</span>
      </button>
    </form>
  );
}

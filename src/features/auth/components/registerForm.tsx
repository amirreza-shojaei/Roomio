
"use client";

import type { FormEvent } from "react";
import AuthField from "./authField";

type RegisterFormProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  message: string;
};

export default function RegisterForm({
  onSubmit,
  message,
}: RegisterFormProps) {
  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <div className="auth-field-grid">
        <AuthField
          label="نام"
          name="firstName"
          placeholder="نام"
          autoComplete="given-name"
        />

        <AuthField
          label="نام خانوادگی"
          name="lastName"
          placeholder="نام خانوادگی"
          autoComplete="family-name"
        />
      </div>

      <AuthField
        label="شماره دانشجویی"
        name="studentNumber"
        placeholder="شماره دانشجویی خود را وارد کنید"
        autoComplete="off"
      />

      <AuthField
        label="ایمیل دانشگاهی"
        name="email"
        placeholder="name@uni.ac.ir"
        type="email"
        autoComplete="email"
      />

      <div className="auth-field-grid">
        <AuthField
          label="رمز عبور"
          name="password"
          placeholder="حداقل ۸ کاراکتر"
          type="password"
          autoComplete="new-password"
          minLength={8}
        />

        <AuthField
          label="تکرار رمز عبور"
          name="confirmPassword"
          placeholder="رمز عبور را تکرار کنید"
          type="password"
          autoComplete="new-password"
          minLength={8}
        />
      </div>

      {message && (
        <p className="auth-message" role="status">
          {message}
        </p>
      )}

      <button className="auth-primary-button" type="submit">
        ایجاد حساب کاربری
        <span aria-hidden="true">←</span>
      </button>
    </form>
  );
}

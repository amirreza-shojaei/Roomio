
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

import type { AuthMode } from "../types/auth.types";

import AuthTabs from "./authTabs";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import DormitoryIllustration from "./svg";

import "../styles/auth.css";
import { Building2 } from "lucide-react";

type AuthPageProps = {
  initialMode: AuthMode;
};

export default function AuthPage({ initialMode }: AuthPageProps) {
  const router = useRouter();

  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [message, setMessage] = useState("");

const changeMode = (nextMode: AuthMode) => {
  router.push(nextMode === "login" ? "/login" : "/register");
};

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const identity = String(formData.get("identity") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    if (!identity || !password) return;

    // اتصال به API ورود در مرحله پیاده‌سازی بک‌اند
    setMessage(
      "فرم ورود آماده است؛ سرویس احراز هویت هنوز به پروژه متصل نشده است."
    );
  };

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(
      formData.get("confirmPassword") ?? ""
    );

    if (password.length < 8) {
      setMessage("رمز عبور باید حداقل ۸ کاراکتر داشته باشد.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("رمز عبور و تکرار آن یکسان نیستند.");
      return;
    }

    // اتصال به API ثبت‌نام در مرحله پیاده‌سازی بک‌اند
    setMessage(
      "فرم ثبت‌نام آماده است؛ سرویس ثبت‌نام هنوز به پروژه متصل نشده است."
    );
  };

  const handleForgotPassword = () => {
    setMessage(
      "بخش بازیابی رمز عبور در مرحله بعد به سامانه اضافه خواهد شد."
    );
  };

  return (
    <main className="auth-page" dir="rtl">
      <div className="auth-page-accent auth-page-accent-one" />
      <div className="auth-page-accent auth-page-accent-two" />

      <section className="auth-card">
        <aside className="auth-visual-panel">
          <div className="auth-brand auth-brand-light">
            <span className="auth-brand-mark">
              <Building2/>
            </span>

            <span>
              <strong>خوابگاه هوشمند</strong>
              <small>سامانه مدیریت امور دانشجویی</small>
            </span>
          </div>

          <div className="auth-visual-copy">
            <span className="auth-eyebrow">
              خانه دوم شما در دانشگاه
            </span>

            <h2>آرامش بیشتر، مدیریت ساده‌تر</h2>

            <p>
              همه خدمات خوابگاه، از انتخاب اتاق و تخت تا پیگیری
              درخواست‌ها، در یک فضای یکپارچه.
            </p>
          </div>

          <DormitoryIllustration />

          <div className="auth-security-note">
            <span className="auth-security-dot" />
            محیطی یکپارچه برای مدیریت امور خوابگاه
          </div>
        </aside>

        <div className="auth-form-panel">
          <div className="auth-mobile-brand">
            <span className="auth-brand-mark">
              <span aria-hidden="true">♟</span>
            </span>

            <span>
              <strong>خوابگاه هوشمند</strong>
              <small>سامانه مدیریت امور دانشجویی</small>
            </span>
          </div>

          <header className="auth-form-header">
            <span className="auth-eyebrow">
              سامانه یکپارچه خوابگاه
            </span>

            <h1>
              {mode === "login" ? "خوش آمدید" : "عضویت دانشجو"}
            </h1>

            <p>
              {mode === "login"
                ? "برای دسترسی به پنل دانشجویی وارد حساب خود شوید."
                : "برای استفاده از خدمات خوابگاه، اطلاعات خود را وارد کنید."}
            </p>
          </header>

          <AuthTabs mode={mode} onChange={changeMode} />

          {mode === "login" ? (
            <LoginForm
              onSubmit={handleLogin}
              onForgotPassword={handleForgotPassword}
              message={message}
            />
          ) : (
            <RegisterForm
              onSubmit={handleRegister}
              message={message}
            />
          )}

          <p className="auth-switch-prompt">
            {mode === "login"
              ? "هنوز حساب کاربری ندارید؟"
              : "قبلاً ثبت‌نام کرده‌اید؟"}

            <button
              type="button"
              onClick={() =>
                changeMode(mode === "login" ? "register" : "login")
              }
            >
              {mode === "login" ? "ثبت‌نام کنید" : "وارد شوید"}
            </button>
          </p>
        </div>
      </section>

      <footer className="auth-footer">
        دانشگاه · معاونت دانشجویی · تمامی حقوق محفوظ است
      </footer>
    </main>
  );
}

"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Check, X } from "lucide-react";

import type {
  ProfilePageData,
  ProfileUpdatePayload,
  LifestyleData,
  ProfileData,
} from "../types/profile.types";

interface EditProfileDialogProps {
  initialData: ProfilePageData;
  onClose: () => void;
  onSave: (updates: ProfileUpdatePayload) => void;
}

const availableInterests = [
  "ورزش",
  "موسیقی",
  "مطالعه",
  "بازی‌های کامپیوتری",
  "فیلم و سینما",
  "طبیعت‌گردی",
  "برنامه‌نویسی",
  "هنر",
];

const inputClass =
  "h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10";

const selectClass =
  "h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10";

export default function EditProfileDialog({
  initialData,
  onClose,
  onSave,
}: EditProfileDialogProps) {
  const [profile, setProfile] = useState<ProfileData>({
    ...initialData.profile,
  });

  const [lifestyle, setLifestyle] = useState<LifestyleData>({
    ...initialData.lifestyle,
    preferences: initialData.lifestyle.preferences.map((item) => ({
      ...item,
      options: [...item.options],
    })),
    sensitivities: {
      ...initialData.lifestyle.sensitivities,
    },
    interests: [...initialData.lifestyle.interests],
  });

  const [error, setError] = useState("");

  const updateProfile = (key: keyof ProfileData, value: string) => {
    setProfile((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const updatePreference = (key: string, value: string) => {
    setLifestyle((current) => ({
      ...current,
      preferences: current.preferences.map((item) =>
        item.key === key
          ? { ...item, selected: value }
          : item
      ),
    }));
  };

  const updateSensitivity = (
    key: keyof LifestyleData["sensitivities"],
    value: string
  ) => {
    setLifestyle((current) => ({
      ...current,
      sensitivities: {
        ...current.sensitivities,
        [key]: value,
      },
    }));
  };

  const toggleInterest = (interest: string) => {
    setLifestyle((current) => ({
      ...current,
      interests: current.interests.includes(interest)
        ? current.interests.filter((item) => item !== interest)
        : [...current.interests, interest],
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!profile.name.trim()) {
      setError("لطفاً نام و نام خانوادگی را وارد کنید.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
      setError("لطفاً یک ایمیل معتبر وارد کنید.");
      return;
    }

    setError("");

    onSave({
      profile,
      lifestyle,
    });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-profile-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex max-h-[95vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-5">
          <div>
            <h2
              id="edit-profile-title"
              className="text-base font-bold text-foreground"
            >
              ویرایش پروفایل
            </h2>

            <p className="mt-1 text-xs text-muted-foreground">
              اطلاعات شخصی و ترجیحات خود را به‌روزرسانی کنید.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="بستن پنجره"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-card-secondary hover:text-foreground"
          >
            <X size={19} />
          </button>
        </div>

        {/* Form Body */}
        <div className="overflow-y-auto p-5">
          {/* Personal Information */}
          <section>
            <h3 className="mb-4 text-sm font-bold text-foreground">
              اطلاعات شخصی
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField label="نام و نام خانوادگی" required>
                <input
                  className={inputClass}
                  value={profile.name}
                  onChange={(event) =>
                    updateProfile("name", event.target.value)
                  }
                  placeholder="نام و نام خانوادگی"
                />
              </FormField>

              <FormField label="شماره دانشجویی">
                <input
                  className={`${inputClass} opacity-70`}
                  value={profile.studentId}
                  readOnly
                  disabled
                />
              </FormField>

              <FormField label="ایمیل دانشگاهی" required>
                <input
                  dir="ltr"
                  type="email"
                  className={inputClass}
                  value={profile.email}
                  onChange={(event) =>
                    updateProfile("email", event.target.value)
                  }
                  placeholder="example@university.com"
                />
              </FormField>

              <FormField label="شماره تماس">
                <input
                  dir="ltr"
                  className={inputClass}
                  value={profile.phone}
                  onChange={(event) =>
                    updateProfile("phone", event.target.value)
                  }
                  placeholder="شماره تماس"
                />
              </FormField>

              <FormField label="رشته تحصیلی">
                <input
                  className={inputClass}
                  value={profile.major}
                  onChange={(event) =>
                    updateProfile("major", event.target.value)
                  }
                  placeholder="رشته تحصیلی"
                />
              </FormField>

              <FormField label="مقطع تحصیلی">
                <select
                  className={selectClass}
                  value={profile.degree}
                  onChange={(event) =>
                    updateProfile("degree", event.target.value)
                  }
                >
                  {[
                    "کاردانی",
                    "کارشناسی",
                    "کارشناسی ارشد",
                    "دکتری",
                  ].map((degree) => (
                    <option key={degree} value={degree}>
                      {degree}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField label="جنسیت">
                <select
                  className={selectClass}
                  value={profile.gender}
                  onChange={(event) =>
                    updateProfile("gender", event.target.value)
                  }
                >
                  <option value="مرد">مرد</option>
                  <option value="زن">زن</option>
                </select>
              </FormField>

              <FormField label="سال ورود به دانشگاه">
                <input
                  className={inputClass}
                  value={profile.entryYear}
                  onChange={(event) =>
                    updateProfile("entryYear", event.target.value)
                  }
                  placeholder="مثلاً ۱۴۰۲"
                />
              </FormField>
            </div>
          </section>

          {/* Lifestyle Preferences */}
          <section className="mt-7 border-t border-border pt-6">
            <h3 className="mb-4 text-sm font-bold text-foreground">
              سبک زندگی و ترجیحات
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {lifestyle.preferences.map((preference) => (
                <fieldset
                  key={preference.key}
                  className="rounded-xl border border-border p-3"
                >
                  <legend className="px-1 text-xs font-semibold text-foreground">
                    {preference.title}
                  </legend>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {preference.options.map((option) => {
                      const selected = preference.selected === option;

                      return (
                        <label
                          key={option}
                          className={`cursor-pointer rounded-lg border px-3 py-2 text-[11px] transition ${
                            selected
                              ? "border-primary/30 bg-primary/10 font-semibold text-primary"
                              : "border-border text-muted-foreground hover:bg-card-secondary"
                          }`}
                        >
                          <input
                            type="radio"
                            name={preference.key}
                            value={option}
                            checked={selected}
                            onChange={() =>
                              updatePreference(preference.key, option)
                            }
                            className="sr-only"
                          />

                          {option}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              ))}
            </div>

            {/* Smoking */}
            <div className="mt-4">
              <FormField label="مصرف سیگار یا قلیان">
                <select
                  className={selectClass}
                  value={lifestyle.smoking}
                  onChange={(event) =>
                    setLifestyle((current) => ({
                      ...current,
                      smoking: event.target.value,
                    }))
                  }
                >
                  <option value="خیر">خیر</option>
                  <option value="بله">بله</option>
                </select>
              </FormField>
            </div>
          </section>

          {/* Environmental Sensitivities */}
          <section className="mt-7 border-t border-border pt-6">
            <h3 className="mb-4 text-sm font-bold text-foreground">
              حساسیت‌های محیطی
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <FormField label="حساسیت به نور">
                <select
                  className={selectClass}
                  value={lifestyle.sensitivities.light}
                  onChange={(event) =>
                    updateSensitivity("light", event.target.value)
                  }
                >
                  <option value="کم">کم</option>
                  <option value="متوسط">متوسط</option>
                  <option value="زیاد">زیاد</option>
                </select>
              </FormField>

              <FormField label="حساسیت به بو">
                <select
                  className={selectClass}
                  value={lifestyle.sensitivities.smell}
                  onChange={(event) =>
                    updateSensitivity("smell", event.target.value)
                  }
                >
                  <option value="کم">کم</option>
                  <option value="متوسط">متوسط</option>
                  <option value="زیاد">زیاد</option>
                </select>
              </FormField>

              <FormField label="حساسیت به دما">
                <select
                  className={selectClass}
                  value={lifestyle.sensitivities.temperature}
                  onChange={(event) =>
                    updateSensitivity("temperature", event.target.value)
                  }
                >
                  <option value="کم">کم</option>
                  <option value="متوسط">متوسط</option>
                  <option value="زیاد">زیاد</option>
                </select>
              </FormField>
            </div>
          </section>

          {/* Interests */}
          <section className="mt-7 border-t border-border pt-6">
            <h3 className="mb-4 text-sm font-bold text-foreground">
              علایق و سرگرمی‌ها
            </h3>

            <div className="flex flex-wrap gap-2">
              {availableInterests.map((interest) => {
                const selected = lifestyle.interests.includes(interest);

                return (
                  <label
                    key={interest}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-xs transition ${
                      selected
                        ? "border-primary/30 bg-primary/10 font-semibold text-primary"
                        : "border-border text-muted-foreground hover:bg-card-secondary"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() => toggleInterest(interest)}
                      className="sr-only"
                    />

                    {selected && <Check size={13} />}
                    {interest}
                  </label>
                );
              })}
            </div>
          </section>

          {error && (
            <p
              role="alert"
              className="mt-5 rounded-xl bg-red-500/10 p-3 text-xs text-red-600 dark:text-red-400"
            >
              {error}
            </p>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col-reverse gap-2 border-t border-border p-4 sm:flex-row sm:justify-start sm:p-5">
          <button
            type="button"
            onClick={onClose}
            className="h-10 rounded-xl border border-border px-5 text-xs font-semibold text-foreground transition hover:bg-card-secondary"
          >
            انصراف
          </button>

          <button
            type="submit"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-xs font-semibold text-white transition hover:opacity-90"
          >
            <Check size={16} />
            ذخیره تغییرات
          </button>
        </div>
      </form>
    </div>
  );
}

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block min-w-0">
      <span className="mb-2 block text-xs font-semibold text-muted-foreground">
        {label}
        {required && <span className="mr-1 text-red-500">*</span>}
      </span>

      {children}
    </label>
  );
}
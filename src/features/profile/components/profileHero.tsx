"use client";

import { useRef } from "react";
import { BadgeCheck, Camera, Mail, Pencil, UserRound } from "lucide-react";

import type { ProfileData } from "../types/profile.types";

interface ProfileHeroProps {
  profile: ProfileData;
  onEdit: () => void;
  onAvatarChange: (avatar: string) => void;
}

export default function ProfileHero({
  profile,
  onEdit,
  onAvatarChange,
}: ProfileHeroProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (file?: File) => {
    if (!file || !file.type.startsWith("image/")) return;

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        onAvatarChange(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };

  const initials =
    profile.name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0])
      .join("") || "؟";

  return (
    <section className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-primary/15 bg-card-secondary p-5 sm:flex-row sm:items-center sm:p-7">
      <div className="flex min-w-0 items-center gap-4">
        {/* Avatar */}
        <div className="relative shrink-0">
          {profile.avatar ? (
            <img
              src={profile.avatar}
              alt={`تصویر ${profile.name}`}
              className="h-20 w-20 rounded-full border-4 border-card object-cover sm:h-24 sm:w-24"
            />
          ) : (
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-card bg-primary/10 text-2xl font-bold text-primary sm:h-24 sm:w-24">
              {initials}
            </div>
          )}

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            aria-label="تغییر تصویر پروفایل"
            className="absolute bottom-0 left-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-primary text-white transition hover:opacity-85"
          >
            <Camera size={15} />
          </button>

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={(event) => {
              handleImageChange(event.target.files?.[0]);
              event.target.value = "";
            }}
          />
        </div>

        {/* Student Information */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-bold text-foreground sm:text-xl">
              {profile.name}
            </h2>

            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
              <BadgeCheck size={14} />
              دانشجوی فعال
            </span>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span>
              شماره دانشجویی: {profile.studentId}
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/50 sm:block" />

            <span>{profile.major}</span>
          </div>

          <a
            href={`mailto:${profile.email}`}
            dir="ltr"
            className="mt-2 inline-flex max-w-full items-center gap-1.5 truncate text-xs text-muted-foreground transition hover:text-primary"
          >
            <Mail size={14} />
            {profile.email}
          </a>
        </div>
      </div>

      {/* Actions */}
      <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 text-xs font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
        >
          <Camera size={16} />
          تغییر تصویر
        </button>

        <button
          type="button"
          onClick={onEdit}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-xs font-semibold text-white transition hover:opacity-90"
        >
          <Pencil size={16} />
          ویرایش پروفایل
        </button>
      </div>
    </section>
  );
}
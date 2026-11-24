"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserRound } from "lucide-react";

import { useProfile } from "../hooks/useProfile";

import {
  ProfileHero,
  PersonalInfoCard,
  LifestylePreferences,
  ProfileCompletionCard,
  ResidenceCard,
  EditProfileDialog,
} from "./index";

export default function ProfilePage() {
  const router = useRouter();

  const {
    profileData,
    completion,
    updateProfile,
    updateAvatar,
  } = useProfile();

  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleSave = (updates: Parameters<typeof updateProfile>[0]) => {
    updateProfile(updates);
    setIsEditOpen(false);
  };

  const handleViewRoom = () => {
    router.push("/rooms");
  };

  return (
    <main className="space-y-6 pb-8">
      {/* Page Heading */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <UserRound size={22} />
        </div>

        <div>
          <h1 className="text-xl font-extrabold text-foreground">
            پروفایل من
          </h1>

          <p className="mt-1 text-xs text-muted-foreground">
            اطلاعات شخصی و ترجیحات زندگی خود را مدیریت کنید.
          </p>
        </div>
      </div>

      {/* Profile Hero */}
      <ProfileHero
        profile={profileData.profile}
        onEdit={() => setIsEditOpen(true)}
        onAvatarChange={updateAvatar}
      />

      {/* Main Content */}
      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-3">
        {/* Main Column */}
        <div className="space-y-5 xl:col-span-2">
          <PersonalInfoCard
            profile={profileData.profile}
            onEdit={() => setIsEditOpen(true)}
          />

          <LifestylePreferences
            lifestyle={profileData.lifestyle}
          />
        </div>

        {/* Sidebar Column */}
        <aside className="space-y-5">
          <ProfileCompletionCard
            completion={completion}
            onEdit={() => setIsEditOpen(true)}
          />

          <ResidenceCard
            residence={profileData.residence}
            onViewRoom={handleViewRoom}
          />
        </aside>
      </div>

      {/* Edit Dialog */}
      {isEditOpen && (
        <EditProfileDialog
          initialData={profileData}
          onClose={() => setIsEditOpen(false)}
          onSave={handleSave}
        />
      )}
    </main>
  );
}
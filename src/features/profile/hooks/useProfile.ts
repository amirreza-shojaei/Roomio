"use client";

import { useMemo, useState } from "react";

import { mockProfile } from "../data/mock-profile";

import type {
  ProfilePageData,
  ProfileUpdatePayload,
} from "../types/profile.types";

import { calculateProfileCompletion } from "../utils/profile.utils";

export function useProfile() {
  const [profileData, setProfileData] =
    useState<ProfilePageData>(mockProfile);

  const completion = useMemo(
    () =>
      calculateProfileCompletion(
        profileData.profile,
        profileData.lifestyle,
        profileData.residence
      ),
    [profileData]
  );
const updateProfile = (updates: ProfileUpdatePayload) => {
  setProfileData((current) => ({
    ...current,

    profile: {
      ...current.profile,
      ...updates.profile,
    },

    lifestyle: {
      ...current.lifestyle,
      ...updates.lifestyle,

      sensitivities: {
        ...current.lifestyle.sensitivities,
        ...updates.lifestyle?.sensitivities,
      },
    },
  }));
};

  const updateAvatar = (avatar: string | null) => {
    setProfileData((current) => ({
      ...current,
      profile: {
        ...current.profile,
        avatar,
      },
    }));
  };

  return {
    profileData,
    completion,
    updateProfile,
    updateAvatar,
  };
}
import type {
  ProfileData,
  LifestyleData,
  RoomAssignment,
} from "../types/profile.types";

export function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export function calculateProfileCompletion(
  profile: ProfileData,
  lifestyle: LifestyleData,
  residence: RoomAssignment | null,
): number {
  const profileFields = [
    profile.name,
    profile.studentId,
    profile.email,
    profile.phone,
    profile.major,
    profile.degree,
    profile.gender,
    profile.entryYear,
  ];

  const completedProfileFields = profileFields.filter(
    (value) => value.trim().length > 0,
  ).length;

  const completedPreferences = lifestyle.preferences.filter(
    (preference) => preference.selected.trim().length > 0,
  ).length;

  const lifestyleFields = [
    lifestyle.smoking,
    lifestyle.sensitivities.light,
    lifestyle.sensitivities.smell,
    lifestyle.sensitivities.temperature,
  ];

  const completedLifestyleFields = lifestyleFields.filter(
    (value) => value.trim().length > 0,
  ).length;

  const completedInterests = lifestyle.interests.length > 0 ? 1 : 0;
  const completedResidence = residence ? 1 : 0;

  const totalFields =
    profileFields.length +
    lifestyle.preferences.length +
    lifestyleFields.length +
    2;

  const completedFields =
    completedProfileFields +
    completedPreferences +
    completedLifestyleFields +
    completedInterests +
    completedResidence;

  return Math.round((completedFields / totalFields) * 100);
}

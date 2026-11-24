export type ProfileData = {
  name: string;
  studentId: string;
  email: string;
  phone: string;
  major: string;
  degree: string;
  gender: string;
  entryYear: string;
  avatar: string | null;
};

export type LifestylePreference = {
  key: string;
  title: string;
  options: string[];
  selected: string;
  icon: string;
};

export type EnvironmentalSensitivity = {
  light: string;
  smell: string;
  temperature: string;
};

export type LifestyleData = {
  preferences: LifestylePreference[];
  smoking: string;
  sensitivities: EnvironmentalSensitivity;
  interests: string[];
};

export type RoomAssignment = {
  building: string;
  floor: string;
  room: string;
  bed: string;
  status: "active" | "inactive";
};

export type ProfilePageData = {
  profile: ProfileData;
  lifestyle: LifestyleData;
  residence: RoomAssignment | null;
};

export type ProfileUpdatePayload = {
  profile?: Partial<ProfileData>;
  lifestyle?: Partial<LifestyleData>;
};
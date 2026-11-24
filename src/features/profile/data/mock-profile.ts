import type { ProfilePageData } from "../types/profile.types";

export const mockProfile: ProfilePageData = {
  profile: {
    name: "علی احمدی",
    studentId: "402123456",
    email: "ali.ahmadi@example.com",
    phone: "09124567890",
    major: "مهندسی کامپیوتر",
    degree: "کارشناسی",
    gender: "مرد",
    entryYear: "1402",
    avatar: null,
  },

  lifestyle: {
    preferences: [
      {
        key: "sleep",
        title: "برنامه خواب",
        options: ["سحرخیز", "معمولی", "شب‌زنده‌دار"],
        selected: "معمولی",
        icon: "moon",
      },
      {
        key: "cleanliness",
        title: "حساسیت به نظافت",
        options: ["کم", "متوسط", "زیاد"],
        selected: "زیاد",
        icon: "sparkles",
      },
      {
        key: "noise",
        title: "تحمل سر و صدا",
        options: ["کم", "متوسط", "زیاد"],
        selected: "متوسط",
        icon: "volume-2",
      },
      {
        key: "study",
        title: "عادت مطالعه",
        options: ["محیط آرام", "موسیقی ملایم", "بدون محدودیت"],
        selected: "محیط آرام",
        icon: "book-open",
      },
      {
        key: "social",
        title: "روحیه اجتماعی",
        options: ["درون‌گرا", "متوسط", "برون‌گرا"],
        selected: "متوسط",
        icon: "users",
      },
      {
        key: "guest",
        title: "پذیرش مهمان",
        options: ["بدون مهمان", "با هماهنگی", "بدون محدودیت"],
        selected: "با هماهنگی",
        icon: "user-plus",
      },
    ],

    smoking: "خیر",

    sensitivities: {
      light: "کم",
      smell: "متوسط",
      temperature: "زیاد",
    },

    interests: ["ورزش", "موسیقی", "مطالعه", "بازی‌های کامپیوتری"],
  },

  residence: {
    building: "۲",
    floor: "۲",
    room: "۲۰۴",
    bed: "۱",
    status: "active",
  },
};

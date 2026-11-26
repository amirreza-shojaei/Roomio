
export type AuthMode = "login" | "register";

export type UserRole = "student" | "admin";

export interface LoginPayload {
  identity: string;
  password: string;
}

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  studentNumber: string;
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
}

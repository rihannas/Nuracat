export enum Language {
  ENGLISH = 'en',
  AMHARIC = 'am',
  OROMO = 'or'
}

export enum AppView {
  ONBOARDING = 'ONBOARDING',
  DASHBOARD = 'DASHBOARD',
  EDUCATION = 'EDUCATION',
  CONSULTATION = 'CONSULTATION',
  IMAGE_PROTECTION = 'IMAGE_PROTECTION',
  PROFILE = 'PROFILE', // Added Profile view
  SETTINGS = 'SETTINGS'
}

export enum AgeGroup {
  TEEN = '13-15',
  YOUNG_ADULT = '18-21',
  ADULT = '22+'
}

export interface UserState {
  name: string;
  language: Language;
  ageGroup: AgeGroup;
  xp: number;
  streak: number;
  completedLessons: string[];
  isOnboarded: boolean;
}

export interface Lesson {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: 'Privacy' | 'Harassment' | 'Legal' | 'Tech';
  minAge: AgeGroup[];
  xpReward: number;
  content: Record<Language, string>; // Changed to support multi-language content
}

export interface ConsultantPost {
  id: string;
  authorAlias: string; // Anonymous
  content: string;
  category: string;
  timestamp: number;
  replies: ConsultantReply[];
  isVerified: boolean; // Via Fayda (mock)
}

export interface ConsultantReply {
  id: string;
  consultantName: string;
  role: string; // e.g. "Legal Advisor", "Psychologist"
  content: string;
  timestamp: number;
  verified: boolean;
}

export interface Badge {
  id: string;
  icon: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  xpRequired: number;
}
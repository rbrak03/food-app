export type LanguageCode = 'en' | 'tw' | 'ga' | 'ewe';

export type Ingredient = {
  name: string;
  qty?: number | string;
  unit?: string;
  subs?: string[];
};

export type Step = {
  id: number;
  text: string;
  timerSec?: number;
  audioKey?: string;
};

export type Nutrition = {
  kcal: number;
  protein_g: number;
  fat_g: number;
  carb_g: number;
  sodium_mg?: number;
};

export type Recipe = {
  id: string;
  title: string;
  region: string[];
  categories: string[];
  languages?: Partial<Record<LanguageCode, { title: string; summary?: string }>>;
  ingredients: Ingredient[];
  steps: Step[];
  nutrition?: Nutrition;
  dietTags?: string[];
  allergens?: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
  prepMin?: number;
  cookMin?: number;
  servings?: number;
  media?: { images?: string[]; video?: string };
  authenticity?: { badge?: string; verifiedBy?: string };
};
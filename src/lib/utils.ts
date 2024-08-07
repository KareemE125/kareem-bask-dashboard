import { TThemeColors, TThemeMode } from "@/customTypes/theme-types";
import { LOCAL_THEME_MODE, THEME_COLORS } from "@/global/constants";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function setAppTheme(mode: TThemeMode, color?: TThemeColors) {
  if (color) {
    document.documentElement.classList.remove(...document.documentElement.classList);
    document.documentElement.classList.add(mode, color);
  }
  else{
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(mode);
  }
  localStorage.setItem(LOCAL_THEME_MODE, mode);
}

export function generateRandomThemeColor(){
  const randomIndex = Math.floor(Math.random() * THEME_COLORS.length);
  return THEME_COLORS[randomIndex];
}
import { TThemeColors, TThemeMode } from "@/customTypes/theme-types";
import { LOCAL_THEME_COLOR, LOCAL_THEME_MODE } from "@/global/constants";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function setAppTheme(mode: TThemeMode, color: TThemeColors) {
  document.documentElement.classList.remove(...document.documentElement.classList);
  document.documentElement.classList.add(mode, color);

  localStorage.setItem(LOCAL_THEME_MODE, mode);
  localStorage.setItem(LOCAL_THEME_COLOR, color);
}
import { THEME_COLORS } from "@/global/constants";

export type TThemeMode = "light" | "dark" ;

export type TThemeColors = (typeof THEME_COLORS)[number];

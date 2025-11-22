import { type Theme, THEME } from "@shared/types/theme.types";
import { createContext } from "react";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const init = {
    theme: localStorage.getItem('theme') as Theme ?? THEME.LIGHT,
    setTheme: () => {}
}

export const ThemeContext = createContext<ThemeContextType>(init);
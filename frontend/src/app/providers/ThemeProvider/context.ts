import { createContext } from "react";
import { THEME, type Theme,  } from "../../../shared/types/theme.types";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const init = {
    theme: localStorage.getItem('theme') as Theme ?? THEME.LIGHT,
    setTheme: () => {}
}

export const ThemeContext = createContext<ThemeContextType>(init);
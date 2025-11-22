import { useEffect, useState, type ReactNode } from "react"
import { ThemeContext } from "./context"
import { type Theme, THEME } from "@shared/types/theme.types";

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme') as Theme ?? THEME.LIGHT);

    const switchTheme = (theme: Theme) => {
        setTheme(theme);
    }

    useEffect(() => {
        if(theme === THEME.LIGHT) {
            document.body.dataset.theme = 'light-mode'
        } else {
            document.body.dataset.theme = 'dark-mode'
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme: switchTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

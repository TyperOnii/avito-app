import { Container } from "@/shared/components/Container/Container"
import s from './Header.module.scss'
import { NavLink } from "react-router-dom"
import { HEADER_MENU } from "../model/const"
import { Logo } from "@/shared/components/Logo/Logo"
import { useContext } from "react"
import { ThemeContext } from "@/app/providers/ThemeProvider/context"
import { Button } from "@/shared/components/Button/Button"

export const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <header className={s.header}>
            <Container>
                <div className={s.content}>
                    <Logo/>
                    <nav>
                        <ul className={s.list}>
                            {HEADER_MENU.map(({ label, href }) => (
                                <li key={label}>
                                    <NavLink to={href} className={({ isActive }) => isActive ? s.active : ''}>{label}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div>
                        <Button onClick={() => setTheme('light')} variantType={theme === 'light' ? 'primary' : 'secondary'}>Светлая</Button>
                        <Button onClick={() => setTheme('dark')} variantType={theme === 'dark' ? 'primary' : 'secondary'}>Темная</Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

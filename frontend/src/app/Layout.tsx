import { Header } from "@/widgets/Header/ui/Header"
import type { ReactNode } from "react"
import { Outlet } from "react-router-dom"

interface Props {
    children?: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="wrapper">
      <Header/>
        <main>
            {children}
            {<Outlet/>}
        </main>
    </div>
  )
}

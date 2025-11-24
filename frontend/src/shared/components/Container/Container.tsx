import clsx from "clsx"
import type { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode,
    className?: string,
}

export const Container = (props: ContainerProps) => {
  return (
    <div className={clsx('container', props.className)}>
        {props.children}
    </div>
  )
}

import type { ReactNode } from "react"

import { BlurFade } from "@/components/magicui/blur-fade"
import { cn } from "@/lib/utils"

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <BlurFade
      inView
      delay={delay}
      offset={16}
      duration={0.7}
      blur="4px"
      className={cn(className)}
    >
      {children}
    </BlurFade>
  )
}

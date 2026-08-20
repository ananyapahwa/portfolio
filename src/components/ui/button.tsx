import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono text-[12.5px] tracking-[0.04em] rounded-sm transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-moss focus-visible:outline-offset-[3px]",
  {
    variants: {
      variant: {
        solid: "bg-ink text-paper hover:bg-moss-deep",
        ghost:
          "border border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
        nav: "relative rounded-none bg-transparent p-0 h-auto lowercase tracking-[0.06em] text-ink after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-citrus after:transition-[width] after:duration-200 hover:after:w-full",
        link: "h-auto rounded-none bg-transparent p-0 text-ink underline underline-offset-[3px] hover:text-moss-deep",
      },
      size: {
        default: "px-6 py-[14px]",
        nav: "h-auto p-0 pb-1",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

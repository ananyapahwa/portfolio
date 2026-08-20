import { useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { NAV_LINKS } from "@/lib/nav"

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-[100] border-b border-line bg-paper/86 backdrop-blur-[10px]">
      <div className="wrap flex h-[76px] items-center justify-between">
        <a
          href="#top"
          className="font-display text-[20px] font-medium text-ink no-underline"
        >
          Ananya <span className="italic text-moss">Pahwa</span>
        </a>

        <ul className="hidden list-none gap-[34px] desk:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Button variant="nav" size="nav" asChild>
                <a href={link.href}>{link.label}</a>
              </Button>
            </li>
          ))}
        </ul>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="border-0 desk:hidden"
              aria-label="Open navigation"
            >
              <Menu className="size-5" strokeWidth={1.5} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100%,320px)] bg-paper">
            <SheetHeader>
              <SheetTitle className="font-display text-[20px] font-medium">
                ananya <span className="italic text-moss">pahwa</span>
              </SheetTitle>
              <SheetDescription className="sr-only">
                Page sections
              </SheetDescription>
            </SheetHeader>
            <ul className="mt-8 flex list-none flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <SheetClose asChild>
                    <Button variant="nav" size="nav" asChild>
                      <a href={link.href} className="text-[14px]">
                        {link.label}
                      </a>
                    </Button>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

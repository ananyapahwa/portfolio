import { SplineViewer } from "@/components/SplineViewer"
import { Mail } from "lucide-react"

function Linkedin({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  )
}

function Github({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.89 5.07 5.07 0 0 0-.15-3.84s-1.18-.38-3.9 1.47a13.38 13.38 0 0 0-7 0C6.27 2.23 5.09 2.61 5.09 2.61a5.07 5.07 0 0 0-.15 3.84 5.44 5.44 0 0 0-1.5 3.89c0 5.45 3.3 6.64 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    </svg>
  )
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line pb-20 pt-24 text-ink">
      <div className="wrap">
        <div className="flex flex-col gap-10 desk:flex-row desk:justify-between desk:gap-16">
          <h2 className="max-w-[480px] font-display text-[clamp(42px,5.5vw,72px)] font-medium leading-[0.98]">
            Building something interesting? I'd like to hear about it.
          </h2>
          <div className="flex w-full flex-col gap-6 desk:w-[380px]">
            <SplineViewer />
            <div className="flex flex-wrap items-center justify-center gap-6 translate-x-3 desk:translate-x-5 desk:gap-8">
              <a
                href="mailto:ananyapahwa.jobs@gmail.com"
                className="group flex items-center gap-2 font-mono text-sm transition-colors hover:text-moss-deep"
              >
                <Mail className="h-4 w-4" />
                <span className="border-b border-line pb-0.5 transition-colors group-hover:border-moss-deep">
                  email
                </span>
              </a>
              <a
                href="https://linkedin.com/in/ananya-pahwa"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-mono text-sm transition-colors hover:text-moss-deep"
              >
                <Linkedin className="h-4 w-4" />
                <span className="border-b border-line pb-0.5 transition-colors group-hover:border-moss-deep">
                  linkedin
                </span>
              </a>
              <a
                href="https://github.com/ananyapahwa"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-mono text-sm transition-colors hover:text-moss-deep"
              >
                <Github className="h-4 w-4" />
                <span className="border-b border-line pb-0.5 transition-colors group-hover:border-moss-deep">
                  github
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-[70px] flex justify-between border-t border-line pt-5 font-mono text-[11px] text-moss">
          <span>ananya pahwa — patiala, india</span>
          <span>built with attention to detail</span>
        </div>
      </div>
    </footer>
  )
}

import { Button } from "@/components/ui/button"
import { SplineViewer } from "@/components/SplineViewer"

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-[76px] pt-20 pb-[60px]">
      <div className="wrap">
        <div className="flex flex-col flex-wrap items-start justify-between gap-10 desk:flex-row desk:items-end">
          <h2 className="max-w-[600px] text-[clamp(34px,5vw,58px)]">
            Building something interesting? I'd like to hear about it.
          </h2>
          <div className="flex w-full flex-col gap-6 desk:w-[380px]">
            <SplineViewer />
            <div className="flex flex-col gap-2.5">
              <Button variant="link" className="justify-start no-underline" asChild>
                <a
                  href="mailto:ananyapahwa.jobs@gmail.com"
                  className="border-b border-line pb-0.5 font-mono text-sm"
                >
                  ananyapahwa.jobs@gmail.com
                </a>
              </Button>
              <Button variant="link" className="justify-start no-underline" asChild>
                <a
                  href="https://linkedin.com/in/ananya-pahwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-line pb-0.5 font-mono text-sm"
                >
                  linkedin.com/in/ananya-pahwa
                </a>
              </Button>
              <Button variant="link" className="justify-start no-underline" asChild>
                <a
                  href="https://github.com/ananyapahwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-line pb-0.5 font-mono text-sm"
                >
                  github.com/ananyapahwa
                </a>
              </Button>
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

import { Reveal } from "@/components/Reveal"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const TOOLKIT = [
  "C / C++",
  "JavaScript / TypeScript",
  "Python",
  "SQL",
  "Node.js / Express",
  "React / Next.js",
  "FastAPI",
  "PostgreSQL / MongoDB / Redis",
  "Docker",
  "System Design",
] as const

const PRACTICE = [
  "painting",
  "reading — fiction & otherwise",
  "strength training",
  "mindful eating",
  "stillness / spirituality",
  "reading people",
] as const

function Chip({
  children,
  soft,
}: {
  children: string
  soft?: boolean
}) {
  return (
    <span
      className={cn(
        "border px-[13px] py-2 font-mono text-xs",
        soft
          ? "border-berry bg-transparent text-berry"
          : "border-line bg-cream2 text-ink",
      )}
    >
      {children}
    </span>
  )
}

export function Practice() {
  return (
    <section id="practice" className="scroll-mt-[76px] border-t border-line py-24">
      <div className="wrap">
        <div className="mb-[52px] flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="section-kicker">04 — the toolkit & the practice</span>
            <h2 className="text-[clamp(30px,3.6vw,42px)]">
              What I reach for, on either side of the screen.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[26px] desk:grid-cols-2">
          <Reveal>
            <Card className="rounded-none border-line bg-paper p-9">
              <h4 className="mb-[18px] font-display text-[19px] font-medium">
                the toolkit
              </h4>
              <div className="flex flex-wrap gap-[9px]">
                {TOOLKIT.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="rounded-none border-line bg-paper p-9">
              <h4 className="mb-[18px] font-display text-[19px] font-medium">
                the practice
              </h4>
              <div className="flex flex-wrap gap-[9px]">
                {PRACTICE.map((item) => (
                  <Chip key={item} soft>
                    {item}
                  </Chip>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

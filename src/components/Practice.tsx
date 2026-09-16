import { Reveal } from "@/components/Reveal"
import { Card } from "@/components/ui/card"

const SKILLS = [
  {
    category: "languages",
    items: ["C / C++", "JavaScript / TypeScript", "Python", "SQL", "HTML / CSS"],
  },
  {
    category: "frameworks & libraries",
    items: ["Node.js / Express.js", "React.js / Next.js", "FastAPI"],
  },
  {
    category: "tools & databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Git / GitHub", "Oracle DB"],
  },
  {
    category: "concepts & coursework",
    items: [
      "Data Structures & Algorithms",
      "System Design",
      "Operating Systems",
      "Computer Networks",
      "Database Management Systems",
      "Object-Oriented Programming",
      "Deep Learning",
      "Software Engineering",
      "REST APIs",
    ],
  },
] as const

function Chip({ children }: { children: string }) {
  return (
    <span className="border border-line bg-cream2 px-[13px] py-2 font-mono text-xs text-ink">
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
            <span className="section-kicker">04 — the toolkit</span>
            <h2 className="text-[clamp(30px,3.6vw,42px)]">
              What I reach for when building.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[26px] desk:grid-cols-2">
          {SKILLS.map((skillGroup, i) => (
            <Reveal key={skillGroup.category} delay={i * 0.08}>
              <Card className="h-full rounded-none border-line bg-paper p-9">
                <h4 className="mb-[18px] font-display text-[19px] font-medium text-moss-deep">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-[9px]">
                  {skillGroup.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useRef } from "react"
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react"

import { Reveal } from "@/components/Reveal"

const ROLES = [
  {
    date: "Jul 2025 — Jun 2026",
    title: "Research Intern",
    org: "Centre of Excellence in Data Science & AI, TIET",
    points: [
      "Built a mathematical model forecasting energy usage across two hostels, weighing 10+ variables including occupancy, temperature, and seasonality.",
      "Analyzed 250+ MWh of smart-meter data, reaching 92.8% prediction accuracy against real meter readings.",
    ],
  },
  {
    date: "May 2025 — May 2026",
    title: "Software Developer Intern",
    org: "Glyptika Studios Venture Labs, TIET",
    points: [
      "Led an inventory management build for the Indian Army's 507 Workshop, automating manual data entry and resource tracking.",
      "Migrated 15,000+ legacy DBF/CSV files into a normalized PostgreSQL database, closing out years of data inconsistency.",
      "Designed and shipped 20+ production FastAPI endpoints handling 500+ daily resource requests.",
    ],
  },
  {
    date: "Oct 2024 — May 2025",
    title: "Backend Intern",
    org: "Medlr — Remote",
    points: [
      "Built core REST APIs for pharmacy claiming and secure authentication, onboarding 20+ pharmacies and 10,000+ medicines.",
      "Engineered a large-file upload pipeline with Multer and GridFS, cutting payload failures by 95%.",
      "Implemented a greedy Set Cover algorithm for fast multi-medicine search, minimizing pharmacy count and delivery cost.",
    ],
  },
] as const

const STEM =
  "M20,8 C11,90 28,170 16,250 C7,330 31,410 19,490 C9,570 30,650 18,730 C12,800 26,850 20,892"

function VineLeaf({
  progress,
  appearAt,
  x,
  y,
  flip,
  reduced,
}: {
  progress: MotionValue<number>
  appearAt: number
  x: number
  y: number
  flip?: boolean
  reduced: boolean
}) {
  const opacity = useTransform(
    progress,
    [appearAt - 0.06, appearAt + 0.04],
    [0, 1],
  )
  const scale = useTransform(
    progress,
    [appearAt - 0.06, appearAt + 0.1],
    [0.35, 1],
  )
  const d = flip
    ? "M0,0 C-7,-4 -12,-2 -14,4 C-9,3 -3,4 0,0"
    : "M0,0 C7,-4 12,-2 14,4 C9,3 3,4 0,0"

  return (
    <g transform={`translate(${x} ${y})`}>
      <motion.path
        d={d}
        fill="#4C6B4A"
        fillOpacity={0.85}
        style={
          reduced
            ? undefined
            : { opacity, scale, transformOrigin: "0px 0px" }
        }
      />
    </g>
  )
}

function Vine({
  progress,
  reduced,
}: {
  progress: MotionValue<number>
  reduced: boolean
}) {
  return (
    <svg
      className="pointer-events-none absolute top-1.5 bottom-0 left-0 w-10"
      viewBox="0 0 40 900"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d={STEM}
        fill="none"
        stroke="#4C6B4A"
        strokeWidth={1.85}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength: reduced ? 1 : progress }}
      />
      <motion.path
        d={STEM}
        fill="none"
        stroke="#33492F"
        strokeWidth={0.6}
        strokeLinecap="round"
        strokeDasharray="2 11"
        opacity={0.45}
        style={{ pathLength: reduced ? 1 : progress }}
      />
      <VineLeaf progress={progress} appearAt={0.12} x={18} y={118} reduced={reduced} />
      <VineLeaf progress={progress} appearAt={0.38} x={22} y={340} flip reduced={reduced} />
      <VineLeaf progress={progress} appearAt={0.64} x={17} y={560} reduced={reduced} />
      <VineLeaf progress={progress} appearAt={0.86} x={23} y={760} flip reduced={reduced} />
    </svg>
  )
}

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.82", "end 0.55"],
  })
  const progress = useSpring(scrollYProgress, {
    stiffness: 54,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <section id="experience" className="scroll-mt-[76px] border-t border-line py-24">
      <div className="wrap">
        <div className="mb-[52px] flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="section-kicker">02 — the record</span>
            <h2 className="text-[clamp(30px,3.6vw,42px)]">
              Where I've been building.
            </h2>
          </div>
        </div>

        <Reveal>
          <div ref={timelineRef} className="relative pl-14">
            <Vine progress={progress} reduced={!!reduceMotion} />

            {ROLES.map((role) => (
              <article
                key={role.title}
                className="relative pb-14 last:pb-0"
              >
                <span
                  className="leaf-sway absolute top-0.5 -left-14 size-3.5 border-2 border-paper bg-citrus shadow-[0_0_0_1px_#4C6B4A]"
                  style={{ borderRadius: "0 60% 60% 60%" }}
                  aria-hidden="true"
                />
                <time className="mb-1.5 block font-mono text-xs tracking-[0.04em] text-moss">
                  {role.date}
                </time>
                <h3 className="mb-0.5 text-[23px]">{role.title}</h3>
                <span className="mb-3.5 block font-mono text-[13px] text-berry">
                  {role.org}
                </span>
                <ul className="max-w-[680px] list-none">
                  {role.points.map((point) => (
                    <li
                      key={point}
                      className="relative mb-2.5 pl-[18px] text-[15px] text-ink/82 before:absolute before:left-0 before:text-citrus before:content-['—']"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

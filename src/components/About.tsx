import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react"
import { Reveal } from "@/components/Reveal"
import { TextAnimate } from "@/components/magicui/text-animate"

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10px" })
  const spring = useSpring(0, { duration: 1500, bounce: 0 })
  
  useEffect(() => {
    if (inView) {
      spring.set(value)
    }
  }, [inView, spring, value])

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(2)
      }
    })
  }, [spring])

  return <span ref={ref}>0.00</span>
}



function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div style={{ perspective: "1000px" }} className="w-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative w-full overflow-hidden border border-line bg-cream2 p-6 transition-shadow hover:shadow-xl desk:p-10"
      >
        <div style={{ transform: "translateZ(40px)" }} className="relative z-10">
          {children}
        </div>
      </motion.div>
    </div>
  )
}

export function About() {

  return (
    <section id="about" className="scroll-mt-[76px] border-t border-line py-24">
      <div className="wrap">
        <span className="eyebrow mb-8 block">01 — who's asking</span>
        
        <div className="mb-14">
          <h2 className="mb-6 max-w-[820px] font-display text-[clamp(26px,3vw,38px)] font-normal leading-[1.2] text-ink">
            <TextAnimate animation="blurInUp" by="word" once className="block">
              Backend engineer. Calm under load.
            </TextAnimate>
          </h2>
        </div>

        <Reveal delay={0.4}>
          <TiltCard>
            <div className="flex flex-col gap-10">
              
              {/* Top Section: GPA & College filling horizontally */}
              <div className="flex flex-col gap-10 desk:flex-row desk:items-end desk:justify-between">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-ink/50">Current GPA</div>
                  <div className="mt-1 font-display text-[54px] font-medium leading-none text-berry">
                    <AnimatedCounter value={9.57} />
                  </div>
                </div>
                
                <div className="desk:text-right">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-ink/50">Education</div>
                  <div className="mt-2 text-lg font-medium text-ink">BTech Computer Engineering</div>
                  <div className="text-ink/60">Thapar Institute of Technology</div>
                </div>
              </div>


            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  )
}

import { BlurFade } from "@/components/magicui/blur-fade"
import { TextAnimate } from "@/components/magicui/text-animate"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <header className="relative pt-[84px] pb-[60px]">
      <div className="wrap grid items-center gap-8 desk:grid-cols-[1.25fr_0.85fr] desk:gap-16">
        <div>
          <BlurFade delay={0.05} duration={0.6} blur="4px">
            <span className="mb-2.5 inline-block origin-left -rotate-2 font-script text-[26px] text-berry">
              hi — come on in.
            </span>
          </BlurFade>
          <h1 className="font-display text-[clamp(52px,7vw,92px)] font-medium leading-[0.98]">
            <TextAnimate
              as="span"
              animation="blurInUp"
              by="character"
              once
              delay={0.12}
              duration={0.55}
              className="block"
            >
              Ananya
            </TextAnimate>
            <TextAnimate
              as="span"
              animation="blurInUp"
              by="character"
              once
              delay={0.32}
              duration={0.55}
              className="block italic text-moss-deep"
              segmentClassName="italic"
            >
              Pahwa
            </TextAnimate>
          </h1>
          <BlurFade delay={0.45} duration={0.6} blur="4px">
            <p className="mt-[22px] max-w-[480px] text-[18px] text-ink/82">
              Computer engineer with a painter's eye. I build backend systems
              that hold up under load, and I spend the rest of my hours reading,
              painting, and paying attention — to people, to plates, to
              whatever's growing.
            </p>
          </BlurFade>
          <BlurFade delay={0.55} duration={0.55} blur="3px">
            <div className="mt-7 flex flex-wrap gap-2.5">
              {[
                "backend engineering",
                "systems design",
                "applied ML",
                "painting",
                "quietly spiritual",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-cream2 px-3 py-[7px] font-mono text-[11.5px] tracking-[0.05em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </BlurFade>
          <BlurFade delay={0.65} duration={0.5} blur="2px">
            <div className="mt-[34px] flex items-center gap-4">
              <Button variant="solid" asChild>
                <a href="#projects">see the work</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#contact">say hello</a>
              </Button>
            </div>
          </BlurFade>
        </div>

        <BlurFade
          delay={0.2}
          duration={0.8}
          direction="left"
          offset={12}
          blur="8px"
          className="relative order-first max-w-[280px] desk:order-none desk:max-w-none"
        >
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-mist">
              <img
                src="/ananya-portrait.png"
                alt="Portrait of Ananya Pahwa, standing against a pale wall in a green shirt and dark jacket"
                className="size-full object-cover [filter:saturate(0.92)_contrast(1.02)]"
              />
              <span className="pointer-events-none absolute inset-0 rounded-lg border border-ink/18" />
            </div>
            <div className="absolute -bottom-[18px] -left-[18px] z-20 max-w-[210px] bg-moss-deep px-4 py-2.5 font-mono text-[11px] leading-normal tracking-[0.05em] text-paper">
              Patiala, India — BTech Computer Engineering, Thapar Institute,
              class of 2027
            </div>
          </div>
        </BlurFade>
      </div>
    </header>
  )
}

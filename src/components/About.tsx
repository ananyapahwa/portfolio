import { Reveal } from "@/components/Reveal"

export function About() {
  return (
    <section id="about" className="scroll-mt-[76px] border-t border-line py-24">
      <div className="wrap">
        <span className="eyebrow">01 — who's asking</span>
        <Reveal>
          <p className="mb-12 max-w-[820px] font-display text-[clamp(22px,2.6vw,30px)] font-normal italic leading-[1.5] text-ink">
            I like systems that don't break under pressure, and I like{" "}
            <span className="font-script not-italic text-berry">people</span>{" "}
            for roughly the same reason — I've always been good at reading a
            room before I read the requirements doc. Most days I'm somewhere
            between a terminal and a sketchbook.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid border border-line desk:grid-cols-2">
            <div className="border-b border-line bg-cream2 p-11 desk:border-b-0 desk:border-r">
              <h3 className="mb-4 text-2xl text-moss-deep">how I build</h3>
              <p className="mb-3.5 text-[15.5px] text-ink/82">
                I'm a BTech Computer Engineering student at Thapar Institute of
                Engineering and Technology, currently holding a 9.57 GPA. I've
                spent the last two years in backend-heavy internships — designing
                APIs, wrangling databases, and forecasting things that don't want
                to be forecast.
              </p>
              <p className="mb-3.5 text-[15.5px] text-ink/82">
                I care more about a system that behaves correctly at 2am than
                one that looks clever in a demo. Load testing, fault tolerance,
                and clean data models are where I get genuinely excited.
              </p>
              <span className="mt-5 block font-mono text-xs text-moss">
                C++ · TypeScript · Python · PostgreSQL · Redis · FastAPI
              </span>
            </div>
            <div className="p-11">
              <h3 className="mb-4 text-2xl text-berry">how I see</h3>
              <p className="mb-3.5 text-[15.5px] text-ink/82">
                Outside of the codebase, I paint — mostly for no one, which is
                the point. I read constantly, I'm careful about what I put in my
                body, and I show up at the gym because a steady body makes for a
                steady mind.
              </p>
              <p className="mb-3.5 text-[15.5px] text-ink/82">
                I'd call myself spiritual before religious — more interested in
                staying grounded than in ritual. People tend to tell me I'm easy
                to be around. I'll take it.
              </p>
              <span className="mt-5 block font-mono text-xs text-moss">
                painting · reading · strength training · mindful eating ·
                noticing things
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

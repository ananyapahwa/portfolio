import { Reveal } from "@/components/Reveal"

export function Philosophy() {
  return (
    <section className="border-t border-line py-[110px] text-center">
      <div className="wrap">
        <Reveal>
          <blockquote className="mx-auto max-w-[780px] font-display text-[clamp(26px,4vw,44px)] leading-[1.45] text-moss-deep italic">
            "A well-designed system and a well-lived day follow the same rule —
            nothing works if you're not paying attention."
          </blockquote>
          <span className="mt-6 block font-script text-[22px] text-berry">
            — a note to self, kept on the wall above my desk
          </span>
        </Reveal>
      </div>
    </section>
  )
}

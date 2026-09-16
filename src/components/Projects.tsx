import { Reveal } from "@/components/Reveal"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-card"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.89 5.07 5.07 0 0 0-.15-3.84s-1.18-.38-3.9 1.47a13.38 13.38 0 0 0-7 0C6.27 2.23 5.09 2.61 5.09 2.61a5.07 5.07 0 0 0-.15 3.84 5.44 5.44 0 0 0-1.5 3.89c0 5.45 3.3 6.64 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
  )
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
  )
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
  )
}

const PROJECTS = [
  {
    num: "relay",
    title: "Webhook Delivery Service",
    stack: "Node.js · TypeScript · React · PostgreSQL · Redis",
    body: "A distributed webhook system that decouples ingestion from delivery via Redis Streams — sub-200ms p95 latency and a >99% success rate under load, with a fault-tolerant worker pool and zero message loss verified by a chaos test suite.",
    links: [
      { label: "github", icon: GithubIcon, href: "https://github.com/ananyapahwa/relay" },
      { label: "video", icon: PlayIcon, href: "https://drive.google.com/file/d/1qnLkD57kzp64H_avetOmZpSzvl9-u5ld/view?usp=sharing" },
    ],
  },
  {
    num: "synapse",
    title: "Adaptive Learning Engine",
    stack: "Redis · PostgreSQL · ChromaDB · Ollama",
    body: "A RAG pipeline over Llama 3.1 with concept-scoped chunking, modeling student knowledge-state with Item Response Theory and Bayesian Knowledge Tracing to trigger interventions when mastery drops below 85%. Built to hold 1,000+ concurrent users.",
    links: [
      { label: "github", icon: GithubIcon, href: "https://github.com/ananyapahwa/quiz-portal" },
      { label: "live demo", icon: ExternalLinkIcon, href: "https://quiz-portal-green.vercel.app/login" },
    ],
  },
  {
    num: "physiocare",
    title: "PhysioCare Portal",
    stack: "Python · PyTorch · Mediapipe · Flask",
    body: "An LSTM model for human activity classification from smart-insole data, paired with real-time Mediapipe skeletal tracking so doctors can monitor patient recovery remotely. Second Runner-Up at the Israel–India Hackathon.",
    links: [
      { label: "github", icon: GithubIcon, href: "https://github.com/Shalom-Swasth-Solution" },
      { label: "video", icon: PlayIcon, href: "https://youtu.be/qIL_3G8OD04" },
    ],
  },
] as const

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-[76px] border-t border-line py-24">
      <div className="wrap">
        <div className="mb-[52px] flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="section-kicker">03 — selected work</span>
            <h2 className="text-[clamp(30px,3.6vw,42px)]">
              Three things I'd walk you through.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[26px] desk:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.num} delay={i * 0.08}>
              <CardContainer containerClassName="h-full w-full" className="h-full w-full">
                <CardBody className="h-full w-full">
                  <Card className="h-full min-h-[340px] w-full rounded-[3px] px-7 py-8">
                    <CardItem translateZ={18} className="w-full">
                      <CardHeader>
                        <span className="mb-5 font-mono text-[11px] text-moss">
                          {project.num}
                        </span>
                        <CardTitle className="mb-2.5">{project.title}</CardTitle>
                        <p className="mb-4 font-mono text-[11px] leading-[1.7] text-berry">
                          {project.stack}
                        </p>
                      </CardHeader>
                    </CardItem>
                    <CardItem translateZ={8} className="flex w-full flex-1 flex-col">
                      <CardContent>
                        <CardDescription className="flex-1">
                          {project.body}
                        </CardDescription>
                      </CardContent>
                    </CardItem>
                    <CardItem translateZ={22} className="w-full">
                      <CardFooter className="flex gap-4">
                        {project.links.map((link) => {
                          const Icon = link.icon;
                          return (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-ink/40 transition-colors hover:text-moss-deep"
                              title={link.label}
                            >
                              <Icon className="h-5 w-5" />
                            </a>
                          )
                        })}
                      </CardFooter>
                    </CardItem>
                  </Card>
                </CardBody>
              </CardContainer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

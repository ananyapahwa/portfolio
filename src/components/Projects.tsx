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

const PROJECTS = [
  {
    num: "relay",
    title: "Webhook Delivery Service",
    stack: "Node.js · TypeScript · React · PostgreSQL · Redis",
    body: "A distributed webhook system that decouples ingestion from delivery via Redis Streams — sub-200ms p95 latency and a >99% success rate under load, with a fault-tolerant worker pool and zero message loss verified by a chaos test suite.",
    links: [
      { label: "github", href: "#" },
      { label: "video", href: "#" },
    ],
  },
  {
    num: "synapse",
    title: "Adaptive Learning Engine",
    stack: "Redis · PostgreSQL · ChromaDB · Ollama",
    body: "A RAG pipeline over Llama 3.1 with concept-scoped chunking, modeling student knowledge-state with Item Response Theory and Bayesian Knowledge Tracing to trigger interventions when mastery drops below 85%. Built to hold 1,000+ concurrent users.",
    links: [{ label: "github", href: "#" }],
  },
  {
    num: "physiocare",
    title: "PhysioCare Portal",
    stack: "Python · PyTorch · Mediapipe · Flask",
    body: "An LSTM model for human activity classification from smart-insole data, paired with real-time Mediapipe skeletal tracking so doctors can monitor patient recovery remotely. Second Runner-Up at the Israel–India Hackathon.",
    links: [
      { label: "github", href: "#" },
      { label: "video", href: "#" },
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
                      <CardFooter>
                        {project.links.map((link) => (
                          <Button key={link.label} variant="link" asChild>
                            <a href={link.href}>{link.label}</a>
                          </Button>
                        ))}
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

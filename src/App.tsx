import { About } from "@/components/About"
import { Experience } from "@/components/Experience"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { Nav } from "@/components/Nav"
import { Philosophy } from "@/components/Philosophy"
import { Practice } from "@/components/Practice"
import { Projects } from "@/components/Projects"

export default function App() {
  return (
    <div id="top">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Practice />
        <Philosophy />
      </main>
      <Footer />
    </div>
  )
}

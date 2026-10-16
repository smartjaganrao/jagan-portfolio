import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Marquee } from "./components/Marquee"
import { About } from "./components/About"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { AIShowcase } from "./components/AIShowcase"
import { Services } from "./components/Services"
import { Experience } from "./components/Experience"
import { Education } from "./components/Education"
import { Testimonials } from "./components/Testimonials"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { CursorGlow } from "./components/CursorGlow"

export default function App() {
  return (
    <div className="relative min-h-screen bg-void text-slate-100">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <AIShowcase />
        <Services />
        <Experience />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

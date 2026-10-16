import { motion } from "framer-motion"
import { Brain, Layers, ShieldCheck, Mail, Phone } from "lucide-react"
import { profile } from "../data/content"
import { SectionHeading } from "./SectionHeading"

const pillars = [
  {
    icon: Layers,
    title: "Enterprise React architecture",
    text: "Atomic Design libraries, Redux Toolkit, performance budgets, and WCAG 2.1 AA for regulated banking products.",
  },
  {
    icon: ShieldCheck,
    title: "Banking & fintech domain",
    text: "Fund transfers, trade finance LC flows, loan origination, RBAC, and high-volume transaction UIs at Capgemini.",
  },
  {
    icon: Brain,
    title: "GenAI trajectory",
    text: "LangChain, RAG, Ollama, ChromaDB, CrewAI — applying frontend craft to the next generation of AI fintech.",
  },
]

export function About() {
  return (
    <section id="about" className="section-pad relative py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="About"
              title={
                <>
                  Senior React developer shaping{" "}
                  <span className="gradient-text">fintech-grade interfaces</span>
                </>
              }
            />
            <p className="mt-5 text-[15px] leading-relaxed text-slate-300">{profile.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-slate-300 transition hover:border-violet-400/40"
              >
                <Mail className="h-3.5 w-3.5 text-violet-300" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-slate-300 transition hover:border-cyan-400/40"
              >
                <Phone className="h-3.5 w-3.5 text-cyan-300" />
                {profile.phone}
              </a>
            </div>
            <div className="mt-6">
              <div className="text-[11px] uppercase tracking-wider text-slate-500">Languages</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {profile.languages.map((l) => (
                  <span key={l.name} className="tag !bg-void/40">
                    {l.name}
                    <span className="text-slate-500">· {l.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="card-hover group flex gap-4 rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.05] to-transparent p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-cyan-400/15 text-violet-200 ring-1 ring-white/10">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

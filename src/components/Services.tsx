import { motion } from "framer-motion"
import { Bot, Globe, LayoutDashboard, Sparkles } from "lucide-react"
import { processSteps, services } from "../data/content"
import { SectionHeading } from "./SectionHeading"

const icons = {
  layout: LayoutDashboard,
  bot: Bot,
  spark: Sparkles,
  globe: Globe,
}

export function Services() {
  return (
    <section id="services" className="section-pad relative py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="What I deliver"
          title={
            <>
              Senior craft for <span className="gradient-text">serious products</span>
            </>
          }
          description="Banking UI systems, fintech journeys, GenAI surfaces, and frontend leadership — the same standards used at Capgemini."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons]
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="card-hover rounded-3xl border border-white/8 bg-gradient-to-b from-white/[0.05] to-transparent p-6 sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-cyan-400/15 text-cyan-200 ring-1 ring-white/10">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.deliverables.map((d) => (
                    <span key={d} className="tag !bg-void/40">
                      {d}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-16 rounded-3xl border border-white/8 bg-panel/50 p-6 sm:p-8">
          <h3 className="font-display text-lg font-semibold text-white">How engagement works</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative rounded-2xl border border-white/8 bg-void/40 p-4"
              >
                <div className="font-mono text-xs text-violet-300">{step.step}</div>
                <div className="mt-2 font-semibold text-white">{step.title}</div>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

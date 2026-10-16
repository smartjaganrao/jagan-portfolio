import { motion } from "framer-motion"
import { skills } from "../data/content"
import { SectionHeading } from "./SectionHeading"

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-slate-200">{name}</span>
        <span className="font-mono text-xs text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

const columns = [
  { title: "Frontend & UI", key: "frontend" as const, accent: "from-violet-300 to-violet-100" },
  { title: "AI / GenAI", key: "genai" as const, accent: "from-cyan-300 to-cyan-100" },
  { title: "Engineering", key: "engineering" as const, accent: "from-pink-300 to-pink-100" },
]

export function Skills() {
  return (
    <section id="skills" className="section-pad relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(109,40,217,0.1),transparent_55%)]" />
      <div className="container-x relative">
        <SectionHeading
          align="center"
          eyebrow="Skills"
          title={
            <>
              Stack proven in <span className="gradient-text">production banking</span>
            </>
          }
          description="React-first frontend mastery with enterprise testing, cloud delivery, and a growing GenAI toolkit."
          className="mx-auto"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {columns.map((col, ci) => (
            <motion.div
              key={col.key}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
              className="rounded-3xl border border-white/8 bg-panel/70 p-6 backdrop-blur glow-ring"
            >
              <h3
                className={`font-display text-lg font-semibold bg-gradient-to-r ${col.accent} bg-clip-text text-transparent`}
              >
                {col.title}
              </h3>
              <div className="mt-6 space-y-5">
                {skills[col.key].map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} delay={0.05 + i * 0.05} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from "framer-motion"
import { Award, GraduationCap, BookOpen } from "lucide-react"
import { certifications, education } from "../data/content"
import { SectionHeading } from "./SectionHeading"

export function Education() {
  return (
    <section id="education" className="section-pad relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(8,145,178,0.08),transparent_55%)]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Education & growth"
          title={
            <>
              Foundations & <span className="gradient-text">continuous upskilling</span>
            </>
          }
          description="Formal CS education plus certifications spanning React, full-stack, GenAI, and cloud."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-300">
              <GraduationCap className="h-4 w-4 text-violet-300" />
              Education
            </div>
            <div className="space-y-4">
              {education.map((ed, i) => (
                <motion.div
                  key={ed.degree}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card-hover rounded-2xl border border-white/8 bg-white/[0.03] p-5"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="font-display text-base font-semibold text-white sm:text-lg">
                      {ed.degree}
                    </h3>
                    <span className="font-mono text-[11px] text-slate-500">{ed.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{ed.school}</p>
                  <p className="mt-1 text-xs text-cyan-300/80">{ed.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-300">
              <Award className="h-4 w-4 text-cyan-300" />
              Certifications & upskilling
            </div>
            <div className="space-y-3">
              {certifications.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 rounded-2xl border border-white/8 bg-panel/50 p-4"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/15 text-violet-200">
                    <BookOpen className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-white">{c.title}</h3>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                          c.status === "Completed"
                            ? "bg-emerald-400/15 text-emerald-300"
                            : "bg-amber-400/15 text-amber-200"
                        }`}
                      >
                        {c.status}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">{c.org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

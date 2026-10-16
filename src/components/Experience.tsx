import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { experience } from "../data/content"
import { SectionHeading } from "./SectionHeading"

export function Experience() {
  const [open, setOpen] = useState<string>(experience[0]?.company ?? "")

  return (
    <section id="experience" className="section-pad relative py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Career path in <span className="gradient-text">enterprise frontend</span>
            </>
          }
          description="Capgemini banking leadership, IoT platforms at Srushty, and earlier web craft foundations."
        />

        <div className="relative mt-12 space-y-4">
          <div className="absolute left-[15px] top-4 bottom-4 hidden w-px bg-gradient-to-b from-violet-500/50 via-cyan-400/25 to-transparent md:block" />

          {experience.map((item, i) => {
            const isOpen = open === item.company
            return (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative md:pl-12"
              >
                <div className="absolute left-[11px] top-7 hidden h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 shadow-[0_0_14px_rgba(167,139,250,0.7)] md:block" />

                <div
                  className={`overflow-hidden rounded-3xl border transition ${
                    isOpen
                      ? "border-violet-400/30 bg-panel/80 glow-ring"
                      : "border-white/8 bg-white/[0.03] hover:border-white/15"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? "" : item.company)}
                    className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                  >
                    <div>
                      <div className="font-display text-lg font-semibold text-white sm:text-xl">
                        {item.role}
                      </div>
                      <div className="mt-1 text-sm text-violet-200/90">{item.company}</div>
                      {item.client && (
                        <div className="mt-1 text-xs text-slate-500">Client: {item.client}</div>
                      )}
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <span className="font-mono text-[11px] text-slate-500 sm:text-xs">{item.period}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-slate-400 transition ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="border-t border-white/8"
                      >
                        <div className="space-y-6 p-5 sm:p-6">
                          {item.projects.map((proj) => (
                            <div
                              key={proj.name}
                              className="rounded-2xl border border-white/8 bg-void/40 p-4 sm:p-5"
                            >
                              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                                <h4 className="font-semibold text-white">{proj.name}</h4>
                                <span className="font-mono text-[11px] text-slate-500">{proj.period}</span>
                              </div>
                              <p className="mt-2 text-sm text-slate-400">{proj.summary}</p>
                              <ul className="mt-3 space-y-2">
                                {proj.points.map((point) => (
                                  <li
                                    key={point}
                                    className="flex gap-2 text-sm leading-relaxed text-slate-300"
                                  >
                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                                    {point}
                                  </li>
                                ))}
                              </ul>
                              <p className="mt-3 font-mono text-[11px] leading-relaxed text-slate-500">
                                {proj.stack}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

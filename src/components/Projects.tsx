import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Layers } from "lucide-react"
import { projects, type Project } from "../data/content"
import { SectionHeading } from "./SectionHeading"

const filters = ["All", "Desktop", "AI / GenAI", "Banking", "Fintech", "Enterprise"] as const

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      className={`card-hover group relative overflow-hidden rounded-3xl border border-white/10 bg-panel/60 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70`} />
      <div className="absolute inset-0 dot-grid opacity-25" />
      <div className="relative flex h-full flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="tag !py-1 !text-[11px]">{project.category}</span>
              <span className="font-mono text-[11px]">{project.year}</span>
            </div>
            <h3 className="mt-3 font-display text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
            <p className="mt-1 text-sm text-violet-200/90 sm:text-base">{project.subtitle}</p>
            {project.org && (
              <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-500">{project.org}</p>
            )}
          </div>
          {(project.github || project.link) ? (
            <a
              href={project.github || project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:scale-105 hover:border-violet-400 hover:bg-violet-500/20 group-hover:border-violet-400/40 group-hover:bg-violet-500/20"
              title="View on GitHub"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition group-hover:border-violet-400/40 group-hover:bg-violet-500/20">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          )}
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/8 bg-void/45 px-2.5 py-1 text-[11px] text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-3 gap-2 pt-6">
          {project.metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-white/8 bg-void/55 px-3 py-2.5">
              <div className="font-display text-sm font-semibold text-white sm:text-base">{m.value}</div>
              <div className="text-[10px] uppercase tracking-wide text-slate-500">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All")

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="work" className="section-pad relative py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Impact across <span className="gradient-text">banking, IoT & GenAI</span>
              </>
            }
            description="From Capgemini banking portals serving millions to IoT health kiosks and AI side projects — craft that scales."
          />

          <div className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                  filter === f
                    ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/25"
                    : "border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <div className="mt-16 flex flex-col items-center gap-3 text-slate-500">
            <Layers className="h-8 w-8 opacity-50" />
            <p>No projects in this filter yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}

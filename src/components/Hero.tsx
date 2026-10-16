import { motion } from "framer-motion"
import {
  ArrowDownRight,
  Bot,
  Building2,
  Code2,
  MapPin,
  Sparkles,
  Zap,
} from "lucide-react"
import { profile } from "../data/content"

const chips = [
  { icon: Code2, label: "React · TypeScript" },
  { icon: Building2, label: "Banking & Fintech" },
  { icon: Bot, label: "GenAI · LangChain" },
  { icon: Zap, label: "Frontend Architecture" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden mesh-bg noise pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <div className="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full bg-violet-600/25 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute -right-24 top-32 h-[28rem] w-[28rem] rounded-full bg-cyan-500/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-pink-500/10 blur-[100px]" />

      {/* Decorative orbit ring */}
      <div className="pointer-events-none absolute right-[8%] top-28 hidden h-72 w-72 opacity-30 lg:block">
        <div className="animate-orbit h-full w-full rounded-full border border-dashed border-violet-400/30" />
      </div>

      <div className="section-pad relative z-10">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex flex-wrap items-center gap-2"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {profile.availability}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400">
                <MapPin className="h-3 w-3 text-cyan-300" />
                {profile.location}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.45 }}
              className="mb-3 font-mono text-[11px] uppercase tracking-[0.24em] text-cyan-300/85"
            >
              {profile.role}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-display text-[2.35rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.85rem]"
            >
              Banking-grade React.
              <br />
              <span className="gradient-text">GenAI-ready products.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.5 }}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-300 sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#work" className="btn-primary">
                View selected work
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a href="#experience" className="btn-ghost">
                Capgemini experience
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.5 }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {chips.map(({ icon: Icon, label }) => (
                <span key={label} className="tag !border-white/10 !bg-white/[0.03] !text-slate-200">
                  <Icon className="h-3.5 w-3.5 text-violet-300" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2.2rem] bg-gradient-to-br from-violet-500/25 via-transparent to-cyan-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.85rem] premium-border p-[1px] shadow-2xl">
              <div className="rounded-[1.75rem] bg-gradient-to-b from-panel-2 via-panel to-void p-5 sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90 shadow-[0_0_8px_rgba(251,113,133,0.6)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    profile · live
                  </span>
                </div>

                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-cyan-400 to-pink-400 p-[1.5px]">
                    <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-void font-display text-lg font-bold text-white">
                      {profile.initials}
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold text-white">{profile.name}</div>
                    <div className="text-xs text-slate-400">{profile.domain}</div>
                    <div className="mt-1 font-mono text-[10px] text-cyan-300/80">@ Capgemini · Senior React</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="mb-2 flex items-center gap-2 text-xs text-slate-400">
                      <Building2 className="h-3.5 w-3.5 text-violet-300" />
                      Flagship impact
                    </div>
                    <p className="text-sm leading-relaxed text-slate-200">
                      Led frontend for a <span className="text-cyan-300">2M+ user</span> digital banking
                      portal — Atomic Design library, Lighthouse{" "}
                      <span className="gold-text font-semibold">62 → 91</span>, WCAG 2.1 AA for RBI.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-4">
                    <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-cyan-300/85">
                      <Sparkles className="h-3 w-3" />
                      Currently exploring
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {profile.exploring.slice(0, 4).map((e) => (
                        <span
                          key={e}
                          className="rounded-full border border-white/10 bg-void/50 px-2.5 py-1 text-[11px] text-slate-300"
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {[
                      { k: "Experience", v: "8+ yrs" },
                      { k: "Components", v: "40+" },
                      { k: "Latency", v: "−40%" },
                    ].map((m) => (
                      <div
                        key={m.k}
                        className="rounded-xl border border-white/8 bg-void/70 px-2.5 py-2.5 text-center"
                      >
                        <div className="font-display text-sm font-semibold text-white">{m.v}</div>
                        <div className="text-[9px] uppercase tracking-wide text-slate-500">{m.k}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-2 animate-float rounded-2xl border border-white/10 bg-panel/95 px-3.5 py-2.5 shadow-2xl backdrop-blur sm:-left-5">
              <div className="flex items-center gap-2.5 text-xs">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
                  <Bot className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-medium text-white">LangChain · RAG · Claude UX</div>
                  <div className="text-[10px] text-slate-400">Upskilling into GenAI products</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.55 }}
          className="container-x mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
        >
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-5 text-center backdrop-blur transition hover:border-violet-400/30 hover:bg-white/[0.05] sm:px-5"
            >
              <div className="font-display text-2xl font-bold gradient-text-soft sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs text-slate-400 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

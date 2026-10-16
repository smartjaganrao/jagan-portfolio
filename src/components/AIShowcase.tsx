import { motion } from "framer-motion"
import { MessageSquare, Shield, Workflow, Cpu } from "lucide-react"
import { aiCapabilities, profile } from "../data/content"
import { SectionHeading } from "./SectionHeading"

const demoMessages = [
  {
    role: "user",
    text: "Build a LangChain RAG flow for trade finance document Q&A with citations.",
  },
  {
    role: "assistant",
    text: "Plan: ingest LC docs → ChromaDB embeddings → retrieval with source chips → React streaming panel. Stack: FastAPI + LangChain + TypeScript UI.",
  },
  {
    role: "tool",
    text: "tool · chroma.query · top_k=4 · confidence=0.86 · sources=LC_draft_v3.pdf",
  },
]

export function AIShowcase() {
  return (
    <section id="ai" className="section-pad relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,145,178,0.1),transparent_60%)]" />
      <div className="container-x relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Gen AI · LangChain · Claude UX"
              title={
                <>
                  Actively building the <span className="gradient-text">AI layer</span>
                </>
              }
              description="From banking React mastery into Generative AI — RAG, agents, local LLMs, and product interfaces that make models usable."
            />

            <div className="mt-6 flex flex-wrap gap-2">
              {profile.exploring.map((e) => (
                <span key={e} className="tag">
                  {e}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {aiCapabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                >
                  <h3 className="text-sm font-semibold text-white">{cap.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{cap.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/15 via-transparent to-cyan-400/15 blur-xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-panel glow-ring">
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">GenAI Lab</div>
                    <div className="text-[11px] text-slate-500">RAG · agents · fintech</div>
                  </div>
                </div>
                <div className="flex gap-2 text-[10px]">
                  <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-emerald-300">active</span>
                  <span className="rounded-full bg-white/5 px-2 py-1 text-slate-400">LangChain</span>
                </div>
              </div>

              <div className="space-y-3 p-5">
                {demoMessages.map((m) => (
                  <div
                    key={m.text}
                    className={`rounded-2xl border p-3.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "ml-6 border-white/10 bg-white/[0.04] text-slate-200"
                        : m.role === "tool"
                          ? "border-amber-400/20 bg-amber-400/5 font-mono text-xs text-amber-100/90"
                          : "mr-4 border-violet-400/20 bg-violet-500/10 text-slate-100"
                    }`}
                  >
                    <div className="mb-1.5 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-slate-500">
                      {m.role === "user" && <MessageSquare className="h-3 w-3" />}
                      {m.role === "assistant" && <Workflow className="h-3 w-3 text-violet-300" />}
                      {m.role === "tool" && <Shield className="h-3 w-3 text-amber-300" />}
                      {m.role}
                    </div>
                    {m.text}
                  </div>
                ))}
              </div>

              <div className="border-t border-white/8 bg-void/50 p-4">
                <div className="flex flex-wrap gap-2">
                  {["ChromaDB", "Ollama", "CrewAI", "FastAPI", "React"].map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

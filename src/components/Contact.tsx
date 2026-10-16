import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react"

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
    </svg>
  )
}
import { profile } from "../data/content"
import { SectionHeading } from "./SectionHeading"

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(`Portfolio inquiry — ${data.get("type")}`)
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nType: ${data.get("type")}\n\n${data.get("message")}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="section-pad relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-50" />
      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Let's build something <span className="gradient-text">world-class</span>
                </>
              }
              description="Open to senior frontend, banking/fintech UI, and GenAI product collaborations. Reach out with the problem — I'll reply with a clear next step."
            />

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3.5 transition hover:border-violet-400/30"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs text-slate-500">Email</div>
                  <div className="text-sm text-white">{profile.email}</div>
                </div>
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3.5 transition hover:border-cyan-400/30"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs text-slate-500">Phone</div>
                  <div className="text-sm text-white">{profile.phone}</div>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/15 text-pink-300">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs text-slate-500">Location</div>
                  <div className="text-sm text-white">{profile.location}</div>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <a
                  href={profile.socials[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost !px-4 !py-2 text-sm"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={profile.socials[1].href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost !px-4 !py-2 text-sm"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-panel/80 p-6 shadow-2xl backdrop-blur sm:p-8 glow-ring"
          >
            {sent ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-12 w-12 text-emerald-400" />
                <h3 className="mt-4 font-display text-xl font-semibold text-white">Opening mail client</h3>
                <p className="mt-2 max-w-sm text-sm text-slate-400">
                  Your message is ready in your email app. You can also write directly to {profile.email}.
                </p>
                <button type="button" className="btn-ghost mt-6" onClick={() => setSent(false)}>
                  Compose another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs text-slate-400">Name</span>
                    <input
                      required
                      name="name"
                      className="w-full rounded-xl border border-white/10 bg-void/70 px-3.5 py-2.5 text-sm text-white transition placeholder:text-slate-600 focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs text-slate-400">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full rounded-xl border border-white/10 bg-void/70 px-3.5 py-2.5 text-sm text-white transition placeholder:text-slate-600 focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-xs text-slate-400">Interest</span>
                  <select
                    name="type"
                    className="w-full rounded-xl border border-white/10 bg-void/70 px-3.5 py-2.5 text-sm text-white transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20"
                    defaultValue="senior-react"
                  >
                    <option value="senior-react">Senior React / Frontend role</option>
                    <option value="banking-ui">Banking / Fintech UI</option>
                    <option value="genai">GenAI / LangChain product</option>
                    <option value="consulting">Consulting / contract</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs text-slate-400">Message</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="w-full resize-y rounded-xl border border-white/10 bg-void/70 px-3.5 py-2.5 text-sm text-white transition placeholder:text-slate-600 focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20"
                    placeholder="Role, product, timeline…"
                  />
                </label>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  Send message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

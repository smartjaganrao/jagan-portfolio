import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, CheckCircle2, Github, Linkedin } from "lucide-react"
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
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={profile.socials[1].href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost !px-4 !py-2 text-sm"
                >
                  <Github className="h-4 w-4" />
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

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sparkles, Github, Linkedin } from "lucide-react"
import { navLinks, profile } from "../data/content"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
        scrolled || open
          ? "glass-strong shadow-[0_12px_50px_rgba(0,0,0,0.45)]"
          : "bg-transparent"
      }`}
    >
      <div className="section-pad">
        <div className="container-x flex h-[4.25rem] items-center justify-between">
          <a href="#top" className="group flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl p-[1px]">
              <span className="absolute inset-0 bg-gradient-to-br from-violet-400 via-cyan-400 to-pink-400 opacity-90" />
              <span className="relative flex h-full w-full items-center justify-center rounded-[15px] bg-void font-display text-sm font-bold tracking-wide text-white">
                {profile.initials}
              </span>
            </span>
            <div className="leading-tight">
              <div className="font-display text-[13px] font-semibold tracking-wide text-white transition group-hover:text-violet-200 sm:text-sm">
                {profile.name}
              </div>
              <div className="hidden text-[10px] tracking-wide text-slate-500 sm:block">
                Senior React · Fintech · GenAI
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-[13px] text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.socials[0].href}
              target="_blank"
              rel="noreferrer"
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-violet-400/40 hover:text-white sm:inline-flex"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={profile.socials[1].href}
              target="_blank"
              rel="noreferrer"
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-cyan-400/40 hover:text-white sm:inline-flex"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-primary !hidden !px-4 !py-2 text-sm sm:!inline-flex">
              <Sparkles className="h-3.5 w-3.5" />
              Hire me
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white xl:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 xl:hidden"
          >
            <div className="section-pad py-5">
              <div className="container-x flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base text-slate-200 transition hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">
                  <Sparkles className="h-4 w-4" />
                  Hire me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

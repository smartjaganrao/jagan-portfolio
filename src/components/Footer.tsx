import { profile, navLinks } from "../data/content"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="section-pad border-t border-white/8 py-12">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 font-display text-xs font-bold text-white">
                {profile.initials}
              </span>
              <div>
                <div className="font-display text-sm font-semibold text-white">{profile.name}</div>
                <div className="text-[11px] text-slate-500">{profile.role}</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              Senior React JS Developer · Frontend Architect · Banking, Fintech & GenAI.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-slate-400 transition hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <hr className="hairline mt-10" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. {profile.location}.
          </p>
          <p className="font-mono text-[11px]">React · TypeScript · Framer Motion · Tailwind</p>
        </div>
      </div>
    </footer>
  )
}

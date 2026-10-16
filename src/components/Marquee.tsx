import { skillCloud } from "../data/content"

export function Marquee() {
  const items = [...skillCloud, ...skillCloud]

  return (
    <section className="relative overflow-hidden border-y border-white/8 bg-ink/90 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-void to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-void to-transparent" />
      <div className="marquee gap-3">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

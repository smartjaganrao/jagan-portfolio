import { motion } from "framer-motion"
import type { ReactNode } from "react"

type Props = {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 ${
          align === "center" ? "" : ""
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]" />
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.6rem] md:leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-slate-400 sm:text-base">{description}</p>
      )}
    </motion.div>
  )
}

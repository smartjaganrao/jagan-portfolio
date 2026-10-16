import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { testimonials } from "../data/content"
import { SectionHeading } from "./SectionHeading"

export function Testimonials() {
  return (
    <section className="section-pad relative py-20 md:py-24">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Reputation"
          title={
            <>
              Known for <span className="gradient-text">delivery under pressure</span>
            </>
          }
          description="Themes from banking programs, delivery stakeholders, and product collaborators."
          className="mx-auto"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-hover flex flex-col rounded-3xl border border-white/8 bg-panel/60 p-6"
            >
              <Quote className="h-8 w-8 text-violet-400/50" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">"{t.quote}"</p>
              <footer className="mt-6 border-t border-white/8 pt-4">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-xs text-slate-500">{t.title}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

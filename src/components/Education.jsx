import { motion as Motion } from "motion/react"
import { EDUCATION_CONTENT } from "../constant"
import { SepareteContent, SectionTitle, slideYMotion } from "./Utility"

function Education() {
  return (
    <SepareteContent>
      <section id="formacao" className="my-14 sm:my-20">
        <SectionTitle>Formação e certificações</SectionTitle>
        <div className="grid md:grid-cols-2 gap-5 mt-10">
          {EDUCATION_CONTENT.map((item, index) => (
            <Motion.article key={item.title} variants={slideYMotion(40, index * 0.08)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="rounded-2xl border border-neutral-700/70 bg-neutral-900/20 p-6">
              <span className="text-xs uppercase tracking-[0.2em] text-fuchsia-400">{item.type}</span>
              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 font-light text-neutral-400">{item.detail}</p>
            </Motion.article>
          ))}
        </div>
      </section>
    </SepareteContent>
  )
}
export default Education

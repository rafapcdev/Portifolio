import { motion as Motion } from "motion/react"
import { TECHNOLOGY_CATEGORIES } from "../constant"
import { SepareteContent, SectionTitle, slideYMotion } from "./Utility"

function Technologies() {
  return (
    <SepareteContent>
      <section id="tecnologias" className="my-14 sm:my-20">
        <SectionTitle>Tecnologias</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {TECHNOLOGY_CATEGORIES.map((category, index) => (
            <Motion.article key={category.name} variants={slideYMotion(40, index * 0.08)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="rounded-2xl border border-neutral-700/70 bg-neutral-900/20 p-5">
              <h3 className="text-lg font-semibold text-fuchsia-400">{category.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => <li key={item} className="rounded-full border border-neutral-700 px-3 py-1 text-sm">{item}</li>)}
              </ul>
            </Motion.article>
          ))}
        </div>
      </section>
    </SepareteContent>
  )
}
export default Technologies

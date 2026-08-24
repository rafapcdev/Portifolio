import { motion as Motion } from "motion/react"
import { SOFT_SKILLS } from "../constant"
import { SepareteContent, SectionTitle, slideYMotion } from "./Utility"

function Softskills() {
  return (
    <SepareteContent>
      <section className="my-14 sm:my-20">
        <SectionTitle>Competências comportamentais</SectionTitle>
        <Motion.ul variants={slideYMotion(40, .1)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 flex flex-wrap justify-center gap-3">
          {SOFT_SKILLS.map((skill) => <li key={skill} className="rounded-full border border-neutral-700 px-4 py-2 text-sm sm:text-base">{skill}</li>)}
        </Motion.ul>
      </section>
    </SepareteContent>
  )
}
export default Softskills

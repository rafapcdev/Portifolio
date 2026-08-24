import { SepareteContent, SectionTitle, slideXMotion } from "./Utility"
import { ABOUT_ME } from "../constant"
import { motion as Motion } from "motion/react"

function About() {
    return (

        <SepareteContent>
            <section id="sobre" className="flex flex-col gap-10 my-14 sm:my-20">
                <SectionTitle><span className="text-neutral-500">Sobre </span>{" "}mim </SectionTitle>
                <Motion.div
                        variants={slideXMotion(-100,.25)}
                        initial={"hidden"}
                        whileInView={"visible"}
                        className="mx-auto max-w-4xl rounded-2xl border border-neutral-700/70 bg-neutral-900/20 p-6 sm:p-8">
                        <p className="font-light leading-8 tracking-wide whitespace-pre-line">{ABOUT_ME}</p>
                    </Motion.div>
            </section>
        </SepareteContent>
    )
}

export default About
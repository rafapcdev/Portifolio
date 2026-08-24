import { SepareteContent, SectionTitle, slideXMotion } from "./Utility"
import { EXPERIENCES_CONTENT } from "../constant/index"
import { motion as Motion } from "motion/react"


function Experiences() {
    return (
        <SepareteContent>
            <section id="experiencia" className="my-14 sm:my-20">
                <SectionTitle>Experiência profissional</SectionTitle>
                <div className="flex flex-col gap-10 my-10">
                    {EXPERIENCES_CONTENT.map((exp, index) => {
                        return (
                            <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                                <Motion.div
                                variants={slideXMotion(-100,.25)}
                                initial={"hidden"}
                                whileInView={"visible"}
                                className="w-full md:w-1/4 md:text-center text-fuchsia-400">
                                    <span className="">{exp.year}</span>
                                </Motion.div>
                                <Motion.div
                                variants={slideXMotion(100,.25)}
                                initial={"hidden"}
                                whileInView={"visible"}
                                className="w-full md:w-2/3 flex flex-col gap-2">
                                    <h3 className="text-2xl font-semibold tracking-wide">{exp.company}</h3>
                                    <h4 className="font-thin tracking-tight">{exp.role}</h4>
                                    <span className="font-light tracking-wide">{exp.description}</span>
                                </Motion.div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </SepareteContent>
    )
}

export default Experiences
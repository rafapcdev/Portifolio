import { HERO_CONTENT } from "../constant/index"
import { SepareteContent } from "./Utility"
import imgProfile from "../assets/profile.png"
import { motion as Motion } from "motion/react"
import cvRafael from "../assets/Rafael_Pereira_Costa_CV_Desenvolvedor_web_IoT_Educador.pdf";

function Hero() {
    return (
        <SepareteContent>
            <section id="inicio" className="flex flex-col md:flex-row my-14 sm:my-20 gap-8 items-center">

                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <Motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-thin tracking-tight">{HERO_CONTENT.name}</Motion.h1>
                    <Motion.span
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.9, delay: .3 }}
                        className="text-2xl sm:text-3xl font-semibold tracking-tight bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">{HERO_CONTENT.title}</Motion.span>
                    <Motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.1, delay: 1 }}
                        className="font-light tracking-wider max-w-xl">{HERO_CONTENT.brief}</Motion.p>
                    <Motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="font-light whitespace-pre-line tracking-wider max-w-xl">
                    </Motion.p>
                    <Motion.a
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="w-fit rounded-2xl px-6 py-3 border border-neutral-700 text-lg font-semibold tracking-tight bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent"
                        href={cvRafael}
                        target="_blank"
                        download="Rafael_Pereira_Costa_CV_Desenvolvedor_web_IoT_Educador.pdf"
                        rel="noopener noreferrer"
                    >
                        Baixar CV
                    </Motion.a>
                </div>
                <div className="w-full lg:w-1/2 p-5">
                    <Motion.img
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="rounded-4xl grayscale-75 mx-auto max-h-[520px] object-cover" src={imgProfile} alt="Rafael Pereira Costa" />
                </div>
            </section>
        </SepareteContent>
    )
}

export default Hero

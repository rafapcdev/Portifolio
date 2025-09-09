import { HERO_CONTENT } from "../constant/index"
import { SepareteContent } from "./Utility"
import imgProfile from "../assets/profile.png"
import {motion} from "motion/react"
import cvRafael from "../assets/CV-Rafael.docx";


function Hero() {
    return (
        <SepareteContent>
            <div className="flex flex-col md:flex-row my-20 gap-4 items-center">

                <div className="w-full lg:w-1/2 flex flex-col gap-4  ">
                    <motion.h1 
                    initial={{x:-100, opacity:0}}
                    whileInView={{x:0, opacity:1}}
                    transition={{duration:2, delay:0}}
                    className="text-6xl font-thin tracking-tight">{HERO_CONTENT.name}</motion.h1>
                    <motion.span 
                    initial={{x:-100, opacity:0}}
                    whileInView={{x:0, opacity:1}}
                    transition={{duration:2, delay:.5}}
                    className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">{HERO_CONTENT.title}</motion.span>
                    <motion.p 
                    initial={{x:-100, opacity:0}}
                    whileInView={{x:0, opacity:1}}
                    transition={{duration:2, delay:1}}
                    className="font-light tracking-wider max-w-xl">{HERO_CONTENT.brief}</motion.p>
                    <a
                    className="rounded-2xl p-4 border border-neutral-700 text-2xl font-semibold tracking-tight bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent"
                    href={cvRafael}
                    target="_blank"
                    download="CV-Rafael.docx"
                    rel="noopener noreferrer"
                    >
                    Baixar CV
                    </a>
                </div>
                <div className="w-full lg:w-1/2 p-5">
                    <motion.img 
                    initial={{x:100, opacity:0}}
                    whileInView={{x:0, opacity:1}}
                    transition={{duration:2, delay:1.5}}
                    className="rounded-4xl grayscale-75 mx-auto" src={imgProfile} alt="Minha foto" />
                </div>
            </div>
        </SepareteContent>
    )
}

export default Hero
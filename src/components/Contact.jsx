import { SepareteContent, SectionTitle, slideXMotion, slideYMotion } from "./Utility"
import { CONTACT_CONTENT } from "../constant/index"
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { motion as Motion } from "motion/react"

function Contact() {
    return (
        <SepareteContent>
            <section id="contato" className="flex flex-col items-center my-14 sm:my-20 gap-10">
                <SectionTitle>Entre em contato</SectionTitle>
                <div className="flex flex-col text-2xl font-thin gap-4">
                    <div className="flex gap-5 justify-center text-3xl">
                        <Motion.a
                            variants={slideXMotion(-100, .1)}
                            initial={"hidden"}
                            whileInView={"visible"}
                            href={`mailto:${CONTACT_CONTENT.email}?subject=${encodeURIComponent("Contato")}&body=${"Olá Rafael, vi seu site e gostaria de saber mais a respeito de você."}`}><MdEmail /></Motion.a>
                        <Motion.a
                            variants={slideXMotion(100, .1)}
                            initial={"hidden"}
                            whileInView={"visible"}
                            href={`https://wa.me/+55${CONTACT_CONTENT.Phone}?text=${encodeURIComponent("Olá Rafael, vi seu site e gostaria de saber mais a respeito de você.")}`}><FaWhatsapp /></Motion.a>
                    </div>
                    <Motion.div
                      variants={slideYMotion(50, .2)}
                      initial={"hidden"}
                      whileInView={"visible"}
                    className="flex flex-col items-center">
                        <span
                            className="break-words whitespace-break-spaces text-center md:text-left">{CONTACT_CONTENT.Address}</span>
                        <span
                            className="break-words whitespace-break-spaces text-center md:text-left">{CONTACT_CONTENT.city}</span>
                        <span
                            className="break-words whitespace-break-spaces text-center md:text-left">{CONTACT_CONTENT.state}</span>
                        <span

                            className="break-words whitespace-break-spaces text-center md:text-left">{CONTACT_CONTENT.country}</span>

                    </Motion.div>

                </div>

            </section>
        </SepareteContent>
    )
}

export default Contact

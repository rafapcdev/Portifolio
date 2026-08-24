import { SepareteContent, SectionTitle, slideXMotion } from "./Utility"
import { PROJECTS_CONTENT } from "../constant/index"
import { LuExternalLink } from "react-icons/lu";
import { format } from "date-fns"
import { motion as Motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Modal from "./Modal";
import ProjectGallery from "./ProjectGallery";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <SepareteContent>
            <section id="projetos" className="my-14 sm:my-20">
                <SectionTitle>Projetos</SectionTitle>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                    {PROJECTS_CONTENT.map((project, index) => {
                        return (
                            <Motion.div
                                key={index}
                                variants={slideXMotion(-100, index * 0.1)} // Staggered left-to-right slide effect
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => setSelectedProject(project)}
                                className="w-full bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 cursor-pointer hover:border-fuchsia-500/50 hover:shadow-lg hover:shadow-fuchsia-500/10 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <span className="mb-3 inline-block text-xs uppercase tracking-[0.18em] text-fuchsia-400">{index < 5 ? "Em destaque" : "Projeto"}</span>
                                    <h3 className="text-2xl font-semibold tracking-tight mb-3 text-white">
                                        {project.name}
                                    </h3>
                                    <p className="text-neutral-400 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies?.slice(0, 3).map((key, i) => (
                                            <span key={i} className="text-xs font-medium px-2 py-1 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">
                                                {key}
                                            </span>
                                        ))}
                                        {project.technologies?.length > 3 && (
                                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="text-xs text-neutral-500 font-mono mt-auto pt-4 border-t border-neutral-800/50">
                                    Atualizado: {format(new Date(project.updated), "dd/MM/yyyy")}
                                </div>
                            </Motion.div>
                        )
                    })}
                </div>

                <AnimatePresence>
                    {selectedProject && (
                        <Modal onClose={() => setSelectedProject(null)}>
                            <div className="flex flex-col gap-6">
                                {/* Header */}
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                                        {selectedProject.name}
                                    </h2>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
                                        <span>Criado: {format(new Date(selectedProject.created), "dd/MM/yyyy")}</span>
                                        <span>|</span>
                                        <span>Atualizado: {format(new Date(selectedProject.updated), "dd/MM/yyyy")}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-neutral-300 leading-relaxed text-lg whitespace-pre-line">
                                    {selectedProject.description}
                                </p>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-3">Tecnologias</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies?.map((key, index) => (
                                            <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-800/50 border border-neutral-700">
                                                <span className="font-medium text-fuchsia-400">{key}</span>

                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Link */}
                                {selectedProject.homepage && (
                                    <div className="flex justify-start">
                                        <a
                                            href={selectedProject.homepage}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold transition-colors shadow-lg shadow-fuchsia-900/20"
                                        >
                                            <LuExternalLink />
                                            Visitar Projeto
                                        </a>
                                    </div>
                                )}

                                {/* Image Gallery */}
                                <div className="mt-4 pt-6 border-t border-neutral-800">
                                    <h4 className="text-lg font-semibold text-white mb-4">Galeria do Projeto</h4>
                                    <ProjectGallery media={selectedProject.images} />
                                </div>
                            </div>
                        </Modal>
                    )}
                </AnimatePresence>
            </section>
        </SepareteContent>
    )
}

export default Projects

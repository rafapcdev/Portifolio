import { SepareteContent, SectionTitle,slideXMotion } from "./Utility"
import { PROJECTS_CONTENT } from "../constant/index"
import { FaGithub } from "react-icons/fa"
import { LuExternalLink } from "react-icons/lu";
import {format} from "date-fns"
import { motion } from "motion/react";


 const soft_skills = [
  {
    "name": "🧩 Resolução de Problemas",
    "description": "Ao longo da minha experiência em provedores de internet e suporte de TI, aprendi a lidar com situações inesperadas, como falhas de rede e servidores fora do ar. Nessas horas, mantenho a calma, analiso rapidamente a causa raiz e aplico soluções criativas para restaurar os serviços no menor tempo possível.",
    "url": "https://github.com/matheus-costa-dev/TaskMaster",
    "langs": {
      
    },
    "created": "2025-04-01T17:47:26.000Z",
    "updated": "2025-04-03T00:46:01.000Z",
    "homepage": "https://taskmaster-theta-gray.vercel.app/"
  },
  {
    "name": "🤝 Trabalho em Equipe",
    "description": "Já atuei coordenando equipes técnicas em campo e colaborando com times de desenvolvimento. Sei a importância da cooperação, de ouvir diferentes pontos de vista e de alinhar esforços para que todos caminhem em direção ao mesmo objetivo.",
    "url": "https://github.com/matheus-costa-dev/churraspy",
    "langs": {
      
    },
    "created": "2025-02-10T14:49:35.000Z",
    "updated": "2025-04-02T13:23:43.000Z",
    "homepage": "https://matheuspc.pythonanywhere.com/"
  },
  {
    "name": "🗣️ Comunicação Clara",
    "description": "Tenho facilidade em traduzir termos técnicos para usuários que não possuem formação em TI. Essa habilidade me ajudou a orientar clientes, treinar colegas e transmitir instruções de forma simples e objetiva, sem gerar confusão.",
    "url": "https://github.com/matheus-costa-dev/Portfolio",
    "langs": {
      
    },
    "created": "2025-03-19T02:16:09.000Z",
    "updated": "2025-03-25T15:08:36.000Z",
    "homepage": "https://portfolio-brown-gamma-63.vercel.app"
  },
  {
    "name": "⚡ Proatividade",
    "description": "Durante projetos de automação e infraestrutura, muitas vezes tomei a iniciativa de propor melhorias antes mesmo de ser solicitado. Por exemplo, criei scripts em Python para automatizar tarefas repetitivas, otimizando processos internos e reduzindo retrabalho.",
    "url": "https://github.com/matheus-costa-dev/divulgacao-redes-sociais",
    "langs": {
     
    },
    "created": "2025-03-22T12:16:28.000Z",
    "updated": "2025-03-25T14:20:48.000Z",
    "homepage": ""
  },
  {
    "name": "🕐 Organização e Gestão do Tempo",
    "description": "Em ambientes de provedores de internet, onde prazos e demandas são intensos, desenvolvi a disciplina de priorizar atividades e manter o controle sobre múltiplas tarefas, garantindo entregas consistentes e dentro do prazo.",
    "url": "https://github.com/matheus-costa-dev/TCC",
    "langs": {
      
    },
    "created": "2025-02-16T23:56:20.000Z",
    "updated": "2025-03-08T01:48:25.000Z",
    "homepage": ""
  },
  {
    "name": "🔄 Adaptabilidade",
    "description": "Tive contato com diferentes áreas — desde redes estruturadas até servidores e desenvolvimento de sistemas. Essa vivência me deu flexibilidade para me ajustar rapidamente a novas ferramentas e metodologias sem perder a produtividade.",
    "url": "https://github.com/matheus-costa-dev/One-Oracle",
    "langs": {
      
    },
    "created": "2025-02-17T14:19:50.000Z",
    "updated": "2025-03-01T19:50:44.000Z",
    "homepage": "https://matheus-costa-dev.github.io/One-Oracle/"
  }
]

function Softskills() {
    return (
        <SepareteContent>
            <section className="my-10">
                <SectionTitle>Softskills</SectionTitle>
                <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 my-10">
                    {soft_skills.map((project, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-2 w-full md:w-1/2 lg:w-1/4">
                                <motion.h3 
                                variants={slideXMotion(-100,.1)}
                                initial={"hidden"}
                                whileInView={"visible"}
                                className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">{project.name}</motion.h3>
                                <motion.ul 
                                variants={slideXMotion(100,.1)}
                                initial={"hidden"}
                                whileInView={"visible"}
                                className="flex flex-wrap gap-2 text-sm font-thin tracking-tight">
                                    {
                                        project.langs && Object.entries(project.langs).map(([key, value], index) => {
                                            return (
                                                <li key={index}>
                                                    <span>{key}: </span>
                                                    <span>{ (value * 100).toFixed(1) + "%"}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </motion.ul>
                                <motion.span
                                variants={slideXMotion(-100,.4)}
                                initial={"hidden"}
                                whileInView={"visible"}
                                >{project.description}</motion.span>
                                
                               
                            </div>
                        )
                    })}
                </div>
            </section>
        </SepareteContent>
    )
}

export default Softskills
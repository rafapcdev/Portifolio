import cpnu1 from "../assets/CPNU1.png";
import cpnu2 from "../assets/CPNU2.png";
import cpnu3 from "../assets/CPNU3.png";
import cpnu4 from "../assets/CPNU4.png";
import cpnu5 from "../assets/CPNU5.png";
import cpnu6 from "../assets/CPNU6.png";
import cpnu7 from "../assets/CPNU7.png";
import taskmasterVideo from "../assets/taskmaster.mp4";
import churraspyVideo from "../assets/churraspy.mp4";
import conciliacaoBancaria from "../assets/conciliacao-bancaria.mp4";
import siteStartCooper from "../assets/site-start-coop.mp4";
import freela2eng from "../assets/freela 2eng-solutions.mp4";
import oneOracle1 from "../assets/one-oracle1.png";
import oneOracle2 from "../assets/one-oracle2.png";
import reprotrack1 from "../assets/repotrak1.png";
import reprotrack2 from "../assets/repotrak2.png";
import reprotrack3 from "../assets/repotrack3.png";
import reprotrack4 from "../assets/repotrack4.png";
import reprotrack5 from "../assets/reprotrak5.png";
import reprotrack6 from "../assets/repotrack6.png";
import reprotrack7 from "../assets/repotrack7.png";
import reprotrack8 from "../assets/repotrack8.png";

export const NAVBAR_CONTENT = {
  logo: "RC",
  links: {
    linkedin: "https://www.linkedin.com/in/rafaelpereiracostaa",
    github: "https://github.com/rafapcdev",
  },
}

export const HERO_CONTENT = {
  name: "Rafael Pereira Costa",
  title: "Desenvolvedor de Software | DevOps & Cloud | IoT, Robótica & Automação",
  brief: "Minha trajetória reúne formação técnica e experiência prática em infraestrutura, redes, desenvolvimento, robótica e sistemas embarcados. Atualmente, curso o 4º período de Análise e Desenvolvimento de Sistemas e amplio meus conhecimentos em desenvolvimento de software, cloud, DevOps, automação e IoT, criando soluções que conectam tecnologia, dados e dispositivos.",
}

export const ABOUT_ME = `Sou graduando em Análise e Desenvolvimento de Sistemas (4º período) e tenho formação técnica em Informática, Telecomunicações e Automação. Minha trajetória começou próxima da infraestrutura e das redes, onde desenvolvi uma visão prática sobre disponibilidade, conectividade, suporte e operação de ambientes tecnológicos.

Essa base evoluiu naturalmente para o desenvolvimento de software, cloud e DevOps. Hoje aplico programação, automação e integração de sistemas em projetos web e soluções de IoT, conectando aplicações, dados, dispositivos e infraestrutura. A experiência com robótica e sistemas embarcados complementa esse perfil e me permite compreender o produto da eletrônica à interface do usuário.`

export const EDUCATION_CONTENT = [
  { type: "Graduação", title: "Análise e Desenvolvimento de Sistemas", detail: "Em andamento — 4º período" },
  { type: "Formação técnica", title: "Técnico em Informática", detail: "Base em desenvolvimento, suporte, sistemas e redes" },
  { type: "Formação técnica", title: "Técnico em Telecomunicações", detail: "Infraestrutura, conectividade e comunicação de dados" },
  { type: "Formação técnica", title: "Técnico em Automação", detail: "Controle, eletrônica, robótica e sistemas automatizados" },
  { type: "Certificação", title: "Oracle Cloud Infrastructure (OCI)", detail: "Fundamentos e serviços de infraestrutura em nuvem" },
]

export const EXPERIENCES_CONTENT = [
  { year: "Infraestrutura & Telecom", company: "Operação e suporte de ambientes", role: "Redes, servidores e conectividade", description: "Experiência prática com suporte técnico, redes e infraestrutura de telecomunicações, atuando no diagnóstico de falhas, continuidade de serviços e atendimento a demandas técnicas." },
  { year: "Software & Cloud", company: "Desenvolvimento e automação", role: "Aplicações web, APIs e infraestrutura", description: "Desenvolvimento de soluções com Python, JavaScript e TypeScript, integração de APIs, bancos de dados, containers, Linux e serviços em nuvem." },
  { year: "IoT & Automação", company: "Projetos conectados e sistemas embarcados", role: "Robótica, telemetria e controle", description: "Criação de protótipos com microcontroladores, sensores, RFID e comunicação em rede, conectando dispositivos físicos a aplicações e fluxos de dados." },
]

const project = (name, description, technologies, created, updated, homepage = "", images = []) => ({ name, description, technologies, created, updated, homepage, images })

export const PROJECTS_CONTENT = [
  project("Rover Agrícola IoT", "Plataforma robótica voltada ao campo, integrando sensores, controle embarcado e conectividade para coleta de dados e automação de atividades agrícolas.", ["ESP32", "C/C++", "IoT", "Sensores", "Automação"], "2025-01-10", "2026-08-01"),
  project("Sistema de Presença RFID", "Solução de controle de presença por identificação RFID, com leitura automatizada, registro de eventos e integração entre dispositivo, API e banco de dados.", ["RFID", "ESP8266", "Python", "REST API", "PostgreSQL"], "2025-03-01", "2026-07-10"),
  project("Conciliação Bancária", "Sistema web para cliente institucional com autenticação, dashboard, gestão de contas, histórico e exportação XML no padrão SIGFIS (TCE-RJ), reduzindo tarefas manuais no fechamento contábil.", ["Next.js", "TypeScript", "Tailwind", "Supabase", "SQL"], "2026-01-17", "2026-02-21", "https://nextjs-sable-one-17.vercel.app/", [conciliacaoBancaria]),
  project("CPNU Analytics", "Aplicação criada em equipe para monitoramento de posições no CPNU. Processa dados públicos e interações dos usuários para produzir estimativas de nota e classificação.", ["TypeScript", "Python", "SQL", "React"], "2025-07-01", "2025-10-03", "https://www.consultacpnu.com.br/", [cpnu1, cpnu2, cpnu3, cpnu4, cpnu5, cpnu6, cpnu7]),
  project("Radar de Investimentos Públicos", "Solução de análise e acompanhamento de investimentos públicos, estruturando dados para facilitar consultas, identificar padrões e apoiar decisões com transparência.", ["Python", "Pandas", "FastAPI", "PostgreSQL", "React"], "2025-08-01", "2026-07-20"),
  project("ReproTrack", "Aplicativo para gestão da reprodução bovina, transformando dados do rebanho em indicadores para produtores, veterinários e técnicos do agronegócio.", ["React Native", "JavaScript"], "2025-02-16", "2025-03-08", "https://github.com/rafapcdev/app_fazenda", [reprotrack1, reprotrack2, reprotrack3, reprotrack4, reprotrack5, reprotrack6, reprotrack7, reprotrack8]),
  project("TaskMaster", "Aplicação React para organização pessoal e de equipes, com navegação intuitiva, feedback visual e experiência responsiva em desktop e mobile.", ["React", "JavaScript", "Tailwind"], "2025-04-01", "2025-04-03", "https://taskmaster-theta-gray.vercel.app/", [taskmasterVideo]),
  project("ChurrasPy", "Aplicação que calcula alimentos e bebidas para um churrasco a partir de dados coletados por web scraping e armazenados em banco de dados.", ["Python", "JavaScript", "HTML", "CSS"], "2025-02-10", "2025-04-02", "https://github.com/rafapcdev/churraspy", [churraspyVideo]),
  project("Portfólio", "Portfólio profissional construído com React, Motion, Tailwind CSS e Vite, com tema claro/escuro, animações e layout responsivo.", ["React", "JavaScript", "Tailwind", "Vite"], "2025-03-19", "2026-08-20", "https://rafaelpc.com.br/"),
  project("ONE — Oracle Next Education", "Projetos e exercícios desenvolvidos durante o programa Oracle Next Education.", ["JavaScript", "HTML", "CSS"], "2025-02-17", "2025-03-01", "https://one-oracle.netlify.app/", [oneOracle1, oneOracle2]),
  project("Landing Page — Cooperativa de Tecnologia", "Landing page responsiva com foco em performance, autoridade digital e geração de oportunidades.", ["React", "TypeScript", "Tailwind", "GSAP"], "2026-01-17", "2026-02-21", "https://site-start-cooper.vercel.app/", [siteStartCooper]),
  project("Site Institucional — 2ENG Serviços", "Plataforma institucional para uma empresa de engenharia condominial, traduzindo sua experiência em uma presença digital moderna e orientada à conversão.", ["JavaScript", "Tailwind"], "2026-01-17", "2026-02-21", "https://2engservicos.com.br/", [freela2eng]),
]

export const TECHNOLOGY_CATEGORIES = [
  { name: "Desenvolvimento", items: ["Python", "Java", "JavaScript", "TypeScript", "C/C++"] },
  { name: "Frontend", items: ["React", "Next.js", "Tailwind"] },
  { name: "Backend", items: ["FastAPI", "Node.js", "REST APIs"] },
  { name: "Infra / DevOps", items: ["Linux", "Docker", "Git", "CI/CD", "OCI", "AWS"] },
  { name: "Dados", items: ["PostgreSQL", "MySQL", "Pandas"] },
  { name: "IoT / Automação", items: ["ESP32", "ESP8266", "Arduino", "RFID", "FreeRTOS", "n8n"] },
]

export const SOFT_SKILLS = ["Resolução de problemas", "Trabalho em equipe", "Comunicação clara", "Organização e adaptabilidade"]

export const CONTACT_CONTENT = { Phone: "21998812380", email: "raf.pc.dev@gmail.com" }

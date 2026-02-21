import cpnu1 from "../assets/CPNU1.png";
import cpnu2 from "../assets/CPNU2.png";
import cpnu3 from "../assets/CPNU3.png";
import cpnu4 from "../assets/CPNU4.png";
import cpnu5 from "../assets/CPNU5.png";
import cpnu6 from "../assets/CPNU6.png";
import cpnu7 from "../assets/CPNU7.png";
import taskmasterVideo from "../assets/taskmaster.mp4";
import churraspyVideo from "../assets/churraspy.mp4";
import conciliacaoBancaria1 from "../assets/conciliacao-bancaria.mp4";
import siteStartCooper1 from "../assets/site-start-coop.mp4";
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
    linkedin: "http://www.linkedin.com/in/rafaelpereiracostaa",
    github: "https://github.com/rafapcdev",
  }
}




export const HERO_CONTENT = {
  name: "Rafael Pereira Costa",
  title: "Software Engineer | DevOps & Cloud Engineer",
  brief: "Especialista em desenvolvimento de software com foco em performance e infraestrutura. Com domínio em Java e Python (FastAPI), projeto APIs de alta disponibilidade e interfaces modernas em React/Next.js. Minha certificação em Oracle Cloud Infrastructure (OCI) me permite desenhar soluções que otimizam recursos e reduzem custos operacionais. Se você busca uma entrega técnica de alto nível, com código limpo e arquitetura pensada para escalabilidade, estou pronto para viabilizar seu projeto."
}

export const ABOUT_ME = ``


export const PROJECTS_CONTENT = [
  {
    "name": "CPNU Analytics - Sistema de Classificação e Estimativa",
    "description": "Aplicação web completa desenvolvida em equipe entre eu e meu irmao (Matheus Pereira Costa, Analista de Dados) para auxiliar candidatos do Concurso Público Nacional Unificado (CPNU) a monitorarem suas posições. O diferencial do projeto é a utilização de um modelo de Inteligência Artificial que processa grandes volumes de dados públicos e interações dos usuários para gerar estimativas de nota e previsões de classificação em tempo real com maior precisão.",
    "url": "",
    "langs": {
      "TypeScript": 0.65,
      "Python": 0.20,
      "SQL": 0.10,
      "CSS": 0.05
    },
    "created": "2025-07-01T17:47:26.000Z",
    "updated": "2025-10-03T00:46:01.000Z",
    "homepage": "https://www.consultacpnu.com.br/",
    "images": [cpnu1, cpnu2, cpnu3, cpnu4, cpnu5, cpnu6, cpnu7]
  },
  {
    "name": "TaskMaster",
    "description": "Um aplicativo web desenvolvido em React para organização pessoal ou em equipe, com:  Interface moderna com efeitos visuais (gradient text, typewriter animation).  Navegação intuitiva (React Router) entre login e página principal.  Design responsivo (Tailwind CSS) para uso em desktop e mobile.  Foco em usabilidade: Botões claros, feedback visual",
    "url": "",
    "langs": {
      "JavaScript": 0.982,
      "HTML": 0.012,
      "CSS": 0.006
    },
    "created": "2025-04-01T17:47:26.000Z",
    "updated": "2025-04-03T00:46:01.000Z",
    "homepage": "https://taskmaster-theta-gray.vercel.app/",
    "images": [taskmasterVideo]
  },
  {
    "name": "churraspy",
    "description": "Aplicação que  visa calcular o que será necessário para realizar um churrasco. Os dados dos alimentos e bebidas são oriundos de um webscrapping feito no site do supermercado princesa e armazenado  no banco de dados",
    "url": "https://github.com/rafapcdev/churraspy",
    "langs": {
      "Python": 0.442,
      "HTML": 0.347,
      "CSS": 0.122,
      "JavaScript": 0.089
    },
    "created": "2025-02-10T14:49:35.000Z",
    "updated": "2025-04-02T13:23:43.000Z",
    "homepage": "https://github.com/rafapcdev/churraspy",
    "images": [churraspyVideo]
  },
  {
    "name": "Portfolio",
    "description": "Portfólio web construído com React e Framer Motion, destacando minhas habilidades em desenvolvimento front-end. Utiliza Tailwind CSS para design responsivo e Vite para otimização. Animações fluidas com Framer Motion e tipografia do Google Fonts.",
    "langs": {
      "JavaScript": 0.97,
      "CSS": 0.015,
      "HTML": 0.014
    },
    "created": "2025-03-19T02:16:09.000Z",
    "updated": "2025-03-25T15:08:36.000Z",
    "homepage": "https://portifoliorc.netlify.app/"
  },
  {
    "name": "ReproTrack",
    "description": "ReproTrack é o aplicativo definitivo para gestão inteligente da reprodução bovina. Desenvolvido para produtores, veterinários e técnicos do agronegócio, o ReproTrack transforma dados em decisões estratégicas, otimizando a performance reprodutiva do rebanho com precisão e praticidade.",
    "url": "",
    "langs": {
      "React Native": 1

    },
    "created": "2025-02-16T23:56:20.000Z",
    "updated": "2025-03-08T01:48:25.000Z",
    "homepage": "https://github.com/rafapcdev/app_fazenda",
    "images": [reprotrack1, reprotrack2, reprotrack3, reprotrack4, reprotrack5, reprotrack6, reprotrack7, reprotrack8]
  },
  {
    "name": "One-Oracle",
    "description": "Um projeto o qual contêm todos os aprendizados do programa One da Oracle",
    "url": "https://one-oracle.netlify.app/",
    "langs": {
      "HTML": 0.372,
      "JavaScript": 0.33,
      "CSS": 0.298
    },
    "created": "2025-02-17T14:19:50.000Z",
    "updated": "2025-03-01T19:50:44.000Z",
    "homepage": "https://one-oracle.netlify.app/",
    "images": [oneOracle1, oneOracle2]
  },
  {
    "name": "Conciliacao Bancaria",
    "description": "sistema web de conciliação bancária para um cliente institucional, com foco em organização financeira, rastreabilidade e exportação em XML no padrão SIGFIS (TCE-RJ). O projeto foi construído com Next.js, TypeScript e Supabase, incluindo autenticação segura, dashboard operacional, gestão de contas, histórico de conciliações e cálculos automáticos para reduzir erros manuais e acelerar o fechamento contábil.",
    "url": "https://nextjs-sable-one-17.vercel.app/",
    "langs": {
      "Next.js": 0.60,
      "SQL": 0.25,
      "Tailwind CSS": 0.15
    },
    "created": "2026-01-17T14:19:50.000Z",
    "updated": "2026-02-21T19:50:44.000Z",
    "homepage": "https://nextjs-sable-one-17.vercel.app/",
    "images": [conciliacaoBancaria1]
  },
  {
    "name": "LandPage para uma cooperativa de tecnologia",
    "description": "Landing page de alto impacto visual desenvolvida com React, TypeScript, Tailwind e GSAP, focada em performance, autoridade digital e geração de novos clientes",
    "url": "https://site-start-cooper.vercel.app/",
    "langs": {
      "javascript": 0.10,
      "React": 0.25,
      "Tailwind CSS": 0.15,
      "GSAP": 0.60
    },
    "created": "2026-01-17T14:19:50.000Z",
    "updated": "2026-02-21T19:50:44.000Z",
    "homepage": "https://site-start-cooper.vercel.app/",
    "images": [siteStartCooper1]
  },
  {
    "name": "landPage para 2ng servicos",
    "description": "Desenvolvimento de uma plataforma web institucional completa para a 2ENG Serviços, uma empresa especializada em engenharia condominial com atuação na Barra da Tijuca, Rio de Janeiro. O objetivo principal foi modernizar a presença digital da empresa, traduzindo seus mais de 30 anos de experiência no mercado para uma interface moderna, intuitiva e de alta conversão.",
    "url": "https://2engservicos.com.br/",
    "langs": {
      "javascript": 0.60,
      "Tailwind CSS": 0.40
    },
    "created": "2026-01-17T14:19:50.000Z",
    "updated": "2026-02-21T19:50:44.000Z",
    "homepage": "https://2engservicos.com.br/",
    "images": [freela2eng]
  },
]

export const CONTACT_CONTENT = {
  Phone: "21998812380",
  email: "raf.pc.dev@gmail.com"
}

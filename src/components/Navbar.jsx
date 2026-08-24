import { FaLinkedin, FaGithub } from "react-icons/fa"
import { CiLight, CiDark  } from "react-icons/ci";
import { NAVBAR_CONTENT } from "../constant/index"
import { useLight } from "../context/useLight"


const navLinks = [
  {icon: FaLinkedin, link:NAVBAR_CONTENT.links.linkedin},
  {icon: FaGithub, link:NAVBAR_CONTENT.links.github},
]


function Navbar() {

  const { lightMode, setLightMode } = useLight()

  return (
    <nav aria-label="Navegação principal" className="flex flex-wrap justify-between gap-4 text-2xl border-b border-neutral-800 pb-4">
      <h2 className="font-thin tracking-tight">RC</h2>
      <div className="flex items-center">
      <button aria-label="Alternar tema" type="button"
       onClick={()=>setLightMode(!lightMode)}> { lightMode ? <CiLight /> : <CiDark  />} 
       </button>
       <span className="text-sm">Modo {lightMode ? "noturno" : "diurno"} </span>
      </div>
      <div className="flex gap-4 items-center">
       {navLinks.map((item, index)=> {
        return (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" aria-label={index === 0 ? "LinkedIn" : "GitHub"}><item.icon/></a>

        )
      }) }

             
      </div>
    </nav>
  )
}

export default Navbar
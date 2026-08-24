import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import { useLight } from "./context/useLight"
import Softskills from "./components/Softskills"
import About from "./components/About"
import Experiences from "./components/Experiences"
import Education from "./components/Education"


function App() {
  const { lightMode } = useLight()
  const bgLight = "absolute top-0 -z-[-2] antialiased overflow-x-hidden min-h-screen w-screen  bg-neutral-200 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
  const bgDark = "absolute top-0 -z-[-2] text-neutral-50 antialiased overflow-x-hidden min-h-screen w-screen  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
  
  return (
    <div className= {lightMode ? bgDark : bgLight}>
      <div className="container mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 py-6 sm:py-10 flex flex-col justify-center">
        <Navbar />
        <main>
        <Hero />
        <About />
        <Education />
        <Experiences />
        <Projects />
        <Technologies />
        <Softskills />
        <Contact />
        </main>
      </div>
    </div>
  )
}

export default App
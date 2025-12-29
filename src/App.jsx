import Achievement from "./components/ACHIEVEMENT/Ahoevement"
import Contact from "./components/contact/Contact"
import Education from "./components/Education/About"
import Experience from "./components/Experience/Experience"
import FireworksDemo from "./components/fire/Fire"
import Footer from "./components/footer/Footer"
import Main from "./components/Main/Main"
import Navebar from "./components/navebar/navebar"
import Skills from "./components/skills/Skills"
import Subject from "./components/subject/Subject"
const App = () => {

  return (
    <>
    <FireworksDemo />
      <div className="fixed inset-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="  flex flex-col justify-center items-center">
        <Navebar />
        <Main />
       <Education />
       <Experience />
       <Subject />
       <Skills />
       <Achievement />
       <Contact />
       <Footer />
      </div>
    </>
  )
}

export default App

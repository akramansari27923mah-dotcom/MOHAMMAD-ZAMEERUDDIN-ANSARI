import About from "./components/About/About"
import Achievement from "./components/ACHIEVEMENT/Ahoevement"
import Contact from "./components/contact/Contact"
import Education from "./components/Education/About"
import Experience from "./components/Experience/Experience"
import Footer from "./components/footer/Footer"
import Main from "./components/Main/Main"
import Navebar from "./components/navebar/navebar"
import Skills from "./components/skills/Skills"
import Subject from "./components/subject/Subject"
const App = () => {

  return (
    <>
    <div class="fixed top-0 inset-0 -z-10 h-screen w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

      <div className=" flex flex-col justify-center items-center overflow-hidden">
        <Navebar />
        <Main />
        <About />
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

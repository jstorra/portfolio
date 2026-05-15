import Navbar from "./components/Navbar"
import HeroSection from "./sections/HeroSection"
import AboutSection from "./sections/AboutSection"
import SkillsSection from "./sections/SkillsSection"
import ProjectsSection from "./sections/ProjectsSection"
import ContactSection from "./sections/ContactSection"
import FooterSection from "./sections/FooterSection"

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">
      
      {/* Glow background */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-[200px] right-[-100px] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl"></div>

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  )
}

export default App
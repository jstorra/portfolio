import profileImage from "../assets/profile.png"
import { useTranslation } from "react-i18next"

function HeroSection() {
  const { t } = useTranslation()

  return (
    <section id="home" className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left side */}
        <div>
          <p className="text-green-400 mb-4 text-lg font-semibold">
            {t("hero.greeting")}
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t("hero.name")}
          </h1>

          <p className="text-gray-400 text-xl mb-8 max-w-xl">
            {t("hero.subtitle")}
          </p>

          <button className="bg-green-500 hover:bg-green-400 transition-colors px-8 py-4 rounded-xl text-black font-semibold cursor-pointer">
            {t("hero.viewProjects")}
          </button>
        </div>

        {/* Right side */}
        <div className="flex justify-center">
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>

            <img
              src={profileImage}
              alt="Profile"
              className="relative w-[320px] h-[320px] object-cover rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
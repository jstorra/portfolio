import { useTranslation } from "react-i18next"

function Navbar() {
  const { t } = useTranslation()

  return (
    <nav className="px-6 fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto py-4 flex items-center justify-between">

        <h1 className="text-white text-3xl font-bold">
          <a href="#home">Portfolio</a>
        </h1>

        <ul className="flex gap-8 text-sm text-gray-300">
          <li>
            <a
              href="#about"
              className="hover:text-white transition-colors"
            >
              {t("navbar.about")}
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-white transition-colors"
            >
              {t("navbar.skills")}
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-white transition-colors"
            >
              {t("navbar.projects")}
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-white transition-colors"
            >
              {t("navbar.contact")}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
import { useTranslation } from "react-i18next"

function Navbar() {
    const { t, i18n } = useTranslation()

    const toggleLanguage = () => {

        const newLanguage = i18n.language === "es" ? "en" : "es"

        i18n.changeLanguage(newLanguage)

        localStorage.setItem("language", newLanguage)

    }

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

                <button
                    onClick={toggleLanguage}
                    className="px-4 py-2 border border-white/10 rounded-xl text-gray-300 hover:border-green-400/40 hover:text-green-400 transition-all cursor-pointer"
                >
                    {i18n.language === "es" ? "EN" : "ES"}
                </button>

            </div>

        </nav>
    )
}

export default Navbar
import { useTranslation } from "react-i18next"
import { Menu, X } from "lucide-react"
import { useState } from "react"

function Navbar() {
    const { t, i18n } = useTranslation()

    const toggleLanguage = () => {

        const newLanguage = i18n.language === "es" ? "en" : "es"

        i18n.changeLanguage(newLanguage)

        localStorage.setItem("language", newLanguage)

    }

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="px-6 fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50">

            <div className="max-w-6xl mx-auto py-4 flex items-center justify-between">

                <h1 className="text-white text-3xl font-bold">

                    <a href="#home">Portfolio</a>

                </h1>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white cursor-pointer"
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                <ul className="hidden md:flex gap-8 text-sm text-gray-300">

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
                    className="hidden md:block px-4 py-2 border border-white/10 rounded-xl text-gray-300 hover:border-green-400/40 hover:text-green-400 transition-all cursor-pointer"
                >
                    {i18n.language === "es" ? "EN" : "ES"}
                </button>

            </div>

            {
                isOpen && (

                    <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10">

                        <ul className="flex flex-col items-center gap-8 py-8 text-gray-300">

                            <li>
                                <a href="#about">
                                    {t("navbar.about")}
                                </a>
                            </li>

                            <li>
                                <a href="#skills">
                                    {t("navbar.skills")}
                                </a>
                            </li>

                            <li>
                                <a href="#projects">
                                    {t("navbar.projects")}
                                </a>
                            </li>

                            <li>
                                <a href="#contact">
                                    {t("navbar.contact")}
                                </a>
                            </li>

                            <button
                                onClick={toggleLanguage}
                                className="px-4 py-2 border border-white/10 rounded-xl text-gray-300 hover:border-green-400/40 hover:text-green-400 transition-all cursor-pointer"
                            >
                                {i18n.language === "es" ? "EN" : "ES"}
                            </button>

                        </ul>

                    </div>
                    
                )
            }

        </nav>
    )
}

export default Navbar
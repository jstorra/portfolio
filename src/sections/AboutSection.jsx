import { useTranslation } from "react-i18next"

function AboutSection() {
    const { t } = useTranslation()

    return (
        <section id="about" className="py-32 px-6 relative z-10">

            {/* Glow background */}
            <div className="absolute top-[-200px] left-[100px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-[170px] left-[-100px] w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-[200px] right-[-100px] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="max-w-5xl mx-auto">

                <h3 className="text-green-400 mb-8 text-3xl font-semibold">
                    {t("about.sectionTitle")}
                </h3>

                {/* Title */}
                <div>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        {t("about.title")}
                    </h2>

                </div>

                {/* Content */}
                <div>

                    <div className="py-16">

                        <p className="text-gray-400 text-lg leading-relaxed">
                            {t("about.description")}
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/50 p-8 rounded-xl border border-white/10">

                            <h3 className="text-green-400 text-2xl font-bold mb-4">
                                {t("about.misionTitle")}
                            </h3>

                            <p>{t("about.misionDescription")}</p>

                        </div>

                        <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/50 p-8 rounded-xl border border-white/10">

                            <h3 className="text-green-400 text-2xl font-bold mb-4">
                                {t("about.visionTitle")}
                            </h3>

                            <p>{t("about.visionDescription")}</p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default AboutSection
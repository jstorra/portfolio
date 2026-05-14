import SkillCard from "../components/SkillCard"
import { technicalSkills, softSkills } from "../data/skills"
import { useTranslation } from "react-i18next"

function SkillsSection() {
    const { t } = useTranslation()

    return (
        <section id="skills" className="py-32 px-6 relative z-10">

            {/* Glow background */}
            <div className="absolute top-[600px] left-[-150px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-[200px] right-[-200px] w-[400px] h-[400px] bg-green-500/20 rounded-full blur-3xl"></div>

            <div className="max-w-5xl mx-auto flex flex-col gap-16">

                <div>

                    <h3 className="text-green-400 mb-4 text-3xl font-semibold">
                        {t("skills.technicalSkillsTitle")}
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">

                        {technicalSkills.map((skill, index) => (
                            <SkillCard
                                key={index}
                                icon={skill.icon}
                                name={skill.name}
                                isImage={skill.isImage}
                            />
                        ))}

                    </div>

                </div>

                <div>

                    <h3 className="text-green-400 mb-4 text-3xl font-semibold">
                        {t("skills.softSkillsTitle")}
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8">

                        {softSkills.map((skill, index) => (
                            <SkillCard
                                key={index}
                                icon={skill.icon}
                                name={t(skill.nameKey)}
                            />
                        ))}

                    </div>

                </div>

            </div>

        </section>
    )
}

export default SkillsSection
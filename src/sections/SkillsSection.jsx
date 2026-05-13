import SkillCard from "../components/SkillCard"
import javaIcon from "../assets/skills/java-icon.webp"
import springBootIcon from "../assets/skills/springboot-icon.png"
import pythonIcon from "../assets/skills/python-icon.png"
import JavaScriptIcon from "../assets/skills/javascript-icon.webp"
import nodeIcon from "../assets/skills/node-icon.png"
import gitIcon from "../assets/skills/git-icon.png"
import sqlIcon from "../assets/skills/sql-icon.webp"
import reactIcon from "../assets/skills/react-icon.png"
import tailwindIcon from "../assets/skills/tailwind-icon.png"
import {
    Brain,
    Scale,
    Lightbulb,
    RefreshCw,
    Users,
    MessageSquare,
} from "lucide-react"
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

                    <div className="grid md:grid-cols-4 gap-8 py-8">

                        <SkillCard icon={javaIcon} name="Java" isImage={true} />
                        <SkillCard icon={springBootIcon} name="Spring Boot" isImage={true} />
                        <SkillCard icon={pythonIcon} name="Python" isImage={true} />
                        <SkillCard icon={JavaScriptIcon} name="JavaScript" isImage={true} />
                        <SkillCard icon={nodeIcon} name="Node" isImage={true} />
                        <SkillCard icon={gitIcon} name="Git" isImage={true} />
                        <SkillCard icon={sqlIcon} name="SQL" isImage={true} />
                        <SkillCard icon={reactIcon} name="React" isImage={true} />
                        <SkillCard icon={tailwindIcon} name="Tailwind" isImage={true} />
                        
                    </div>

                </div>

                <div>

                    <h3 className="text-green-400 mb-4 text-3xl font-semibold">
                        {t("skills.softSkillsTitle")}
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8 py-8">
                        <SkillCard
                            icon={<Brain size={64} className="text-red-400" />}
                            name={t("skills.softSkills.0")}
                        />

                        <SkillCard
                            icon={<Scale size={64} className="text-olive-500" />}
                            name={t("skills.softSkills.1")}
                        />

                        <SkillCard
                            icon={<Lightbulb size={64} className="text-yellow-400" />}
                            name={t("skills.softSkills.2")}
                        />

                        <SkillCard
                            icon={<RefreshCw size={64} className="text-purple-400" />}
                            name={t("skills.softSkills.3")}
                        />

                        <SkillCard
                            icon={<Users size={64} className="text-green-400" />}
                            name={t("skills.softSkills.4")}
                        />

                        <SkillCard
                            icon={<MessageSquare size={64} className="text-blue-400" />}
                            name={t("skills.softSkills.5")}
                        />
                    </div>

                </div>

            </div>
            
        </section>
    )
}

export default SkillsSection
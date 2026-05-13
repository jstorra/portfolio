import SkillCard from "../components/SkillCard"
import javaIcon from "../assets/java-icon.webp"
import springBootIcon from "../assets/springboot-icon.png"
import pythonIcon from "../assets/python-icon.png"
import JavaScriptIcon from "../assets/javascript-icon.webp"
import nodeIcon from "../assets/node-icon.png"
import gitIcon from "../assets/git-icon.png"
import sqlIcon from "../assets/sql-icon.webp"
import reactIcon from "../assets/react-icon.png"
import tailwindIcon from "../assets/tailwind-icon.png"
import {
    Brain,
    Scale,
    Lightbulb,
    RefreshCw,
    Users,
    MessageSquare,
} from "lucide-react"

function SkillsSection() {
    return (
        <section id="skills" className="py-32 px-6 relative z-10">

            <div className="max-w-5xl mx-auto flex flex-col gap-16">

                <div>
                    <h3 className="text-green-400 mb-4 text-3xl font-semibold">
                        Habilidades Técnicas
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
                        Habilidades Blandas
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8 py-8">
                        <SkillCard
                            icon={<Brain size={64} className="text-red-400" />}
                            name="Pensamiento Crítico"
                        />

                        <SkillCard
                            icon={<Scale size={64} className="text-olive-500" />}
                            name="Toma de Decisiones"
                        />

                        <SkillCard
                            icon={<Lightbulb size={64} className="text-yellow-400" />}
                            name="Resolución de Problemas"
                        />

                        <SkillCard
                            icon={<RefreshCw size={64} className="text-purple-400" />}
                            name="Adaptabilidad"
                        />

                        <SkillCard
                            icon={<Users size={64} className="text-green-400" />}
                            name="Trabajo en Equipo"
                        />

                        <SkillCard
                            icon={<MessageSquare size={64} className="text-blue-400" />}
                            name="Comunicación"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SkillsSection
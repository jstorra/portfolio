import ProjectCard from "../components/ProjectCard"
import { useTranslation } from "react-i18next"
import { projects } from "../data/projects"

function ProjectsSection() {
    const { t } = useTranslation()

    return (
        <section id="projects" className="py-32 px-6 relative z-10">

            {/* Glow background */}
            <div className="absolute top-[-200px] right-[100px] w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-[170px] right-[-100px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-[500px] left-[-100px] w-[400px] h-[400px] bg-green-500/20 rounded-full blur-3xl"></div>

            <div className="max-w-5xl mx-auto">

                <h3 className="text-green-400 mb-4 text-3xl font-semibold">
                    {t("projects.sectionTitle")}
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">

                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            image={project.image}
                            title={t(project.titleKey)}
                            description={t(project.descriptionKey)}
                            github={project.github}
                        />
                    ))}

                </div>

            </div>

        </section>
    )
}

export default ProjectsSection
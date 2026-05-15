function ProjectCard({ image, title, description, github }) {
    return (
        <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="h-full bg-gradient-to-br from-gray-900/40 to-gray-800/50 rounded-xl border border-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300">

                <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />

                <div className="p-8">

                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600">{description}</p>

                </div>

            </div>
          
        </a>
    )
}

export default ProjectCard
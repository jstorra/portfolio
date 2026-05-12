function AboutSection() {
    return (
        <section
            id="about"
            className="py-32 px-6 relative z-10"
        >
            <div className="max-w-5xl mx-auto">

                {/* Title */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Construyendo experiencias web modernas
                    </h2>
                </div>

                {/* Content */}
                <div>

                    <div className="mb-16">
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Apasionado por crear soluciones prácticas y eficientes, con un enfoque en la innovación y mejora continua. Cuento
                            con experiencia en el análisis, diseño y desarrollo de aplicaciones, y me destaco por mi capacidad para colaborar en
                            equipo, resolver problemas complejos y adaptarme rápidamente a nuevas tecnologías. Mi objetivo es contribuir al
                            crecimiento de una empresa mediante la aplicación de habilidades técnicas y el aprendizaje constante, asegurando
                            calidad y eficacia en cada proyecto.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="bg-gray-900/80 p-8 rounded-xl border border-white/10">
                            <h3 className="text-green-400 text-2xl font-bold mb-4">Misión</h3>
                            <p>Desarrollar soluciones web modernas, intuitivas y eficientes que generen experiencias digitales de calidad.</p>
                        </div>

                        <div className="bg-gray-900/80 p-8 rounded-xl border border-white/10">
                            <h3 className="text-green-400 text-2xl font-bold mb-4">Visión</h3>
                            <p>Convertirme en un desarrollador FullStack capaz de construir productos digitales innovadores con impacto real.</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutSection
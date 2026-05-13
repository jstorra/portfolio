function SkillCard({ icon, name, isImage = false }) {
    return (
        <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/50 p-6 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-4 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">

            {isImage ? (
                <img
                  src={icon}
                  alt={name}
                  className="w-16 h-16 object-contain"
                />
            ) : (
                icon
            )}

            <p className="font-bold text-xl text-white">
                {name}
            </p>

        </div>
    )
}

export default SkillCard
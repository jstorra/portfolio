function ContactCard({ icon, title, url }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-gradient-to-br from-gray-900/40 to-gray-800/50 border border-white/10 rounded-2xl p-5 hover:border-green-500/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all duration-300"
        >
            <div className="flex items-center gap-4">
                {icon}

                <span className="text-white font-medium text-lg">
                    {title}
                </span>
            </div>

            <span className="text-gray-400 text-xl">
                →
            </span>
        </a>
    )
}

export default ContactCard
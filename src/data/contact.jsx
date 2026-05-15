import {
  Mail,
  FileDown,
} from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export const contactInfo = [
    {
        title: "Email",
        url: "mailto:jstorra.business@gmail.com",
        icon: <Mail className="text-green-400" size={28} />
    },

    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/jstorra/",
        icon: <FaLinkedin className="text-green-400" size={28} />
    },

    {
        title: "GitHub",
        url: "https://github.com/jstorra",
        icon: <FaGithub className="text-green-400" size={28} />
    },

    {
        title: "contact.downloadCV",
        url: "/CV.pdf",
        icon: <FileDown className="text-green-400" size={28} />
    },
]
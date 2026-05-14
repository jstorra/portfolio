import javaIcon from "../assets/skills/java-icon.webp"
import springBootIcon from "../assets/skills/springboot-icon.png"
import pythonIcon from "../assets/skills/python-icon.png"
import javaScriptIcon from "../assets/skills/javascript-icon.webp"
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

export const technicalSkills = [
    {
        name: "Java",
        icon: javaIcon,
        isImage: true,
    },

    {
        name: "Spring Boot",
        icon: springBootIcon,
        isImage: true,
    },

    {
        name: "Python",
        icon: pythonIcon,
        isImage: true,
    },

    {
        name: "JavaScript",
        icon: javaScriptIcon,
        isImage: true,
    },

    {
        name: "Node.js",
        icon: nodeIcon,
        isImage: true,
    },

    {
        name: "Git",
        icon: gitIcon,
        isImage: true,
    },

    {
        name: "SQL",
        icon: sqlIcon,
        isImage: true,
    },

    {
        name: "React",
        icon: reactIcon,
        isImage: true,
    },

    {
        name: "Tailwind",
        icon: tailwindIcon,
        isImage: true,
    },
]

export const softSkills = [
    {
        nameKey: "skills.softSkills.0",
        icon: <Brain size={64} className="text-red-400" />,
    },

    {
        nameKey: "skills.softSkills.1",
        icon: <Scale size={64} className="text-olive-500" />,
    },

    {
        nameKey: "skills.softSkills.2",
        icon: <Lightbulb size={64} className="text-yellow-400" />,
    },

    {
        nameKey: "skills.softSkills.3",
        icon: <RefreshCw size={64} className="text-purple-400" />,
    },

    {
        nameKey: "skills.softSkills.4",
        icon: <Users size={64} className="text-green-400" />,
    },

    {
        nameKey: "skills.softSkills.5",
        icon: <MessageSquare size={64} className="text-blue-400" />,
    },
]
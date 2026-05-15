import { contactInfo } from "../data/contact"
import ContactCard from "../components/ContactCard"
import { useTranslation } from "react-i18next"

function ContactSection() {
    const { t } = useTranslation()

    return (
        <section id="contact" className="py-32 px-6 relative z-10">

            <div className="max-w-5xl mx-auto">

                <h2 className="text-green-400 mb-4 text-3xl font-semibold">
                    {t("contact.sectionTitle")}
                </h2>

                <div className="grid md:grid-cols-2 gap-6 py-8">

                    {contactInfo.map((info, index) => (
                        <ContactCard
                            key={index}
                            icon={info.icon}
                            title={t(info.title)}
                            url={info.url}
                        />
                    ))}

                </div>

            </div>

        </section>
    )
}

export default ContactSection
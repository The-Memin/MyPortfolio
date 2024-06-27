import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ContactForm from "./ContactForm";
const ContactSection = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-section__content">

                <h2>Contact</h2>
                <div className="contact-links">
                    <a href="mailto:guillejuma@outlook.es" className="contact-link" style={{ backgroundColor: '#69f723' }}>
                        <FontAwesomeIcon icon={faEnvelope} /> Email
                    </a>
                    <a href="https://wa.me/9516402940" className="contact-link" style={{ backgroundColor: '#03FA6E' }}>
                        <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                    </a>
                    <a href="https://linkedin.com/in/guillermo-juarez-martinez-665b66262" className="contact-link" style={{ backgroundColor: '#006414' }}>
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </a>
                    <a href="https://github.com/The-Memin" className="contact-link" style={{ backgroundColor: '#0E1514' }}>
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                </div>
                <ContactForm/>
            </div>
        </section>
    );
}

export default ContactSection;
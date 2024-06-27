import ContactForm from "./ContactForm";
const ContactSection = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-section__content">

                <h2>Contact</h2>
                <div className="contact-links">
                    <a href="mailto:guillejuma@outlook.es" className="contact-link" style={{ backgroundColor: '#69f723' }}>
                        <i className="fas fa-envelope"></i> Email
                    </a>
                    <a href="https://wa.me/9516402940" className="contact-link" style={{ backgroundColor: '#03FA6E' }}>
                        <i className="fab fa-whatsapp"></i> WhatsApp
                    </a>
                    <a href="https://linkedin.com/in/guillermo-juarez-martinez-665b66262" className="contact-link" style={{ backgroundColor: '#006414' }}>
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://github.com/The-Memin" className="contact-link" style={{ backgroundColor: '#0E1514' }}>
                        <i className="fab fa-github"></i> GitHub
                    </a>
                </div>
                <ContactForm/>
            </div>
        </section>
    );
}

export default ContactSection;
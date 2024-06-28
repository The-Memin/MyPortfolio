import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <a href="https://github.com/The-Memin" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/guillermo-juarez-martinez-665b66262" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://wa.me/9516402940" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="mailto:guillejuma@outlook.es">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <div className="footer-text">
          &copy; 2024 Guillermo Juarez Martinez | Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}

export default Footer;
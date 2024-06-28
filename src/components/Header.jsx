import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import perfil from '../assets/images/png/perfil.png';
const Header = () => {

    return (
        <>
            <header className="l-header" id="home">
                <section className="l-header__content">
                    <div className="m-img-perfil">
                        <img src={perfil} alt="" className="m-img-perfil__img" />
                    </div>
                    <article className="l-presentation">
                        <div className="l-presentaion__titles">
                            <h1 className="m-title m-title--m">Guillermo Juárez Martínez</h1>
                            <h1 className="m-title m-title--xxl">Web Developer.</h1>
                        </div>
                        
                        <div className="l-presentation__description">
                            <p className="m-description">
                            Passionate Developer dedicated to crafting captivating web experiences.
                            </p>
                            <p className="m-description">
                            Focused on efficiency for smooth, high-performance designs.
                            </p>
                        </div>

                        <div className="l-social-media">
                            <a href="mailto:guillejuma@outlook.es" className="m-icon-social">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                            <a href="https://wa.me/9516402940" className="m-icon-social">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                            <a href="https://linkedin.com/in/guillermo-juarez-martinez-665b66262" className="m-icon-social" >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/The-Memin" className="m-icon-social">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>

                    </article>
                </section>
            </header>
        </>
    );
}

export default Header;
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import foto from "../assets/images/png/perfil.png";
import GithubLogo from "../assets/images/svg/github.jsx";
import LinkedinIcon from "../assets/images/svg/linkedin.jsx";
import EmailIcon from "../assets/images/svg/mail.jsx";

const Header = () => {


    return (
        <>
        <header className="l-header">
            <section className="l-header__content">
                <div className="m-img-perfil">
                    <img src={foto} alt="" className="m-img-perfil__img" />
                </div>
                <article className="l-presentation">
                    <div className="l-presentaion__titles">
                        <h1 className="m-title m-title--m">Guillermo Juárez Martínez</h1>
                        <h1 className="m-title m-title--xxl">Frontend Developer.</h1>
                    </div>
                    
                    <div className="l-presentation__description">
                        <p className="m-description">
                        Passionate Frontend Developer dedicated to crafting captivating web experiences.
                        </p>
                        <p className="m-description">
                        Focused on efficiency for smooth, high-performance designs.
                        </p>
                    </div>

                    <div className="l-social-media">
                        <GithubLogo/>
                        <LinkedinIcon/>
                        <EmailIcon/>
                    </div>

                </article>
            </section>
        </header>
        </>
    );
}

export default Header;
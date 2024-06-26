import React, {useRef, useState} from 'react';
import horizontalScroll from '../animations/horizontalScroll';
import textDecode from "../animations/textDecode";
import { useGSAP } from '@gsap/react';
import ArticleAbout from './ArticleAbout';

const SecHorizontal = ({ toggleNegativeMenu})=>{
    const [arrContainers, setArrContainers] = useState([]);
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const articulos1 = [];
    const articulos2 = [];

    useGSAP(()=> { 
        const container = containerRef.current;
        let scroller = container.querySelector(".l-scroll");
        let sections = container.querySelectorAll(".l-scroll .l-section-scroll")
        const newContainers = horizontalScroll.scroller(scroller, sections, toggleNegativeMenu);
        horizontalScroll.upText(newContainers, sections);
        textDecode(textRef.current, containerRef.current, 'top', 'center-=150');
        setArrContainers(newContainers);
    })

    const texts1 = [
        {
            principal: "WordPress websites",
            secundary: "Manage your website using the web's most popular content management system.",
            imagen: "paginas.gif"
        },
        {
            principal: "Connect Four",
            secundary: "Developed with React and Animated with GSAP",
            imagen: "conecta4.gif"
        },
        
    ]
    const texts2 = [
        {
            principal: "Chat with React",
            secundary: "Real-time chat using React and Socket.io",
            imagen: "chat.gif"
        },
        {
            principal: "Tik-Tak-Toe",
            secundary: "Interactive Tic-Tac-Toe Development with React and CSS",
            imagen: "tiktactoe.gif"
        },
    ]

    function pushSection(labels, arr) {
        labels.forEach((text, index )=>{
            arr.push(
                <ArticleAbout 
                    key={index+"text"} 
                    principalText={text.principal} 
                    secondaryText={text.secundary}
                    urlImagen={`./assets/images/gif/${text.imagen}`}
            />);
        })
    }

    pushSection(texts1, articulos1)
    pushSection(texts2, articulos2)
    return(
        
        <div ref={containerRef} className="l-outer" id='projects'>
            <div className="l-scroll">
                
                <section className="l-section-scroll l-section-scrol--1" >
                    <h1 ref={textRef} className='m-title m-title--xl'>Projects</h1>
                </section>
                <section className="l-section-scroll l-section-scroll--2">
                    {articulos1}
                </section>
                <section className="l-section-scroll l-section-scroll--3">
                    {articulos2}
                </section>
            </div>
        </div>
    );
}

export default SecHorizontal;
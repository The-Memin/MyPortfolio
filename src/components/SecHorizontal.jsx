import React, {useEffect, useRef, useState} from 'react';
import horizontalScroll from '../animations/horizontalScroll';
import textDecode from "../animations/textDecode";
import { useGSAP } from '@gsap/react';
import ArticleAbout from './ArticleAbout';
import SplitType from 'split-type';

const SecHorizontal = ({ toggleNegativeMenu})=>{
    const [arrContainers, setArrContainers] = useState([]);
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const articulos1 = [];

    useGSAP(()=> { 
        const container = containerRef.current;
        let scroller = container.querySelector(".l-scroll");
        let sections = container.querySelectorAll(".l-scroll .l-section-scroll")
        const newContainers = horizontalScroll.scroller(scroller, sections, toggleNegativeMenu);
        //horizontalScroll.scaleSection(sections);
        horizontalScroll.upText(newContainers, sections);
        textDecode(textRef.current, containerRef.current, 'top', 'center-=150');

        setArrContainers(newContainers);
    })

    const texts = [
        {
            principal: "Tik-Tak-Toe",
            secundary: "Desarrollo interactivo de Tic-Tac-Toe con React y CSS",
            imagen: "tiktactoe.gif"
        },
        {
            principal: "Lorem ipsum dolor sit amet consectetur.",
            secundary: "Lorem ipsum dolor sit amet consectetur.",
            imagen: " "
        },
    ]

    texts.forEach((text, index )=>{
        articulos1.push(
            <ArticleAbout 
                key={index+"text"} 
                principalText={text.principal} 
                secondaryText={text.secundary}
                urlImagen={`./src/assets/images/gif/${text.imagen}`}
        />);
    })

    return(
        
        <div ref={containerRef} className="l-outer" id='aboutme'>
            <div className="l-scroll">
                
                <section className="l-section-scroll l-section-scrol--1" >
                    <h1 ref={textRef} className='m-title m-title--xl'>Projects</h1>
                </section>
                <section className="l-section-scroll l-section-scroll--2">
                    {articulos1}
                </section>
                <section className="l-section-scroll l-section-scroll--3">
                    <ArticleAbout/>
                </section>
            </div>
        </div>
    );
}

export default SecHorizontal;
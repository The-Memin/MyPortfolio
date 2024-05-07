import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import randomType from './randomType';

const textDecode = (text, container,startContainer="top", startElement="bottom-=100")=>{
    gsap.from(text, { 
        opacity: 0,
        y:100,
        scrollTrigger:{
            id: `text-${text}`,
            trigger: container,
            start: `${startContainer} ${startElement}`,
            toggleActions: "play none none reverse",
            onEnter: ()=>{
                randomType(text, '01', 600, false)
            },
            onEnterBack: ()=>{
                randomType(text, '01', 600, false)
            },
            //markers: true,
        }
    })
}

export default textDecode
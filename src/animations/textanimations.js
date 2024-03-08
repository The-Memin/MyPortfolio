import { gsap } from 'gsap';

export const cursorAnimation = ( element) =>{
    gsap.to(element, {
        duration: 0.5, 
        yoyo: true,
        repeat: -1,
        opacity: 0,
        ease: 'power1.inOut',
    })
}
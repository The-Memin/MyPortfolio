import {gsap} from 'gsap';

export const boxAnimation = ( element) => {
    gsap.to(element, {
        y: "100%",
        duration: 1,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
    });
}
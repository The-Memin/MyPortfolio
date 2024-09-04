import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import SplitType from 'split-type';

export function animationInit (scopeRef) {
  useGSAP(() => {
    const tl = gsap.timeline({ ease: 'power2.out' });

    // Asegúrate de que el elemento scopeRef esté definido
    if (!scopeRef.current) return;

    // Selecciona el texto y aplica SplitType
    const text = scopeRef.current.querySelector('.item-text');
    const splitText = new SplitType(text, { types: 'words chars' });

    // Define la animación
    tl.from('.item-rotate', {
      duration: 1,
      rotateX: 90,
      autoAlpha: 0
    })
    .from('.item-name', {
      duration: 1,
      y: 40,
      stagger: 0.3
    }, '<')
    .fromTo('.char', {
      xPercent: -100,
      autoAlpha: 0
    },
    {
      autoAlpha: 1,
      duration: 1,
      immediateRender: true,
      ease: 'power2.out',
      xPercent: 0,
      stagger: 0.08,
    }, '-=0.4')
    .from('.item-p', {
      duration: 1,
      lineHeight: '1.8em',
      autoAlpha: 0,
    }, '-=.9')
    .from('.item-y',{
      autoAlpha: 0,
      y: 20
    }, '-=1')

  }, {scope: scopeRef}); // Ejecuta el efecto cuando scopeRef cambie
};
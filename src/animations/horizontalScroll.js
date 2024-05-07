import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import randomType from './randomType';

const horizontalScroll = {
    scroller(scroller, sections, toggleNegativeMenu){
        sections = gsap.utils.toArray(sections);
        const arrContainers = []
        sections.slice(1).forEach((section, index) => {
            let container = gsap.to(section, {
                ease: "power2.inOut",
                x: 0,
                scrollTrigger:{
                    trigger: scroller,
                    start: `bottom+=${index}% bottom-=1`,
                    end: `bottom top`,
                    scrub: true,
                    //markers: true,
                    pin: true,
                }
            })
            arrContainers.push(container);
        });
        sections.forEach((section, index)=> {
            const triggerNav = {
                id:`section-${index}`,
                trigger:section,
                start:`center+=${index*100}% bottom`,
                end:`bottom+=${index*100}% center`,
                scrub: true,
                //markers: true,
                onEnter: () => toggleNegativeMenu(negative => index === 1 ? !negative : negative),
                onLeaveBack: () => toggleNegativeMenu(negative => index === 1 ? !negative : negative),
                onLeave: () => toggleNegativeMenu(negative => index === 2 ? !negative : negative),
                onEnterBack: () => toggleNegativeMenu(negative => index === 2 ? !negative : negative) 
            }
            ScrollTrigger.create(triggerNav);
        })
        return arrContainers;
    },

    scaleSection(sections){
        sections = gsap.utils.toArray(sections);
        const tl = gsap.timeline()
        sections.forEach((section, index)=> {
            tl.to(section, {
                scale: .6,
                //xPercent: 10,
                borderRadius: 10,
                ease: "power2.inOut",
                scrollTrigger:{
                    id:`section-${index}`,
                    trigger:section,
                    start:`bottom+=${index*100}% bottom`,
                    end:`bottom+=${index*100}% top`,
                    scrub: true,
                    //markers: true,
                }
            },"<")
        })
        
    },

    upText(containers, sections){
        sections = gsap.utils.toArray(sections);
        containers.forEach((container, index)=>{
            let text = sections[index+1].querySelectorAll(".gs-down")
            gsap.to(text,{
                top: 0,
                duration: .6,
                stagger: .3,
                //opacity:0,
                ease:'power2.out',
                scrollTrigger:{
                    toggleActions:'play none none reverse',
                    trigger:sections[index+1],
                    //scrub: true,
                    containerAnimation: container,
                    //markers: true,
                    start:'center right'
                }
            })
        })
    },   

}

export default horizontalScroll;

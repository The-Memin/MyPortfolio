import { useEffect, useRef } from "react";
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { Project } from './Project';
import { PROJECTS } from '../constants';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Projects(){

    const projectsRef = useRef(null)

    useEffect(()=>{

        const items = projectsRef.current.querySelectorAll("li")

        gsap.fromTo(
            items,
            {
                opacity: 0,
                y: 40
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger:{
                    trigger: projectsRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        )

    },[])

    return(
        <section id='projects' className="w-full flex flex-col items-center">
            <article className="w-full px-5 lg:px-0 max-w-md md:max-w-2xl lg:max-w-screen-lg mb-[10rem]">

                <h2 className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white'>
                    <DeveloperModeIcon style={{fontSize: 35}}/>
                    Last Projects
                </h2>

                <ol ref={projectsRef} className='mt-[3rem]'>
                    {
                        PROJECTS.map((project)=>(
                            <Project key={project.title} project={project}/>
                        ))
                    }
                </ol>

            </article>
        </section>
    )
}
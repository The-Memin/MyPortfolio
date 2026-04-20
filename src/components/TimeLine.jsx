import { useEffect, useRef } from "react";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { DateTime } from './DateTime';
import { JOBSINFO } from '../constants';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function TimeLine(){

    const sectionRef = useRef(null)
    const listRef = useRef(null)

    useEffect(()=>{

        const ctx = gsap.context(()=>{

            const items = listRef.current.querySelectorAll("li")

            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger: sectionRef.current,
                    start:"top 80%",
                    toggleActions:"play none none reverse"
                }
            })

            tl.from("h2",{
                opacity:0,
                y:20,
                duration:0.6,
                ease:"power3.out"
            })

            tl.from(items,{
                opacity:0,
                y:40,
                duration:0.8,
                ease:"power3.out",
                stagger:0.25
            },"-=0.2")

        }, sectionRef)

        return ()=> ctx.revert()

    },[])

    return(
        <section  
            ref={sectionRef}
            id='experience' 
            className="w-full md:mt-[6rem] lg:mt-4 px-4 lg:p-0 flex flex-col items-center"
        >

            <article className="mb-[8rem] w-full max-w-md md:max-w-2xl lg:max-w-screen-lg">

                <h2 className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white'>
                    <BusinessCenterOutlinedIcon style={{fontSize: 35}}/>
                    Experience
                </h2>

                <ol 
                    ref={listRef}
                    className='mt-14 flex flex-col gap-12 md:gap-0'
                >
                    {
                        JOBSINFO.map((job)=>(
                            <DateTime
                                key={job.company}
                                position={job.position}
                                company={job.company}
                                date={job.date}
                                description={job.description}
                                companyLink={job.link}
                            />
                        ))
                    }
                </ol>

            </article>

        </section>
    )
}
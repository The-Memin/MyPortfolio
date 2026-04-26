import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function About(){

    const sectionRef = useRef(null)
    const textRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(()=>{

        const ctx = gsap.context(()=>{

            const paragraphs = textRef.current.querySelectorAll("p")

            paragraphs.forEach((p)=>{

                const text = p.textContent
                p.textContent = ""

                const chars = text.split("").map((char)=>{
                    const span = document.createElement("span")
                    span.textContent = char
                    span.style.opacity = 0
                    p.appendChild(span)
                    return span
                })

                gsap.to(chars,{
                    opacity:1,
                    duration:0.01,
                    stagger:0.007,
                    ease:"none",
                    scrollTrigger:{
                        trigger: sectionRef.current,
                        start:"top 80%"
                    }
                })

            })

            gsap.from(imageRef.current,{
                x:120,
                rotation:12,
                opacity:0,
                duration:1.2,
                ease:"power3.out",
                scrollTrigger:{
                    trigger: sectionRef.current,
                    start:"top 80%",
                    toggleActions:"play none none reverse"
                }
            })

        },sectionRef)

        return ()=> ctx.revert()

    },[])

    return(
        <section
            ref={sectionRef}
            id="about"
            className="section scroll-m-20 px-6 lg:px-0 w-full mx-auto container max-w-md lg:max-w-screen-lg md:max-w-2xl"
        >

            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white">
                About Me
            </h2>

            <article className="flex flex-col items-center justify-center gap-12 text-gray-300 md:flex-row">

                <div
                    ref={textRef}
                    className="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"
                >
                    <p className="prose dark:prose-invert text-gray-300 max-w-none">
                    I'm Guillermo, a Computer Science engineer and software developer focused on building modern and responsive web applications. I specialize in frontend development using React, JavaScript, HTML5, and CSS3, with additional experience working with backend technologies such as Node.js and PHP. I enjoy creating scalable, well-structured applications and integrating RESTful APIs to deliver dynamic and efficient user experiences. I'm passionate about continuous learning and improving my development skills by exploring new technologies and best practices.
                    </p>
                </div>

                <img
                    ref={imageRef}
                    src="./compu.webp"
                    alt=""
                    width="200"
                    height="200"
                    className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20"
                />

            </article>

        </section>
    )
}
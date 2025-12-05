import { Navbar } from "./Navbar";
import { useRef } from "react";
import { animationInit } from "../animations/animationInit";
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function Header(){
    const containerRef = useRef(null);
    animationInit(containerRef);
    return(
        <header className="h-screen  w-full py-1 px-4 flex flex-col items-center">
            <Navbar/>

            <section className="relative w-full lg:py-28 flex flex-col items-center">
                <article ref={containerRef} className="pt-[6rem] w-full max-w-md md:max-w-2xl lg:max-w-screen-lg">
                    <div className="flex flex-col gap-5">
                        <div className="text-name">
                            <div className="flex gap-4 mb-4 item-rotate">
                                <img src="./GJM.webp" alt="Guillermo Juarez" className="rounded-full shadow-lg size-16" />
                                <a target="_blank" href="https://www.linkedin.com/in/guillermo-juarez-martinez-665b66262/" className="flex items-center transition md:justify-center md:hover:scale-105">
                                    <div className="flex items-center ">
                                        <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                                            <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer text-white/80 backdrop-blur-3xl whitespace-nowrap">
                                                Disponible para trabajar
                                            </div>
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div className="overflow-hidden mt-8">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl item-name">
                                    Hi!, I'm <strong className="font-semibold">Guillermo JM</strong> a
                                </h2>
                            </div>
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-8xl font-semibold item-text">Web Developer</h1>
                        <p className="item-p mt-6 max-w-screen-md lg:text-xl  [&>strong]:text-yellow-500 [&>strong]:font-semibold text-gray-300">
                        Experienced in frontend and backend development. As a <strong>Computer Science Engineer </strong>, I've worked on creating intuitive interfaces and complete solutions. <span className="hidden lg:inline">My goal is to merge design and functionality to craft engaging and effective web experiences.</span>
                        </p>

                        <nav className="flex flex-wrap gap-4 item-y mt-6">
                            <a href="mailto:guillejuma@outlook.es" target="_blank" rel="noopener noreferrer" role="link" className="leading-none inline-flex items-center justify-center gap-2 px-4 py-2 transition bg-gray-100 border border-gray-300 rounded-full text-gray-800 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">
                                 <MailIcon style={{ fontSize: 16 }} />
                                Contactame
                            </a>
                            <a href="https://www.linkedin.com/in/guillermo-juarez-martinez-665b66262/" className="leading-none inline-flex items-center justify-center gap-2 px-4 py-2 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white  group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">
                                <LinkedInIcon style={{ fontSize: 16 }}/>
                                Linkedin
                            </a>
                        </nav>
                    </div>
                </article>
            </section>
        </header>
    )

}

import { useRef, useEffect } from "react";
import Headroom from "headroom.js";
export function Navbar(){
    const navRef = useRef(null);

    useEffect(() => {
      const headroom = new Headroom(navRef.current);
      headroom.init();
    }, []);
    return(
        <nav ref={navRef} className="fixed h-14 w-full max-w-screen-lg flex items-center justify-center gap-4 lg:gap-10 text-sm lg:text-[1em] z-20">
            <ul className="w-fit flex gap-4 py-2 px-4 rounded-full">
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Last Projects</a>
                </li>
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="mailto:guillejuma@outlook.es">Contact</a>
                </li>
            </ul>
        </nav>
    )
}
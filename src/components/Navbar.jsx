
import { useRef, useEffect } from "react";
import Headroom from "headroom.js";
export function Navbar(){
    const navRef = useRef(null);

    useEffect(() => {
      const headroom = new Headroom(navRef.current);
      headroom.init();
    }, []);
    return(
        <nav ref={navRef} className="fixed h-14 w-full max-w-screen-lg flex items-center justify-center gap-4 lg:gap-10 text-sm z-20">
            <ul className="w-fit flex gap-4 py-2 px-4 rounded-full">
                <a href="">Experience</a>
                <a href="">Last Projects</a>
                <a href="">About Me</a>
                <a href="">Contact</a>
            </ul>
        </nav>
    )
}
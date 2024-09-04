
import { useRef, useEffect } from "react";
import Headroom from "headroom.js";
export function Navbar(){
    const navRef = useRef(null);

    useEffect(() => {
      const headroom = new Headroom(navRef.current);
      headroom.init();
    }, []);
    return(
        <nav ref={navRef} className="bg-dark-background fixed h-14 flex  w-full max-w-screen-lg justify-between items-center">
            <ul className="flex items-center justify-center gap-10 text-md w-full">
                <li>Experiencie</li>
                <li>Projects</li>
                <li>About me</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
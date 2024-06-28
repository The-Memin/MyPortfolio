import { useState , useRef, useEffect} from "react";
import HamburguerMenu from "./HamburguerMenu";
const Navbar = ({negativeMenu}) => {
    const navRef = useRef(null);
    useEffect(() => {
        negativeMenu ? navRef.current.classList.add('bg-white') : navRef.current.classList.remove('bg-white');
    }, [negativeMenu]);

    return (
        <>
            <nav
            className="l-navbar p-8"
            ref={navRef}
            >
                <a href="/" className="l-navbar__logo">
                    <svg className="l-navbar__logo__img" width="165" height="36" viewBox="0 0 165 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="path-1" d="M0.830966 20.7727V18.5L19.1264 9.18182V12.8182L5.09233 19.5795L5.20597 19.3523V19.9205L5.09233 19.6932L19.1264 26.4545V30.0909L0.830966 20.7727ZM36.5163 0.545453L27.1413 35.375H24.0732L33.4482 0.545453H36.5163ZM164.165 20.7727L145.87 30.0909V26.4545L159.904 19.6932L159.79 19.9205V19.3523L159.904 19.5795L145.87 12.8182V9.18182L164.165 18.5V20.7727Z" fill="#03FA6E"/>
                        <path className="path-2" d="M72.2461 16.293V27.3672C71.8294 27.901 71.1719 28.4805 70.2734 29.1055C69.388 29.7305 68.2292 30.2708 66.7969 30.7266C65.3646 31.1693 63.6068 31.3906 61.5234 31.3906C59.7135 31.3906 58.0599 31.0911 56.5625 30.4922C55.0651 29.8802 53.776 28.9883 52.6953 27.8164C51.6146 26.6445 50.7812 25.2122 50.1953 23.5195C49.6094 21.8268 49.3164 19.8932 49.3164 17.7188V15.8438C49.3164 13.6693 49.5898 11.7357 50.1367 10.043C50.6966 8.35026 51.4909 6.91797 52.5195 5.74609C53.5612 4.57422 54.8047 3.68229 56.25 3.07031C57.7083 2.45833 59.3359 2.15234 61.1328 2.15234C63.5417 2.15234 65.5208 2.54948 67.0703 3.34375C68.6328 4.13802 69.8307 5.23177 70.6641 6.625C71.4974 8.00521 72.0182 9.59375 72.2266 11.3906H66.9922C66.849 10.401 66.5625 9.53516 66.1328 8.79297C65.7031 8.03776 65.0911 7.45182 64.2969 7.03516C63.5156 6.60547 62.5 6.39062 61.25 6.39062C60.1953 6.39062 59.2643 6.59896 58.457 7.01562C57.6497 7.43229 56.9727 8.03776 56.4258 8.83203C55.8789 9.6263 55.4622 10.6094 55.1758 11.7812C54.9023 12.9531 54.7656 14.2943 54.7656 15.8047V17.7188C54.7656 19.2422 54.9219 20.5964 55.2344 21.7812C55.5469 22.9531 55.9961 23.9427 56.582 24.75C57.181 25.5443 57.9167 26.1497 58.7891 26.5664C59.6745 26.9701 60.6771 27.1719 61.7969 27.1719C62.8125 27.1719 63.6523 27.0872 64.3164 26.918C64.9935 26.7357 65.5339 26.5208 65.9375 26.2734C66.3411 26.026 66.6536 25.7852 66.875 25.5508V20.2188H61.2305V16.293H72.2461ZM88.9258 22.3672V2.5625H94.2969V22.3672C94.2969 24.2552 93.8867 25.8763 93.0664 27.2305C92.2461 28.5716 91.1263 29.6003 89.707 30.3164C88.2878 31.0326 86.6862 31.3906 84.9023 31.3906C83.0664 31.3906 81.4388 31.0846 80.0195 30.4727C78.6003 29.8477 77.487 28.8971 76.6797 27.6211C75.8854 26.3451 75.4883 24.724 75.4883 22.7578H80.8789C80.8789 23.8255 81.0417 24.6849 81.3672 25.3359C81.6927 25.987 82.1549 26.4557 82.7539 26.7422C83.3659 27.0286 84.082 27.1719 84.9023 27.1719C85.6966 27.1719 86.3932 26.9896 86.9922 26.625C87.6042 26.2474 88.0794 25.7005 88.418 24.9844C88.7565 24.2682 88.9258 23.3958 88.9258 22.3672ZM101.973 2.5625H106.621L114.395 23.9688L122.148 2.5625H126.816L116.25 31H112.52L101.973 2.5625ZM99.6289 2.5625H104.18L105 22.2305V31H99.6289V2.5625ZM124.59 2.5625H129.16V31H123.789V22.2305L124.59 2.5625Z" fill="white"/>
                    </svg>
                </a>

                <HamburguerMenu negativeMenu = {negativeMenu}/>
                
            </nav>
        </>
    )
}

export default Navbar;
import Wordpress from "../icons/Wordpress"
import Php from "../icons/Php"
import JQuery from "../icons/jQuery"
import Sass from "../icons/Sass"
import ReactIcon from "../icons/React"
import TailwindCSS from "../icons/Tailwind"
import Astro from "../icons/Astro"
import Elementor from "../icons/Elementor"

export function IconTecnology({index, tecnology}){
    const tecnologies = {
        'Wordpress':<Wordpress/>,
        'jQuery': <JQuery/>,
        'Php':<Php/>,
        'Sass': <Sass/>,
        'React': <ReactIcon/>,
        'Tailwind': <TailwindCSS/>,
        'Astro': <Astro/>,
        'Elementor': <Elementor/>
    }
    return(
        <li><span className={`flex items-center gap-x-2 rounded-lg text-xs text-white py-1 px-2 ${index==0?'bg-blue-950':'bg-slate-800'}`}>
            {tecnologies[tecnology]}
            {tecnology}
        </span></li>
    )
}
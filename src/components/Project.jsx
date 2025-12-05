import { BottonProject } from "./BottonProject"
import { IconTecnology } from "./IconTecnology"
export function Project({project}){
    return(
        <li className="mt-16 lg:mt-10">
            <div className="flex flex-col gap-6 md:grid grid-cols-2 lg:gap-10 group">
                <figure className="relative h-fit project-img rounded-md overflow-hidden grid place-items-center bg-slate-100">
                    <img className="relative right-[-2rem] top-6 group-hover:scale-110 transition-all duration-500" src={project.image} alt="project GJM" />
                </figure>
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-gray-100">{project.title}</h3>
                    <div className="flex flex-wrap mt-2">
                        <ul className="flex gap-3">
                            {
                                project.tecnologies.map((tecnology, index)=>
                                    <IconTecnology key={tecnology} index = {index} tecnology={tecnology}/>
                                )
                            }
                        </ul> 
                        <p className="mt-4 text-gray-400 text-[.85em] lg:text-[1em]">
                            {project.description}
                        </p>
                    </div>
                    
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                        {
                            project.url_code && <BottonProject code = {true} link = {project.url_code} text={'Code'}/>
                        }
                        <BottonProject link = {project.url} text={'Preview'}/>
                    </footer>
                </div>
            </div>
        </li>
    )
}
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { Project } from './Project';
import {PROJECTS} from '../constants'
export function Projects(){
    return(
        <section id='projects' className="w-full flex flex-col items-center">
            <article className="w-full px-5 lg:px-0 max-w-md md:max-w-2xl lg:max-w-screen-lg mb-[10rem]">
                <h2 className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white undefined'>
                    <DeveloperModeIcon style={{fontSize: 35}}/>
                    Last Projects
                </h2>
                <ol className='mt-[3rem]'>
                    {
                        PROJECTS.map((project)=>
                            <Project key={project.title} project = {project}/>
                        )
                    }
                </ol>
            </article>
        </section>
    )
}
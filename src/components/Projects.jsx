import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { Project } from './Project';
import {PROJECTS} from '../constants'
export function Projects(){
    return(
        <main className="w-full flex flex-col items-center">
            <section className="w-full px-5 lg:px-0 md:max-w-screen-md lg:max-w-screen-lg mb-[10rem]">
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
            </section>
        </main>
    )
}
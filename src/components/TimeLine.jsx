import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { DateTime } from './DateTime';
import { JOBSINFO} from '../constants';
export function TimeLine(){
    return(
        <main className="w-full mt-[6rem] lg:mt-4 px-4 lg:p-0 flex flex-col items-center">
            <section className="mb-[8rem] w-full md:max-w-screen-md lg:max-w-screen-lg">
                <h2 className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white undefined'>
                    <BusinessCenterOutlinedIcon  style={{fontSize: 35}}/>
                    Experience
                </h2>
                <ol className='mt-14 flex flex-col gap-12 md:gap-0'>
                    {
                        JOBSINFO.map((job)=>
                            <DateTime key={job.company} position= {job.position} company = {job.company} date= {job.date} description = {job.description} companyLink={job.link}/>
                        )
                    }
                </ol>
            </section>
        </main>
    )
}

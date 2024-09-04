import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { DateTime } from './DateTime';
import { JOBSINFO} from '../constants';
export function TimeLine(){
    return(
        <main className="w-full flex flex-col items-center">
            <section className="mb-[8rem] w-full max-w-screen-lg">
                <h2 className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white undefined'>
                    <BusinessCenterOutlinedIcon  style={{fontSize: 35}}/>
                    Experience
                </h2>
                <ol className='mt-14'>
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



export function DateTime({position, company, date, description, companyLink}){
    return(
        <li className='realtive flex pl-8 flex-col gap-5 md:gap-0 md:flex-row md:items-center'>
            <div className='relative md:w-2/5 lg:p-8 text-start md:text-end flex flex-col gap-1 md:pr-[5rem] text-nowrap before:content-[""] before:absolute before:h-[340%] md:before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:left-[-1.5em] md:before:left-auto md:before:right-0 pb-8'>
                <h3 className='text-xl font-bold text-sky-400'>{position}</h3>
                <a href={companyLink} target="_blank" className='font-semibold text-xl text-gray-600 dark:text-white'>{company}</a>
                <time datetime="">{date}</time>
                <span className='w-[16px] aspect-square bg-sky-400 absolute left-[-31px] md:left-auto md:right-[-7px] rounded-full mt-10'></span>
            </div>
            <p className='md:pl-[5rem] md:w-3/5 text-[.9em] lg:text-[1em]'>
            {description}
            </p>
        </li>
    );
}
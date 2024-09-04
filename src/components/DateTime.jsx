

export function DateTime({position, company, date, description, companyLink}){
    return(
        <li className='flex items-center'>
            <div className='relative w-2/5 p-8 text-end flex flex-col gap-1 pr-[5rem] text-nowrap before:content-[""] before:absolute before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:right-0'>
                <h3 className='text-xl font-bold text-sky-400'>{position}</h3>
                <a href={companyLink} target="_blank" className='font-semibold text-xl text-gray-600 dark:text-white'>{company}</a>
                <time datetime="">{date}</time>
                <span className='w-[16px] aspect-square bg-sky-400 absolute right-[-7px] rounded-full mt-10'></span>
            </div>
            <p className='pl-[5rem] w-3/5'>
            {description}
            </p>
        </li>
    );
}
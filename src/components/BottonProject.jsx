import Github from '../icons/Github';
import LinkIcon from '@mui/icons-material/Link';

export function BottonProject({code, text, link}){
    return(
        <a href={link} target="_blank" className="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-1 space-x-2 transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-lg hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">
            {code ? 
                <Github /> :
                <LinkIcon/>}
            {text}
        </a>
    )
}
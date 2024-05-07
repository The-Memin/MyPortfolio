import {useRef} from 'react';
import { useGSAP } from '@gsap/react';
import textDecode from "../animations/textDecode";
import gsap from 'gsap';
const SectionSkills = ()=>{
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    useGSAP(()=> {
        textDecode(textRef.current, textRef.current );
        
    })

    return(
        <div ref={sectionRef} className="l-section-skills" id="skills">
            <h1 ref={textRef} className='m-title--xl'>Skills</h1>
        </div>
    );
}

export default SectionSkills;
import {useRef} from 'react';
import { useGSAP } from '@gsap/react';
import Skill from './Skill';
import textDecode from "../animations/textDecode";
import gsap from 'gsap';

const SectionSkills = ()=>{
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    useGSAP(()=> {
        textDecode(textRef.current, textRef.current );
    })

    return(
        <section ref={sectionRef} className="l-section-skills" id="skills">
            <article className="l-article-title">
                <h1 ref={textRef} className='m-title--xl'>Skills</h1>
            </article>

            <article className="l-article-skill">
                <div className="l-skills">
                    <h2 className="m-skill-type">
                        Frontend Skills
                    </h2>
                    <div className="l-skill-group">
                        <Skill imgName="css3" percent='98'/>
                        <Skill imgName="javascript-logo" percent='88'/>
                        <Skill imgName="html5" percent='98'/>
                    </div>
                    <div className="l-skill-group">
                        <Skill imgName="sass-logo" percent='98'/>
                        <Skill imgName="tailwind" percent='80'/>
                    </div>
                    <div className="l-skill-group">
                        <Skill imgName="react" percent='70'/>
                    </div>

                </div>

                <div className="l-skills">
                    <h2 className="m-skill-type">
                        Backend Skills
                    </h2>
                    <div className="l-skill-group">
                        <Skill imgName="java-logo" percent='85'/>
                        <Skill imgName="nodejs-logo" percent='65'/>
                        <Skill imgName="php-logo" percent='80'/>
                    </div>
                    <div className="l-skill-group">
                        <Skill imgName="mongodb-logo" percent='55'/>
                        <Skill imgName="mysql" percent='88'/>
                    </div>
                    <div className="l-skill-group">
                        <Skill imgName="express" percent='65'/>
                    </div>
                </div>

                <div className="l-skills">
                    <h2 className="m-skill-type">
                        More Skills
                    </h2>
                    <div className="l-skill-group">
                        <Skill imgName="github-logo" noPercent= {true}/>
                        <Skill imgName="git-logo" noPercent= {true}/>
                    </div>
                    <div className="l-skill-group">
                        <Skill imgName="figma-logo" noPercent= {true}/>
                        <Skill imgName="wordpress-logo" noPercent= {true}/>
                    </div>
                    <div className="l-skill-group">
                        <Skill imgName="gsap" noPercent= {true}/>
                    </div>
                </div>

            </article>
        </section>
    );
}

export default SectionSkills;
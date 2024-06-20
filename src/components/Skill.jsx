import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
const Skill = ({imgName, percent, noPercent})=>{
    const URLImages = '/src/assets/images/png/';
    const percentRef = useRef(null);
    useGSAP(()=>{
        gsap.to(percentRef.current,{
            width: percentRef.current.dataset.percent,
            ease: 'power2.in',
            scrollTrigger: {
                trigger: percentRef.current,
                toggleActions: 'play none none reverse'
            }
        })
    })

    return(
        <figure className="m-skill">
            <img src={URLImages+imgName+'.png'} alt="" className="m-skill__logo" />
            <div className={`m-progres-bar ${noPercent ? 'deactivate':''}`}><div ref={percentRef} className="m-progres-bar__progres" data-percent={percent}></div></div>
        </figure>
    )
}

export default Skill;
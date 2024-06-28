import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import textDecode from "../animations/textDecode";
import TestimonialCard from "./Testimonial";
import { testimonials } from "../constants/testimonials";
const SectionPop = ({ toggleNegativeMenu}) =>{
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    useGSAP(()=> {
        textDecode(textRef.current, textRef.current );
        gsap.from(sectionRef.current, 
            {
                scrollTrigger:{
                    trigger: sectionRef.current,
                    start: 'center bottom',
                    //markers: true,
                    onEnter: () => toggleNegativeMenu(negative => !negative),
                    onLeaveBack: () => toggleNegativeMenu(negative => !negative),
                }
            }
        )
    })

    return (
        <div ref={sectionRef} className="l-section l-section--white" id="testimonials">
            <article className="l-article-title l-article-title--white">
                <h1 ref={textRef}>Testimonials</h1>
            </article>

            <article className="l-article">
                <div className="l-card-content">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                    key={index}
                    text={testimonial.text}
                    author={testimonial.author}
                    role={testimonial.role}
                    imageUrl={`./assets/images/photos/${testimonial.imageName}`}
                    />
                ))}
                </div>
            </article>
        </div>
    )
}

export default SectionPop;
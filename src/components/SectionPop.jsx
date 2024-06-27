import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import textDecode from "../animations/textDecode";
import TestimonialCard from "./Testimonial";
import { testimonials } from "../constants/testimonials";
const SectionPop = () =>{
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    useGSAP(()=> {
        textDecode(textRef.current, textRef.current );
    })

    return (
        <div ref={sectionRef} className="l-section" id="testimonials">
            <article className="l-article-title">
                <h1 ref={textRef} className='m-title--xl'>Testimonials</h1>
            </article>

            <article className="l-article">
                <div className="l-card-content">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                    key={index}
                    text={testimonial.text}
                    author={testimonial.author}
                    role={testimonial.role}
                    imageUrl={`/src/assets/images/photos/${testimonial.imageName}`}
                    />
                ))}
                </div>
            </article>
        </div>
    )
}

export default SectionPop;
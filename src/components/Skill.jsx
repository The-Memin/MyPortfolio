import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Skill({ skill }) {

  const barRef = useRef(null);

  useEffect(() => {

    gsap.fromTo(
      barRef.current,
      { width: "0%" },
      {
        width: `${skill.level}%`,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: barRef.current,
          start: "top 85%",
        }
      }
    );

  }, []);

  return (
    <li className="flex flex-col gap-3 p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">

      <div className="flex items-center gap-3">
        
        <span className="text-white font-medium">{skill.name}</span>
      </div>

      <div className="w-full h-2 bg-white/10 rounded overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-green-400 rounded"
          style={{ width: "0%" }}
        />
      </div>

    </li>
  );
}
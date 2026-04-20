import PsychologyIcon from "@mui/icons-material/Psychology";
import { SKILL_CATEGORIES } from "../constants/skills";
import { SkillCategory } from "./SkillCategory";

export function Skills() {
  return (
    <section id="skills" className="w-full flex flex-col items-center">
      <article className="w-full px-5 lg:px-0 max-w-md md:max-w-2xl lg:max-w-screen-lg mb-[10rem]">

        <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white">
          <PsychologyIcon style={{ fontSize: 35 }} />
          Skills
        </h2>

        <div className="mt-[3rem] flex flex-col gap-12">
          {SKILL_CATEGORIES.map((category) => (
            <SkillCategory key={category.name} category={category} />
          ))}
        </div>

      </article>
    </section>
  );
}
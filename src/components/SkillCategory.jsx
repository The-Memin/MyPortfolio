import { Skill } from "./Skill";

export function SkillCategory({ category }) {
  return (
    <div className="flex flex-col gap-6">

      <h3 className="text-lg text-white/70 font-semibold">
        {category.name}
      </h3>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {category.skills.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </ul>

    </div>
  );
}
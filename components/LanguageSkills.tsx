import React from "react";
import { hexToRgb } from "@/utils/utils";
import Icon from "@mdi/react";
import { skills } from "@/config/skills";

const LanguageSkills = () => {
  return (
    <section id="skills" className="flex flex-wrap justify-center gap-4 mt-4">
      {skills.map((skill) => {
        const color = hexToRgb(skill.color, 0, true);
        return (
          <div
            className="text-3xs dark:hover:bg-divider hover:text-accent-7 flex items-center justify-center gap-2 truncate rounded-full border bg-background px-[0.6875rem] py-2 transition hover:scale-[1.015] hover:border-[rgba(var(--skill-color)/0.56)] hover:bg-[rgba(var(--skill-color)/0.12)] dark:hover:bg-[rgba(var(--skill-color)/0.18)]"
            // @ts-ignore
            style={{ "--skill-color": color }}
            key={skill.name}
          >
            <Icon path={skill.iconPath} size={0.8} />
            <p className={""}>{skill.name}</p>
          </div>
        );
      })}
    </section>
  );
};

export default LanguageSkills;

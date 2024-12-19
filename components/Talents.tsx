import React from "react";

const TalentList = [
  {
    name: "7 years for Back-end",
    detail:
      "I'm a full-stack developer who simply loves to code. Whether it's building dynamic websites, solving complex challenges, or just experimenting with new tech, I find joy in every line of code I write. For me, coding isn't just a job—it's a way to bring ideas to life and keep learning something new every day. ",
  },
  {
    name: "5 years for Front-end",
    detail:
      "I'm a full-stack developer who simply loves to code. I’m always eager to learn, grow, and collaborate with others who share the same passion for tech.",
  },
  {
    name: "Language skill",
    detail: "English:B2, Finnish:A2",
  },
];

const TalentCard = ({
  detail,
  index,
}: {
  detail: (typeof TalentList)[0];
  index: number;
}) => {
  return (
    <li className="text-sm leading-6">
      <figure className="dark:highlight-white/5 relative flex flex-col-reverse rounded-lg bg-neutral-50 p-6 dark:bg-neutral-900">
        <blockquote className="mt-4 text-neutral-700 dark:text-neutral-400">
          <p>{detail.detail}</p>
        </blockquote>
        <figcaption className="flex items-center space-x-4">
          <div className="flex-none">
            <h3 className="flex size-10 items-center justify-center rounded-xl bg-neutral-800 pt-1 text-2xl font-extrabold text-purple-400">
              {index + 1}
            </h3>
          </div>
          <div className="flex">
            <div className="text-xl font-semibold leading-tight text-neutral-900 dark:text-neutral-50">
              <span className="absolute inset-0"></span>
              {detail.name}
            </div>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

const Talents = () => {
  return (
    <section id="talents" className="pt-10">
      <div className="flex md:hidden lg:hidden">
        <ul className="space-y-4">
          {TalentList.map((e, i) => (
            <TalentCard key={e.name} detail={e} index={i} />
          ))}
        </ul>
      </div>

      <div className="hidden grid-cols-2 gap-4 md:grid lg:hidden">
        <ul className="space-y-4">
          {TalentList.slice(0, 2).map((e, i) => (
            <TalentCard key={e.name} detail={e} index={i * 2} />
          ))}
        </ul>
        <ul className="space-y-4">
          {TalentList.slice(2, 3).map((e, i) => (
            <TalentCard key={e.name} detail={e} index={i * 2 + 1} />
          ))}
        </ul>
      </div>

      <ul className="hidden gap-4 lg:flex ">
        {TalentList.slice(0, 3).map((e, i) => (
          <TalentCard key={e.name} detail={e} index={i} />
        ))}
      </ul>
    </section>
  );
};

export default Talents;

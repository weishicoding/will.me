import React from "react";
import { personalCareerPath } from "@/config/common";

const CareerPath = () => {
  return (
    <>
      <div className="mt-8 md:w-6/12">
        <ol className="relative ml-2 border-l border-neutral-200 dark:border-neutral-700">
          {personalCareerPath.map((achievement) => (
            <li className="mb-10 ml-6" key={achievement.title}>
              <div className="absolute -left-1.5 mt-1.5 size-3 rounded-full border border-white bg-neutral-200 dark:border-neutral-900 dark:bg-purple-500" />
              <h3 className="mb-1 text-lg font-semibold text-neutral-900 dark:text-white">
                {achievement.title}
              </h3>
              <p className="text-base font-normal text-neutral-500 dark:text-neutral-400">
                {achievement.subtitle}
              </p>
            </li>
          ))}
        </ol>
        {/* <p className="text-neutral-600 dark:text-neutral-400 lg:text-xl">
          Con questo percorso voglio svelati i segreti del settore e permetterti
          di raggiungere i tuoi obiettivi professionali.
          <br />
        </p> */}
      </div>
    </>
  );
};

export default CareerPath;

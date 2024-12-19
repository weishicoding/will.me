import React from "react";
import { personalCareerPath } from "@/config/common";
import Image from "next/image";

const CareerPath = () => {
  return (
    <>
      <div className="flex flex-col justify-between md:flex-row mt-10">
        <div className="relative mr-auto h-full md:w-5/12">
          <div className="my-8 flex flex-col gap-8 md:grid md:grid-cols-2">
            <Image
              src="/images/profile.jpg"
              alt=""
              loading="lazy"
              width={500}
              height={500}
              className="m-auto hidden rounded-lg drop-shadow-2xl md:block"
            />

            <Image
              src="/images/profile.jpg"
              alt=""
              loading="lazy"
              width={500}
              height={500}
              className="m-auto hidden rounded-lg drop-shadow-2xl md:block"
            />
            <Image
              src="/images/default.png"
              alt=""
              loading="lazy"
              width={1000}
              height={500}
              className="col-span-2 m-auto rounded-lg drop-shadow-2xl transition-all duration-200 hover:rotate-0"
            />
          </div>
        </div>
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
        </div>
      </div>
    </>
  );
};

export default CareerPath;

import React from "react";
import ContactCard from "../ContactCard";

const Skill = () => {
  return (
    <>
      <section id="business" className="mt-32">
        <div className="mx-auto max-w-7xl pb-8 lg:px-8">
          <div className="max-w-2xl lg:mx-auto lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-400">
              Service for companies
            </h2>
            <p className="tracking-tigh mt-2 text-3xl font-bold sm:text-4xl">
              I help companies unlock their{" "}
              <strong className="underline decoration-purple-400 underline-offset-8">
                potential
              </strong>{" "}
              with{" "}
              <strong className="underline decoration-purple-400 underline-offset-8">
                technology
              </strong>
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground dark:text-gray-300">
              I have worked at three major companies and led over 6 successful
              projects, driving growth and results. I help businesses scale and
              succeed with my expertise. My goal is to guide entrepreneurs with
              clear direction to achieve their success."
            </p>
          </div>
        </div>
      </section>

      <ContactCard />
    </>
  );
};

export default Skill;

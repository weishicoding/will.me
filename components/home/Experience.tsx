import React from "react";
import CareerPath from "../CareerPath";
import Image from "next/image";

const Experience = () => {
  return (
    <>
      <div className="mt-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white md:text-4xl lg:text-5xl">
            I'm Will Shi and I'll be your{" "}
            <span className="underline decoration-purple-400 underline-offset-4">
              candidate
            </span>
            .
          </h2>
        </div>

        <div className="flex flex-col justify-between md:flex-row">
          <p className="my-8 text-neutral-600 dark:text-neutral-400 md:w-6/12 lg:text-lg">
            I'm a full-stack developer who simply loves to code. Whether it's
            building dynamic websites, solving complex challenges, or just
            experimenting with new tech, I find joy in every line of code I
            write.
            <br />
            <br />
            For me, coding isn't just a job—it's a way to bring ideas to life
            and keep learning something new every day. I’m always eager to
            learn, grow, and collaborate with others who share the same passion
            for tech.
            <br />
            <br />
            I’m always eager to learn, grow, and collaborate with others who
            share the same passion for tech.
            <br />
            <br />
            I'm a full-stack developer who simply loves to code. Whether it's
            building dynamic websites
            <br />
            <br /> I’m always eager to learn, grow, and collaborate with others
            who share the same passion for tech.
          </p>
          <div className="mt-8 h-full md:w-5/12">
            <div className="grid grid-flow-row grid-cols-2 gap-6 md:gap-8">
              <Image
                src="/images/profile.jpg"
                alt=""
                loading="lazy"
                width={500}
                height={500}
                className="m-auto hidden -rotate-3 rounded-xl drop-shadow-2xl transition-all duration-200 hover:rotate-0 md:block"
              />

              <Image
                src="/images/profile.jpg"
                alt=""
                loading="lazy"
                width={500}
                height={500}
                className="m-auto rounded-lg drop-shadow-2xl"
              />
              <Image
                src="/images/profile.jpg"
                alt=""
                loading="lazy"
                unoptimized
                width={500}
                height={500}
                className="m-auto rounded-lg drop-shadow-2xl"
              />

              <Image
                src="/images/profile.jpg"
                alt=""
                loading="lazy"
                width={500}
                height={500}
                className="m-auto rounded-lg drop-shadow-2xl"
              />

              <Image
                src="/images/profile.jpg"
                alt=""
                loading="lazy"
                width={500}
                height={500}
                className="m-auto rounded-lg drop-shadow-2xl md:hidden"
              />
            </div>
          </div>
        </div>
        <CareerPath />
      </div>
    </>
  );
};

export default Experience;

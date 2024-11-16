import Image from "next/image";
import React from "react";
import Profile from "@/public/images/profile.jpg";
import { Button } from "../ui/button";
import Link from "next/link";

const Introduction = () => {
  return (
    <>
      <section id="introduction" className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-16 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-60 2xl:mx-auto 2xl:max-w-6xl"
        >
          <div className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl dark:from-purple-700"></div>
          <div className="h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600"></div>
        </div>
        <div className="md:flex justify-between mt-12">
          <div className="text-center items-center md:text-start">
            {/* Name */}
            <h1 className="bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:via-white/80 dark:to-white/60 md:text-7xl">
              Will Shi
            </h1>
            <h2 className="text-accent-7 pt-8 text-xl font-semibold leading-8 sm:text-2xl sm:leading-9 md:pr-12">
              Hi👋 I'm Will, a passionate {""}
              <strong className="underline decoration-yellow-400 underline-offset-8">
                full-stack engineer
              </strong>
            </h2>
            <h2 className="text-accent-7 pt-2 text-xl font-semibold leading-8 sm:text-2xl sm:leading-9 md:pr-12">
              Base on Helsinki, Finland 🇫🇮
            </h2>
            <h2 className="text-accent-7 pt-2 text-xl font-semibold leading-8 sm:text-2xl sm:leading-9 md:pr-12">
              I started learning to code {""}
              <strong className="underline decoration-yellow-400 underline-offset-8">
                in 2016
              </strong>
            </h2>
            <h2 className="text-accent-7 pt-2 text-xl font-semibold leading-8 sm:text-2xl sm:leading-9 md:pr-12">
              I have passion in JS/TS
            </h2>
            <h2 className="text-accent-7 pt-2 text-xl font-semibold leading-8 sm:text-2xl sm:leading-9 md:pr-12">
              I've been working in Back-end in Java and Spring for 7 years.
            </h2>
            <div className="mt-12 flex justify-center gap-2 md:justify-start">
              <Button variant="primary" className="font-semibold leading-7">
                Download CV
              </Button>
              <Button variant="secondary" className="font-semibold leading-7">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="items-center md:item-start aspect-square w-[260px] h-[400px] md:w-[380px] md:h-[560px]">
            <Image
              src={Profile}
              alt=""
              placeholder="blur"
              className="rotate-3 rounded-lg drop-shadow-2xl transition-all duration-200 hover:rotate-0"
            />
          </div>
        </div>
        <Background />
      </section>
    </>
  );
};

function Background() {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <div className="absolute inset-0 -z-10 size-full bg-[linear-gradient(to_right,#ffffff11_1px,transparent_1px),linear-gradient(to_bottom,#ffffff11_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
  );
}

export default Introduction;

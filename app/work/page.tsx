import Image from "next/image";
import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import PageHerder from "@/components/PageHerder";
import { Routes } from "@/config/common";

const title = "All projects";
const description =
  "Here are some of the projects I’ve worked on—each one reflecting my passion for coding, problem-solving, and continuous learning. Explore what I’ve built, and feel free to reach out if you’d like to discuss or collaborate!";

const Work = () => {
  return (
    <>
      <PageHerder
        title={title}
        description={description}
        colorFrom="from-pink-600"
        colorTo="to-purple-400"
      />

      <div className="-mx-4 mt-8 grid sm:grid-cols-2">
        {allProjects.map(({ _id, name, image, description, slug }) => {
          return (
            <Link
              key={_id}
              href={Routes.Project(slug)}
              className="flex flex-col rounded-lg p-4 transition-colors duration-300 hover:bg-muted"
            >
              <Image
                src={image as string}
                width={1200}
                height={630}
                alt={name}
                className="rounded-lg"
              />
              <div className="flex-1 py-4">
                <div>
                  <h2 className="text-xl font-bold">{name}</h2>
                  <div className="mt-1 text-muted-foreground">
                    {description}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Work;

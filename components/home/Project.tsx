import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { ProjectCard } from "../ProjectCard";
import { Routes } from "@/config/common";

const products = [
  {
    id: "project-1",
    title: "project 1",
    url: "",
    description: "this is a demo",
    pictogram: "/images/projects/project.png",
    pictogramDark: "/images/projects/project.png",
    logo: "/images/projects/project.png",
    logoDark: "/images/projects/project.png",
  },
  {
    id: "project-1",
    title: "project 1",
    badge: " ✨",
    url: "",
    description: "this is a demo",
    pictogram: "/images/projects/project.png",
    pictogramDark: "/images/projects/project.png",
    logo: "/images/projects/project.png",
    logoDark: "/images/projects/project.png",
  },
];

const Project = () => {
  return (
    <section>
      {/* Products title */}
      <div className="mt-24 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end lg:mt-32">
        <div className="flex-auto ">
          <h2 className="text-balance text-2xl font-bold md:text-3xl lg:text-4xl">
            Some of my{" "}
            <strong className="underline decoration-purple-400 underline-offset-8">
              projects
            </strong>
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground text-neutral-600 dark:text-neutral-400 ">
            Some of the most important projects I have worked on
          </p>
        </div>

        <Button
          variant="ghost"
          className="group -mx-3 text-neutral-600 dark:text-neutral-400 md:mx-0"
          size="sm"
          asChild
        >
          <Link href={Routes.Work}>
            More projects
            <IconArrowRight className="ml-2 inline-block size-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      {/* Products */}
      <div className="mt-6 grid auto-rows-fr gap-4 md:grid-cols-2">
        {products.map((product) => (
          <ProjectCard
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.pictogramDark}
            href={product.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;

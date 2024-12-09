import Experience from "@/components/home/Experience";
import PageHerder from "@/components/PageHerder";
import Talents from "@/components/Talents";
import React from "react";

const title = "About me";
const description =
  "Hi, I'm a full-stack developer who simply loves to code. Whether it's building dynamic websites, solving complex challenges, or just experimenting with new tech, I find joy in every line of code I write. For me, coding isn't just a job—it's a way to bring ideas to life and keep learning something new every day.  I’m always eager to learn, grow, and collaborate with others who share the same passion for tech.";
const About = () => {
  return (
    <>
      <PageHerder
        title={title}
        description={description}
        colorFrom="from-purple-600"
        colorTo="to-pink-400"
      />
      <Talents />
      <Experience />
    </>
  );
};

export default About;

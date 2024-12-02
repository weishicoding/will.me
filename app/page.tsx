import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import Introduction from "@/components/home/Introduction";
import Post from "@/components/home/Post";
import Project from "@/components/home/Project";
import Skill from "@/components/home/Skill";
import React from "react";

const Home = () => {
  return (
    <>
      <Introduction />
      <About />
      <Project />
      <Skill />
      <Post />
    </>
  );
};

export default Home;

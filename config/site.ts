import { Metadata } from "next";

type Site = {
  title: string;
  description: string;
  url: string;
  logo: string;
};

export const site: Site = {
  title: "Will Shi",
  description: "Full-Stack Engineer",
  url: process.env.NODE_ENV === "production" ? "" : "http://localhost:3000",
  logo: "",
};

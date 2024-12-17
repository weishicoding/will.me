// Personal career path
export const personalCareerPath = [
  { title: "Present...", subtitle: "Mar 2024 - present" },
  { title: "Vesko", subtitle: "July 2024 - Sep 2024" },
  { title: "Asiainfo", subtitle: "Apr 2021 - Feb 2024" },
  { title: "Chinasoft International", subtitle: "Jan 2019 - Apr 2021" },
  { title: "IsoftStone", subtitle: "Apr 2017 - Jan 2019" },
];

export const BlogAuthors = [
  {
    id: "Will",
    name: "Will Shi",
  },
];

export const Routes = {
  Home: "/",
  Blog: "/blog",
  Contact: "/contact",
  About: "/about",
  Work: "/work",
  LocalBlogPost: (slug: string) => `/blog/${slug}`,
  Project: (slug: string) => `/work/${slug}`,
};

import PageHerder from "@/components/PageHerder";

const title = "All posts";
const description =
  "This blog is my space to reflect on the challenges we all face and the lessons we learn along the way. My hope is that by sharing my experiences, I can help others find clarity, inspiration, and support when they need it most.";

const Blog = () => {
  return (
    <>
      <PageHerder
        title={title}
        description={description}
        colorFrom="from-pink-600"
        colorTo="to-purple-400"
      />
    </>
  );
};

export default Blog;

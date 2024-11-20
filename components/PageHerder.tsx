"use client";

import React from "react";

type Props = {
  title: string;
  description: string;
  colorFrom: string;
  colorTo: string;
};

const PageHerder: React.FC<Props> = ({
  title,
  description,
  colorFrom,
  colorTo,
}) => {
  return (
    <>
      <h1
        className={`my-4 bg-gradient-to-r ${colorFrom} ${colorTo} bg-clip-text text-5xl text-transparent font-extrabold `}
      >
        {title}
      </h1>
      <p className="mb-8 text-muted-foreground">{description}</p>
    </>
  );
};

export default PageHerder;

"use client";

import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#a855f7"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressProvider;

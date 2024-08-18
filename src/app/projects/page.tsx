import Projects from "@/components/layouts/Projects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Projects`,
  // alternates: {
  //   canonical: process.env.DOMAIN,
  // },
};

const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;

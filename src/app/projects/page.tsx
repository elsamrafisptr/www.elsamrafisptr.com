import Projects from "@/components/layouts/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;

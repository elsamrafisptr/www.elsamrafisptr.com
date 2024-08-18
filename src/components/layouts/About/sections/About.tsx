import React from "react";
import Headline from "./Headline";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <>
      <Headline />
      <Separator className="my-4 md:my-6" />
      <WorkExperience />
      <Education />
      <Skills />
    </>
  );
};

export default About;

import React from "react";
import Headline from "./Headline";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/elements/Container";

const About = () => {
  return (
    <>
      <Headline />
      <Container>
        <Separator />
      </Container>
      <WorkExperience />
      <Education />
      <Skills />
    </>
  );
};

export default About;

import React from "react";
import Headline from "./Headline";
import Services from "./Services";
import Projects from "./Projects";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/elements/Container";

const Home = () => {
  return (
    <>
      <Headline />
      <Container>
        <Separator className="" />
      </Container>
      <Services />
      <Projects />
    </>
  );
};

export default Home;

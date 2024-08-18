import React from "react";
import Headline from "./Headline";
import Services from "./Services";
import Projects from "./Projects";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <>
      <Headline />
      <Separator className="my-4 md:my-6" />
      <Services />
      <Projects />
    </>
  );
};

export default Home;

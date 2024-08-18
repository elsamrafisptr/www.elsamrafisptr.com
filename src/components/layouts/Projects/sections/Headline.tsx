import BlurFade from "@/components/elements/BlurFadeAnimation";
import Container from "@/components/elements/Container";
import { Icons } from "@/components/elements/Icons";
import { PROJECTSECTION } from "@/constants/contents/layouts/ProjectsData";
import React from "react";

const Headline = () => {
  return (
    <Container>
      <BlurFade delay={0.04 * 5}>
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-3">
            <Icons.project className="size-10" />
            <h1 className="font-bold leading-tight text-3xl">{PROJECTSECTION.headline.title}</h1>
          </span>
          <p className="leading-relaxed text-gray-700">{PROJECTSECTION.headline.desc}</p>
        </div>
      </BlurFade>
    </Container>
  );
};

export default Headline;

import BlurFade from "@/components/elements/BlurFadeAnimation";
import Container from "@/components/elements/Container";
import { Icons } from "@/components/elements/Icons";
import React from "react";

const Headline = () => {
  return (
    <Container>
      <BlurFade delay={0.04 * 5}>
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-3">
            <Icons.contact className="size-10" />
            <h1 className="font-bold leading-tight text-3xl">{"Let's Get in Touch"}</h1>
          </span>
          <p className="leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam nemo doloremque.
          </p>
        </div>
      </BlurFade>
    </Container>
  );
};

export default Headline;

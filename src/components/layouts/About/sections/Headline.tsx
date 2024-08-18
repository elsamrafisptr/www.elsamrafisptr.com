import BlurFade from "@/components/elements/BlurFadeAnimation";
import Container from "@/components/elements/Container";
import GradualSpacing from "@/components/elements/GradualAnimation";
import { HOMEDATA } from "@/constants/contents/layouts/HomeData";
import React from "react";

const BLUR_FADE_DELAY = 0.04;

const Headline = () => {
  return (
    <Container>
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <div className="flex flex-col gap-3">
          {/* <GradualSpacing
          text={HOMEDATA.headline.title}
          className="text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:leading-tight"
        /> */}
          <h1 className="text-4xl font-bold text-black dark:text-white md:leading-tight">Elsam Rafi Saputra</h1>
          <div className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-6 md:items-center">
            <ul className="flex gap-3">
              {HOMEDATA.headline.type.map((item, index) => {
                return (
                  <li key={index} className="text-sm md:text-lg font-medium">
                    <span className="text-blue-600 dark:text-blue-400  font-bold">|</span> {item}
                  </li>
                );
              })}
            </ul>
            <h2 className="hidden">{"Based in " + HOMEDATA.headline.location.country}</h2>
          </div>
          <p className="text-justify text-gray-700 text-sm md:text-base dark:text-gray-100">
            {HOMEDATA.headline.description}
          </p>
          <p className="text-justify text-gray-700 text-sm md:text-base dark:text-gray-100">
            {HOMEDATA.headline.summary}
          </p>
        </div>
      </BlurFade>
    </Container>
  );
};

export default Headline;

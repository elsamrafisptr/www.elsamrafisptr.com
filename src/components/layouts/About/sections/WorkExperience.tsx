import BlurFade from "@/components/elements/BlurFadeAnimation";
import Container from "@/components/elements/Container";
import { ResumeCard } from "@/components/elements/ResumeCard";
import { WORKDATA } from "@/constants/contents/components/works";
import React from "react";

const BLUR_FADE_DELAY = 0.04;

const WorkExperience = () => {
  return (
    <Container>
      <div id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-3xl font-bold mt-3">Work Experience</h2>
          </BlurFade>
          {WORKDATA.map((work, id) => (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                milestones={work.milestones}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default WorkExperience;

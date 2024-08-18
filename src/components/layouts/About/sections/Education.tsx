import BlurFade from "@/components/elements/BlurFadeAnimation";
import Container from "@/components/elements/Container";
import { ResumeCard } from "@/components/elements/ResumeCard";
import { EDUCATIONDATA } from "@/constants/contents/components/education";
import React from "react";

const BLUR_FADE_DELAY = 0.04;

const Education = () => {
  return (
    <Container className="my-4 md:my-8">
      <div id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-3xl font-bold mt-3">Education</h2>
          </BlurFade>
          {EDUCATIONDATA.map((education, id) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                milestones={education.milestones}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Education;

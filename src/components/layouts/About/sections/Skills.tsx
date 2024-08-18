import BlurFade from "@/components/elements/BlurFadeAnimation";
import Container from "@/components/elements/Container";
import { Badge } from "@/components/ui/badge";
import { SKILLSDATA } from "@/constants/contents/components/skills";
import React from "react";

const BLUR_FADE_DELAY = 0.04;

const Skills = () => {
  return (
    <Container>
      <div id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-3xl font-bold mt-3">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {SKILLSDATA.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;

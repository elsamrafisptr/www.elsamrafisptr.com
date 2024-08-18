import BlurFade from "@/components/elements/BlurFadeAnimation";
import Container from "@/components/elements/Container";
import ProjectCard from "@/components/elements/ProjectCard";
import { PROJECTSECTION } from "@/constants/contents/layouts/ProjectsData";
import generateRandomIndex from "@/services/generateRandomIndex";

const ProjectList = () => {
  return (
    <Container className="mt-4 md:mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {generateRandomIndex(PROJECTSECTION.projects.length, PROJECTSECTION.projects).map((item, index) => {
          return (
            <BlurFade key={index} delay={0.04 * 5 * (index + 0.5)}>
              <ProjectCard
                title={PROJECTSECTION.projects[item].title}
                dateRange={PROJECTSECTION.projects[item].dateRange}
                image={PROJECTSECTION.projects[item].image}
                stacks={PROJECTSECTION.projects[item].stacks}
                details={PROJECTSECTION.projects[item].details}
                navigation={PROJECTSECTION.projects[item].navigation}
              />
            </BlurFade>
          );
        })}
      </div>
    </Container>
  );
};

export default ProjectList;

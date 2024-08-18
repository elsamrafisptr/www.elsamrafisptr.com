import BlurFade from "@/components/elements/BlurFadeAnimation";
import Container from "@/components/elements/Container";
import ProjectCard from "@/components/elements/ProjectCard";
import { HOMEDATA } from "@/constants/contents/layouts/HomeData";
import generateRandomIndex from "@/services/generateRandomIndex";
import Link from "next/link";

const Projects = () => {
  return (
    <Container className="mt-4 md:mt-8">
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-3xl">Projects Headline</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {generateRandomIndex(4, HOMEDATA.projects).map((item, index) => {
            return (
              <BlurFade key={index} delay={0.04 * 5 * (index + 0.5)}>
                <ProjectCard
                  title={HOMEDATA.projects[item].title}
                  dateRange={HOMEDATA.projects[item].dateRange}
                  image={HOMEDATA.projects[item].image}
                  stacks={HOMEDATA.projects[item].stacks}
                  details={HOMEDATA.projects[item].details}
                  navigation={HOMEDATA.projects[item].navigation}
                />
              </BlurFade>
            );
          })}
        </div>
        <Link
          href={"/projects"}
          className="py-3 text-center font-semibold text-white w-full bg-blue-600 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          View More Project
        </Link>
      </div>
    </Container>
  );
};

export default Projects;

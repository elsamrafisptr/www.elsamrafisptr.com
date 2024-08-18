import Container from "@/components/elements/Container";
import WarningSection from "@/components/elements/WarningSection";
import React from "react";

interface ProjectDetailPageProps {
  params: { slug: string };
}

const ProjectDetailPage = ({ params }: ProjectDetailPageProps) => {
  const title = params.slug.charAt(0).toUpperCase() + params.slug.slice(1).split("-").join(" ");

  return (
    <Container className="h-[85vh] flex justify-center items-center md:h-full">
      {/* <Headline />
  <SocialList /> */}
      <WarningSection title={title + " use case is under maintenance"} />
    </Container>
  );
};

export default ProjectDetailPage;

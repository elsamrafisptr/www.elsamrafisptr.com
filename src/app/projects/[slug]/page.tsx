import Container from "@/components/elements/Container";
import WarningSection from "@/components/elements/WarningSection";
import { Metadata } from "next";
import React from "react";

interface ProjectDetailPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const title = await (params.slug.charAt(0).toUpperCase() + params.slug.slice(1).split("-").join(" "));
  return {
    title: `${title}`,
  };
}

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const title = await (params.slug.charAt(0).toUpperCase() + params.slug.slice(1).split("-").join(" "));

  return (
    <Container className="h-[85vh] flex justify-center items-center md:h-full">
      {/* <Headline />
  <SocialList /> */}
      <WarningSection title={title + " use case is under maintenance"} />
    </Container>
  );
};

export default ProjectDetailPage;

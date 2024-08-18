import About from "@/components/layouts/About";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `About Me`,
  // alternates: {
  //   canonical: process.env.DOMAIN,
  // },
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;

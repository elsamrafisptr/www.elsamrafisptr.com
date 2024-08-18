import Contact from "@/components/layouts/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Contact`,
  // alternates: {
  //   canonical: process.env.DOMAIN,
  // },
};

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;

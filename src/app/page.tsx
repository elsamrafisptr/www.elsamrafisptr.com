import Home from "@/components/layouts/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Welcome to My Personal Website`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

const HomePage = () => {
  return <Home />;
};

export default HomePage;

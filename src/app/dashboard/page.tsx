import Dashboard from "@/components/layouts/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Dashboard`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

const DashboardPage = () => {
  return <Dashboard />;
};

export default DashboardPage;

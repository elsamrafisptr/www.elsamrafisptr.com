import Dashboard from "@/components/layouts/Dashboard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Dashboard`,
  // alternates: {
  //   canonical: process.env.DOMAIN,
  // },
};

const DashboardPage = () => {
  return <Dashboard />;
};

export default DashboardPage;

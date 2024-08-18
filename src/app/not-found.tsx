import Container from "@/components/elements/Container";
import WarningSection from "@/components/elements/WarningSection";
import React from "react";

const NotFound = () => {
  return (
    <Container className="bg-white dark:bg-gray-900 h-[85vh] flex justify-center items-center md:h-full">
      <WarningSection title="Page Not Found" />
    </Container>
  );
};

export default NotFound;

import Container from "@/components/elements/Container";
import WarningSection from "@/components/elements/warningSection";

const Dashboard = () => {
  return (
    <Container className="h-[85vh] flex justify-center items-center md:h-full">
      <WarningSection title="Page is Under Maintenance" />
    </Container>
  );
};

export default Dashboard;

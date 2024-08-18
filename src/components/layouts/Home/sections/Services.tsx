import BlurFade from "@/components/elements/BlurFadeAnimation";
import Container from "@/components/elements/Container";
import ServiceCard from "@/components/elements/ServiceCard";
import { HOMEDATA } from "@/constants/contents/layouts/HomeData";

const Services = () => {
  return (
    <Container>
      <div>
        <BlurFade delay={0.04 * 5}>
          <h1 className="font-bold text-3xl">Service Headline</h1>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {HOMEDATA.services.map((item, index) => {
            return (
              <BlurFade key={index} delay={0.04 * 5 * (index + 0.5)} className="text-white">
                <ServiceCard title={item.title} desc={item.desc} tags={item.tags} />;
              </BlurFade>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Services;

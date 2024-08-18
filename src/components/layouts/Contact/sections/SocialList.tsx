import BlurFade from "@/components/elements/BlurFadeAnimation";
import Container from "@/components/elements/Container";
import SocialCard from "@/components/elements/SocialCard";
import { CONTACTDATA } from "@/constants/contents/components/contact";

const SocialList = () => {
  return (
    <Container className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
      {CONTACTDATA.social.map((item, index) => {
        return (
          <BlurFade key={index} delay={0.04 * 5 * (index + 0.5)}>
            <SocialCard
              title={item.title}
              desc={item.desc}
              href={item.href}
              socialImage={item.socialImage}
              socialName={item.socialName}
              className={item.className}
              icon={item.icon}
            />
          </BlurFade>
        );
      })}
    </Container>
  );
};

export default SocialList;

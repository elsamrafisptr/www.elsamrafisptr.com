import { Icons } from "@/components/elements/Icons";
import { PROJECTSDATA } from "../components/projects";

export const HOMEDATA = {
  headline: {
    title: "Elsam Rafi Saputra",
    initials: "ERS",
    type: ["Remote Worker", "Software Engineer", "Product Designer"],
    location: {
      city: "Bandung",
      country: "Indonesia",
    },
    description:
      "I'm a 3rd year informatics student at Telkom University Bandung who has several skills such as software engineering, design, and project management. In addition, I have always been interested in this field of information technology as a entrepreneur, especially in the field of artificial intelligence, software engineering, and others. Because of this, I enjoy solving new problems, being adaptable to learn new things wherever the environment is, and working hard efficiently. I also always use professionalism when working in a group.",
    summary:
      "After working and experiencing several freelance client projects around and participating in the organization and work of the closest people, in 2023 I finally decided to venture into creating an agency or business in the digital world (digital services and digital products). Because there is a desire to be free to work flexibly and gain experience and money from anywhere. Moreover, being able to help open up jobs for other people also feels good. Therefore, be me today with the best version every day. Cheers 👋✨",
    avatarUrl: "/me.png",
  },
  services: [
    {
      title: "Development Services",
      desc: "Turning design and planning into software that proves that wonderful concepts can be implemented to you.",
      icon: Icons.globe,
      tags: ["Website Development", "Mobile Development", "Product Development"],
    },
    {
      title: "Design Services",
      desc: "Designing interfaces and conducting user research to achieve remarkable results in our creative projects.",
      icon: Icons.globe,
      tags: ["Graphic Design", "UI/UX Design", "Product Design", "Social Media Design"],
    },
    // {
    //   title: "Marketing Services",
    //   desc: "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses.",
    //   icon: Icons.globe,
    //   tags: ["Graphic Design", "UI/UX Design", "Product Design"],
    // },
  ],
  skills: {},
  projects: PROJECTSDATA,
};

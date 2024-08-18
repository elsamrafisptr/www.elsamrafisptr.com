import { Icons } from "@/components/elements/Icons";

export const CONTACTDATA = {
  email: "elsamrafisptr@gmail.com",
  tel: "+6281232614262",
  social: [
    {
      socialName: "Instagram",
      title: "Close and Up to Date",
      desc: "Stay up to date with the content creation and my portfolio.",
      href: "https://instagram.com/arnawadigital",
      socialImage: {
        src: "/web.png",
        alt: "Instagram Logo",
      },
      icon: <Icons.instagram className="size-8 text-white" />,
      className: {
        classContainer: "bg-gradient-to-t from-pink-200 to-pink-50 border-pink-300",
        classText: "text-pink-700",
        classBtn: "bg-pink-700",
      },
    },
    // {
    //   socialName: "Linkedin",
    //   title: "Let's Connect",
    //   desc: "Explore the source code for all my projects on GitHub",
    //   href: "https://linkedin.com/in/elsamrafisptr",
    //   socialImage: {
    //     src: "/web.png",
    //     alt: "Linkedin Logo",
    //   },
    //   icon: <Icons.linkedin className="size-8 text-white" />,
    //   className: {
    //     classContainer: "bg-gradient-to-t from-blue-200 to-blue-50 border-blue-300",
    //     classText: "text-blue-700",
    //     classBtn: "bg-blue-700",
    //   },
    // },
    {
      socialName: "GitHub",
      title: "Explore the code",
      desc: "Explore the source code for all my projects on GitHub",
      href: "https://github.com/elsamrafisptr",
      socialImage: {
        src: "/web.png",
        alt: "Github Logo",
      },
      icon: <Icons.github className="size-8 text-white" />,
      className: {
        classContainer: "bg-gradient-to-t from-gray-200 to-gray-50 border-gray-300",
        classText: "text-gray-800",
        classBtn: "bg-gray-800",
      },
    },
    {
      socialName: "Behance",
      title: "Keep Creative",
      desc: "Watch our newest portfolio and dive more about my usecase.",
      href: "https://www.behance.net/arnawa-digital",
      socialImage: {
        src: "",
        alt: "",
      },
      icon: <Icons.behance className="size-8 text-white" />,
      className: {
        classContainer: "bg-gradient-to-t from-blue-200 to-blue-50 border-blue-300",
        classText: "text-blue-700",
        classBtn: "bg-blue-600",
      },
    },
    {
      socialName: "Dribbble",
      title: "Discover the Art",
      desc: "Discover our creations and my expertise and experience.",
      href: "https://dribbble.com/arnawadigital",
      socialImage: {
        src: "",
        alt: "",
      },
      icon: <Icons.dribbble className="size-8 text-white" />,
      className: {
        classContainer: "bg-gradient-to-t from-fuchsia-200 to-fuchsia-50 border-fuchsia-300",
        classText: "text-fuchsia-800",
        classBtn: "bg-fuchsia-700",
      },
    },
  ],
};

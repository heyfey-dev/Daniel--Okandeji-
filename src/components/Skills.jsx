import React, { useEffect } from "react";
import Css from "../assets/css.png";
import GitHub from "../assets/github.png";
import Html from "../assets/html.png";
import Javascript from "../assets/javascript.png";
import MongoDB from "../assets/mongo.png";
import NextJs from "../assets/nextjs.png";
import NodeJs from "../assets/node.png";
import ReactJs from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Typescript from "../assets/typescript.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const techStack = [
    { src: Html, label: "HTML" },
    { src: Css, label: "CSS" },
    { src: Javascript, label: "JavaScript" },
    { src: GitHub, label: "GitHub" },
    { src: Tailwind, label: "Tailwind CSS" },
    { src: NodeJs, label: "Node.js" },
    { src: NextJs, label: "Next.js" },
    { src: MongoDB, label: "MongoDB" },
    { src: ReactJs, label: "React.js", spin: true },
    { src: Typescript, label: "TypeScript" },
  ];

  return (
    <section className="pt-16" data-aos="fade-up" id="skills">
      <div className="ml-6 md:ml-20">
        <h1 className="font-bold text-base md:text-lg inline border-b-2 border-gray-300">
          Skills
        </h1>
        <p className="text-sm md:text-base mt-1">Technologies I work with:</p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6 p-6 md:mx-20">
        {techStack.map(({ src, label, spin }, index) => (
          <div key={label} className="flex flex-col items-center space-y-1 text-center" data-aos="zoom-in" data-aos-delay={index * 50}>
            <img src={src} alt={`${label}-img`} className={`h-10 w-10 md:h-14 md:w-14 ${spin ? "animate-spin-slow" : ""}`} />
            <p className="text-xs md:text-sm font-medium">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

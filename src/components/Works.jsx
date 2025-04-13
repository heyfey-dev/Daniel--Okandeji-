import React, { useEffect } from "react";
import learnovate from "../assets/learnovate.png";
import csv from "../assets/csv.png";
import ethical from "../assets/ethical.png";
import unistore from "../assets/unistore.png";
import bhu from "../assets/bhu.png";
import bidpwa from "../assets/bidpwa.png";
import password from "../assets/forgotpass.png";
import voluxe from "../assets/voluxe.png";
import { FaGithub, FaLink } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export const Works = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="pt-20" id="works">
      <div className="text-[#0C0C0C]">
        <div className="flex flex-col justify-center items-center">
          <h1
            className="border-2 border-[#C8CACD] py-1 px-4 font-semibold text-sm text-white md:text-base"
            data-aos="fade-up"
          >
            Works
          </h1>
          <p className="mt-1 text-sm md:text-base text-white" data-aos="fade-up">
            These are some of my works👇🏻
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-10 gap-y-8 mx-10 md:mx-14 py-8">
          {[
            {
              img: voluxe,
              title: "Voluxe",
              desc: "  Voluxe is a sleek and responsive logistics web platform designed to streamline and support logistics operations for businesses and individuals. ",
              stack: ["HTML", "CSS", "Bootstrap", "SASS"],
              github: "https://github.com/heyfey-dev/voluxeProject",
              live: "https://heyfey-dev.github.io/voluxeProject/",
            },
            {
              img: unistore,
              title: "Unistore",
              desc: "  Unistore is a web-based e-commerce platform developed to facilitate buying and selling among university students in Nigeria. Built with simplicity and accessibility in mind, Unistore offers a seamless, campus-centered marketplace tailored to the daily needs of undergraduates.",
              stack: ["React.Js", "TypeScript", "PostgreSQL", "Next.js"],
            },
            {
              img: learnovate,
              title: "Learnovate",
              desc: " Learnovate is a cutting-edge e-learning platform crafted to make online education more accessible, interactive, and community-driven. It offers a dynamic space where users can learn new skills, become tutors to teach others, and even sell educational resources like eBooks. With its all-in-one functionality, Learnovate empowers anyone looking to grow, share, or monetize knowledge in a seamless digital environment.",
              stack: ["React.Js", "TailwindCSS", "Typescript"],
            },
            {
              img: ethical,
              title: "Ethical Warriors",
              desc: "  Ethical Warriors is a unifying platform built with the mission to foster harmony, understanding, and peaceful coexistence among people of diverse religious beliefs across Nigeria and beyond. In a world often divided by differences, this platform serves as a digital sanctuary where individuals from all faiths can come together, share values, promote ethical living, and engage in meaningful interfaith dialogue.",
              stack: ["next.js", "Tailwind CSS", "Typescript"],
            },
            {
              img: bhu,
              title: "Bhustore",
              desc: " BhuStore is a student-focused e-commerce platform designed to streamline buying and selling within university communities, with a special focus on Bingham University. The platform connects students with a trusted, campus-wide marketplace where they can sell goods, purchase items, and access essential services without leaving the school environment.",
              stack: ["React.Js", "TailwindCSS", "Typescript", "Next.js"],
              live: "https://fablog-app.netlify.app/",
            },
            {
              img: bidpwa,
              title: "BidPWA",
              desc: "BidPWA is a progressive web auction platform built to provide a fast, accessible, and seamless bidding experience across devices. Designed with mobile-first performance in mind, BidPWA allows users to bid, sell, and win items in real-time, bringing the excitement of live auctions into the palm of their hands.",
              stack: ["Next.js", "Typescript", "Tailwind CSS", "Node", "GraphQL"],
              live: "https://faquizapp.netlify.app/",
            },
            {
              img: csv,
              title: "CSV Upload",
              desc: "  This project is a robust and efficient CSV upload and validation tool designed to streamline data intake and ensure data integrity. It enables users to upload CSV files, which are then automatically parsed, validated, and checked for inconsistencies.",
              stack: ["HTML", "CSS", "Node.js", "MongoDB", "Express.js"],
              github: "https://github.com/favourAyomikun/WeatherApp",
              live: "https://faweather-app.netlify.app/",
            },
            {
              img: password,
              title: "Password Generator",
              desc: "A simple web app for generating random passwords.",
              stack: ["HTML", "CSS", "Javascript"],
              github: "https://github.com/favourAyomikun/TaskManagementApp-Client",
              live: "https://task-m-a.vercel.app/",
            },
          ].map((work, idx) => (
            <div
              key={idx}
              className="works-container"
              data-aos={idx % 2 === 0 ? "fade-up" : "fade-down"}
            >
              <img
                src={work.img}
                alt={`${work.title}-img`}
                className="mb-3 rounded-md rounded-b-none w-full  object-center object-cover"
              />
              <div>
                <h1 className="text-base md:text-base font-bold mb-1 px-2">
                  {work.title}
                </h1>
                <h2 className="mb-2 px-2 text-lg md:text-sm">{work.desc}</h2>
                <span className="flex flex-wrap gap-1 px-2">
                  {work.stack.map((tech, i) => (
                    <p
                      key={i}
                      className="works-pill text-xs px-2 py-1 bg-gray-200 rounded-full"
                    >
                      {tech}
                    </p>
                  ))}
                </span>
              </div>
              {(work.github || work.live) && (
                <span className="mt-2 mx-2 pt-2 border-t border-[#0C0C0C] flex items-center justify-between">
                  {work.github && (
                    <Link to={work.github}>
                      <FaGithub className="text-base" />
                    </Link>
                  )}
                  {work.live && (
                    <Link to={work.live}>
                      <FaLink className="text-base" />
                    </Link>
                  )}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

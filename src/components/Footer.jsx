import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiGithub } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="mt-24">
      <div className="flex flex-col items-center justify-center py-4 space-y-4">
        <span className="flex space-x-8 md:space-x-6">
          <a href="https://github.com/heyfey-dev" target="_blank">
            <SiGithub className="socials-icon" />
          </a>
          <a href="">
            <FaXTwitter className="socials-icon" />
          </a>
          <a href="mailto:danielokandeji@gmail.com">
            <MdOutlineMailOutline className="socials-icon" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-okandeji-728b14258/" target="_blank">
            <FiLinkedin className="socials-icon" />
          </a>
        </span>
        <div className="font-semibold text-sm md:text-base">&copy; D.0 2025</div>
      </div>
    </footer>
  );
};

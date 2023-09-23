"use client";
import { useDarkModeStore } from "@/store/DarkMode";
import {
  IconMoon,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconX,
  IconBaselineDensityMedium,
  IconBrandGithub,
  IconBrightnessUp,
} from "@tabler/icons-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface NavbarPropsType {
  experinceRef: React.RefObject<HTMLElement>;
  projectRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

export default function Navbar({
  experinceRef,
  projectRef,
  contactRef,
}: NavbarPropsType) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [navigate, setNavigate] = useState<string>("about");
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  const handleButton = (
    name: string,
    ref?: React.RefObject<HTMLElement> | null
  ) => {
    setNavigate(name);
    window.scrollTo({
      top: name == "about" ? 0 : ref ? ref.current?.offsetTop : 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const offestY = window.scrollY;
    const experinceOffset = experinceRef.current?.offsetTop || 0;
    let currentSection = navigate;
    if (currentSection != "about" && offestY < experinceOffset) {
      setNavigate("about");
    } else if (offestY > (contactRef.current?.offsetTop || 0)) {
      setNavigate("contact");
    } else if (offestY > (projectRef.current?.offsetTop || 0)) {
      setNavigate("project");
    } else if (offestY > (experinceRef.current?.offsetTop || 0)) {
      setNavigate("experience");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav className="w-full mx-auto py-8 fixed top-0 z-50">
      {/* Mid */}
      <div className="container hidden md:flex px-4 lg:px-0 mx-auto relative">
        <div className="logo hidden md:block ">
          <span className="character">W</span>
          <Image src={`/hexagon.png`} width={64} height={64} alt="hexagon" />
        </div>
        <div className="nav-wrapper">
          <ul className="nav-list shadow-lg">
            <li>
              <button
                className={`nav-link ${navigate == "about" && "active"}`}
                onClick={() => handleButton("about", null)}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${navigate == "experience" && "active"}`}
                onClick={() => handleButton("experience", experinceRef)}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${navigate == "project" && "active"}`}
                onClick={() => handleButton("project", projectRef)}
              >
                Project
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${navigate == "contact" && "active"}`}
                onClick={() => handleButton("contact", contactRef)}
              >
                Contact
              </button>
            </li>

            <li>
              <button
                className="overflow-hidden nav-dark-mode w-9 h-9"
                onClick={() => toggleDarkMode()}
              >
                <div
                  className={`flex w-[68px] items-center justify-between text-primary relative ${
                    isDarkMode ? "-left-10" : "left-1"
                  }`}
                >
                  <IconMoon size={24} />
                  <IconBrightnessUp size={24} />
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Humburger */}
      <div className="container hamburger">
        <button
          className="bg-white text-center rounded-full shadow-md p-2 text-primary"
          onClick={() => setIsActive(!isActive)}
        >
          {!isActive ? <IconBaselineDensityMedium /> : <IconX />}
        </button>
        <div
          className={`nav-wrapper ${
            isActive ? "right-4" : "-right-[400px] opacity-0"
          }`}
        >
          <ul className="nav-list ">
            <li>
              <button
                className={`nav-link ${navigate == "about" && "active"}`}
                onClick={() => handleButton("about", null)}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${navigate == "experience" && "active"}`}
                onClick={() => handleButton("experience", experinceRef)}
              >
                Experince
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${navigate == "project" && "active"}`}
                onClick={() => handleButton("project", projectRef)}
              >
                Project
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${navigate == "contact" && "active"}`}
                onClick={() => handleButton("contact", contactRef)}
              >
                Contact
              </button>
            </li>

            <li>
              <div className="flex gap-2 justify-between items-center">
                <button
                  className="overflow-hidden nav-dark-mode w-9 h-9"
                  onClick={() => toggleDarkMode()}
                >
                  <div
                    className={`flex w-[68px] items-center justify-between text-primary relative ${
                      isDarkMode ? "-left-10" : "left-1"
                    }`}
                  >
                    <IconMoon size={24} />
                    <IconBrightnessUp size={24} />
                  </div>
                </button>
                |
                <a href="https://github.com/Wing-Dimas" className="brand">
                  <IconBrandGithub
                    size={24}
                    dur={0}
                    stroke={1.6}
                    className="duration-0"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/dimas-wing-bagas-bimantara-570b05197/"
                  className="brand"
                >
                  <IconBrandLinkedin
                    size={24}
                    dur={0}
                    stroke={1.6}
                    className="duration-0"
                  />
                </a>
                <a href="https://twitter.com/WingBagas" className="brand">
                  <IconBrandTwitter
                    size={24}
                    dur={0}
                    stroke={1.6}
                    className="duration-0"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

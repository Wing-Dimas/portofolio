"use client";
import { IconBrandTwitter, IconX } from "@tabler/icons-react";
import { IconBaselineDensityMedium } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconMoon } from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState<boolean>(false);
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
              <a href="#" className="nav-link active">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Experince
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Project
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>

            <li>
              <button className="nav-link">
                <IconMoon />
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
          className={`nav-wrapper ${isActive ? "right-4" : "-right-[400px]"}`}
        >
          <ul className="nav-list ">
            <li>
              <a href="#" className="nav-link active">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Experince
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Project
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>

            <li>
              <div className="flex gap-2 justify-between items-center">
                <button className="nav-link">
                  <IconMoon />
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

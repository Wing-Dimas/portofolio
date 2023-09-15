import { IconMoon } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full mx-auto my-10 fixed top-0">
      <div className="container flex mx-auto relative">
        <div className="logo ">
          <span className="character">W</span>
          <Image src={`/hexagon.png`} width={64} height={64} alt="hexagon" />
        </div>
        <div className="nav-wrapper">
          <ul className="nav-list">
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
    </nav>
  );
}

import React from "react";
import {
  IconArrowNarrowRight,
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Hero() {
  return (
    <section className="container md:px-32 mx-auto mt-36 pt-8 relative min-h-[80vh]">
      <div className="intro">
        <p className="leading-normal text-base text-primary font-semibold ">
          Hi, my name is
        </p>
        <h1 className="leading-normal text-5xl text-black dark:text-light font-semibold ">
          Dimas Wing Bagas Bimantara
        </h1>
        <h2 className="leading-normal text-5xl text-primary font-bold">
          I build things for the web
        </h2>
        <p className=" text-lg text-primary font-medium w-96 mt-2">
          I am a student in the field of informatics engineering. Currently
          focusing on creating single page applications, Writing My Blog, and
          freelance.
        </p>
        <button className="btn-resume">
          <span className="text-2xl font-medium">Resume</span>
          <IconArrowNarrowRight className="arrow" />
        </button>
      </div>

      <div className="absolute top-12 right-0">
        <div className="flex flex-col gap-4 text-primary justify-center items-center">
          <a href="" className="block">
            <IconBrandGithub size={60} stroke={1.6} />
          </a>
          <a href="" className="block">
            <IconBrandLinkedin size={60} stroke={1.6} />
          </a>
          <a href="" className="block">
            <IconBrandTwitter size={60} stroke={1.6} />
          </a>
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
}

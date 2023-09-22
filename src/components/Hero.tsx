import React from "react";
import {
  IconArrowNarrowRight,
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Hero() {
  return (
    <section className="container px-4 md:px-32 mx-auto pt-24 md:pt-40 pb-8 relative min-h-[100vh]">
      <div className="intro">
        <p className="leading-normal text-base text-primary font-semibold ">
          Hi, my name is
        </p>
        <h1 className="leading-normal text-3xl md:text-5xl text-black dark:text-light font-semibold mb-3">
          Dimas Wing Bagas Bimantara
        </h1>
        <h2 className="leading-normal text-3xl md:text-5xl text-primary font-bold mb-3">
          I build things for the web
        </h2>
        <p className=" text-lg text-primary font-medium w-full md:w-96 mt-2">
          I am a student in the field of informatics engineering. Currently
          focusing on creating single page applications, Writing My Blog, and
          freelance.
        </p>
        <a
          href="https://www.cakeresume.com/dimas-wing-bagas-bimantara"
          className="btn-resume"
        >
          <span className="text-2xl font-medium">Resume</span>
          <IconArrowNarrowRight className="arrow" />
        </a>
      </div>

      <div className="hidden sm:absolute bottom-0 right-0">
        <div className="flex flex-col gap-4 justify-center items-center">
          <a href="https://github.com/Wing-Dimas" className="brand">
            <IconBrandGithub
              size={60}
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
              size={60}
              dur={0}
              stroke={1.6}
              className="duration-0"
            />
          </a>
          <a href="https://twitter.com/WingBagas" className="brand">
            <IconBrandTwitter
              size={60}
              dur={0}
              stroke={1.6}
              className="duration-0"
            />
          </a>
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
}

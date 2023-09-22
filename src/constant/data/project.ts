import ProjectType from "@/types/Project";

export const data: ProjectType[] = [
  {
    id: "1",
    title: "Hatch Careers",
    tech_stack: [
      "Laravel",
      "ReactJs",
      "Tailwind CSS",
      "InertiaJs",
      "Javascript",
      "MySQL",
    ],
    description:
      "Web app for managing people who are applying to a company. display of the main page, currently open jobs, registration, and dashboard. management of applicant interview dates, creating new jobs, and accepting or rejecting applicants.",
    link: "https://github.com/Wing-Dimas/hatch-careers",
  },
  {
    id: "2",
    title: "Find Your Happinies",
    tech_stack: ["NextJs", "ReactJs", "Tailwind CSS"],
    link: "https://find-your-happiness.vercel.app/",
    description: "Generate Joke, Quotes, and Cats Fact",
  },
  {
    id: "3",
    title: "Pronics",
    tech_stack: ["NextJs", "ReactJs", "Tailwind CSS"],
    link: "https://github.com/Wing-Dimas/frontend-pronics",
    description: "web app to find electronic equipment repairmen",
  },
];

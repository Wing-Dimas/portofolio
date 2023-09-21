import ProjectType from "@/types/Project";

export const data: ProjectType[] = [
  {
    id: "1",
    title: "Intern",
    subtitle: ["PDAM Surya Sembada Kota Surabaya"],
    date_start: new Date("2023-01-02"),
    date_end: new Date("2023-02-10"),
    tech_stack: ["Laravel", "Tailwind", "JQuery", "PHP", "Javascript", "MySQL"],
    description:
      "Design and build interactive web applications for the PDAM web portal, including creating UI/UX designs to be implemented on the web and creating the web portal database route architecture.",
    link: "https://github.com/Wing-Dimas/Web-Portal-PDAM",
  },
  {
    id: "2",
    title: "Lecturer Assistant",
    subtitle: ["Universitas Trunojoyo Madura"],
    date_start: new Date("2022-01-02"),
    description:
      "teaching students in several courses, help students in practice. share knowledge and experience with other assistants",
  },
];

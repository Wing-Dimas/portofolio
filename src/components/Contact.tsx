"use client";
import React, { useState } from "react";
import TextInput from "./shared/TextInput";
import TextArea from "./shared/TextArea";
import Hyperlink from "./shared/Hyperlink";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-20 container md:px-32 mx-auto relative min-h-[80vh]">
      <div className="flex-1 mb-16">
        <h2 className="subtitle text-primary">Let&apos;s Talk</h2>
        <p className="text-2xl font-normal">
          new project, freelance inquiry or even a coffee
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-end">
          <div className="w-[500px] mb-8">
            <TextInput
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-[500px] mb-8">
            <TextInput
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-[500px] mb-8">
            <TextArea
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-[500px] mb-8">
            <button
              type="submit"
              className="bg-secondary p-2 rounded-md text-2xl text-light font-medium hover:shadow-md"
            >
              Send Message
            </button>
          </div>
          <div className="w-[500px] mb-8">
            <p className="text-2xl font-medium">
              Loosely designed in{" "}
              <Hyperlink text="Figma" link="https://www.figma.com/" /> and coded
              in{" "}
              <Hyperlink
                text="Visual Studio Code"
                link="https://code.visualstudio.com/"
              />{" "}
              by yours truly. Built with{" "}
              <Hyperlink text="Next.js" link="https://nextjs.org/" /> and{" "}
              <Hyperlink text="Tailwind CSS" link="https://tailwindcss.com/" />,
              deployed with{" "}
              <Hyperlink text="Vercel" link="https://tailwindcss.com/" />. All
              text is set in the{" "}
              <Hyperlink
                text="Quicksand"
                link="https://fonts.google.com/specimen/Quicksand"
              />{" "}
              typeface.
            </p>
          </div>
        </div>
      </form>
    </section>
  );
}

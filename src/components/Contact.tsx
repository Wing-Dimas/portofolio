"use client";
import React, { LegacyRef, forwardRef, useState } from "react";
import TextInput from "./shared/TextInput";
import TextArea from "./shared/TextArea";
import Hyperlink from "./shared/Hyperlink";
import Modal from "./shared/Modal";

interface ContactPropsType {}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = forwardRef<HTMLElement, ContactPropsType>(({}, ref) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [modal, setModal] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDisable(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(res);
      setModal(true);
    } catch (error) {
      console.error(error);
    }
    setDisable(false);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      className="py-20 container px-4 md:px-32 mx-auto relative min-h-[80vh]"
      ref={ref}
    >
      <div className="flex-1 mb-16">
        <h2 className="subtitle text-primary">Let&apos;s Talk</h2>
        <p className="text-xl text-dark md:text-2xl font-normal dark:text-light">
          new project, freelance inquiry or even a coffee
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-end">
          <div className="w-full md:w-[500px]">
            <div className="mb-8">
              <TextInput
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-8">
              <TextInput
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-8">
              <TextArea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-8">
              <button
                type="submit"
                className="bg-secondary p-2 rounded-md text-lg md:text-2xl text-light font-medium hover:shadow-md disabled:bg-purple-500 flex items-center gap-2"
                disabled={disable}
              >
                Send Message {disable && <div className="lds-dual-ring"></div>}
              </button>
            </div>
            <div className="mb-8">
              <p className="text-lg md:text-2xl font-medium text-dark dark:text-light">
                Loosely designed in{" "}
                <Hyperlink text="Figma" link="https://www.figma.com/" /> and
                coded in{" "}
                <Hyperlink
                  text="Visual Studio Code"
                  link="https://code.visualstudio.com/"
                />{" "}
                by yours truly. Built with{" "}
                <Hyperlink text="Next.js" link="https://nextjs.org/" /> and{" "}
                <Hyperlink
                  text="Tailwind CSS"
                  link="https://tailwindcss.com/"
                />
                , deployed with{" "}
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
        </div>
      </form>
      <Modal open={modal} setOpen={setModal} />
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;

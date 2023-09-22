import React from "react";

interface TextAreaPropsType {
  label: string;
  name?: string;
  value?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({
  label,
  name,
  value,
  onChange,
  required = true,
}: TextAreaPropsType) {
  return (
    <div className="grid gap-2 text-dark dark:text-light text-2xl font-medium h-36">
      <label className="text-xl md:text-2xl font-medium">
        {label} {required && "*"}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-transparent border-b-2 border-b-primary text-primary py-1 px-2 outline-none text-lg dark:text-light"
      ></textarea>
    </div>
  );
}

import React from "react";

interface TextInputPropsType {
  label: string;
  name?: string;
  value?: string;
  type?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({
  label,
  name,
  value,
  onChange,
  required = true,
  type = "text",
}: TextInputPropsType) {
  return (
    <div className="grid gap-2 text-dark dark:text-light text-2xl font-medium ">
      <label className="text-xl md:text-2xl font-medium">
        {label} {required && "*"}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-transparent border-b-2 border-b-primary text-primary py-1 px-2 outline-none text-lg dark:text-light"
      />
    </div>
  );
}

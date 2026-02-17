import React, { useState } from "react";
import "../styles/contact.css";

function FormInput(props: {
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  pattern?: string;
  errorMessage?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const { onChange, name, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  function handleBlur() {
    setFocused(true);
  }
  return (
    <div
      className="flex flex-col items-start w-64 mb-10 input-form"
      data-testid={`input-${name}`}
    >
      {/* input y p deben ser hermanos directos para el selector CSS */}
      <input
        className="w-full p-4 outline-none border border-neutral-800 rounded-md"
        data-testid={`input-${name}-test`}
        {...inputProps}
        name={name}
        onChange={onChange}
        onBlur={handleBlur}
        data-focused={focused.toString()}
      />
      <p id="error" className="text-red-500 mt-2 w-full">
        {errorMessage}
      </p>
    </div>
  );
}

function EmployeeValidationForm() {
  const [values, setValues] = useState<{ [key: string]: string }>({
    name: "",
    email: "",
    idemployee: "",
    joinDate: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      required: true,
      pattern: "^[a-zA-Z\\s]{4,}$",
      errorMessage:
        "Name must be at least 4 characters long and only contain letters and space.",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
      errorMessage: "Email must be a valid email address.",
    },
    {
      id: 3,
      name: "idemployee",
      type: "text",
      placeholder: "Employee ID",
      pattern: "^[0-9]{6}$",
      required: true,
      errorMessage: "Must be exactly 6 numeric digits.",
    },
    {
      id: 4,
      name: "joinDate",
      type: "date",
      placeholder: "",
      required: true,
      max: new Date().toISOString().split("T")[0],
      errorMessage: "Cannot be set to a date in the future.",
    },
  ];

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSumbit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }
  return (
    <form
      onSubmit={handleSumbit}
      className="flex flex-col p-8 gap-2 items-center mt-8"
    >
      {inputs.map((input) => {
        return (
          <FormInput
            key={input.id}
            {...input}
            onChange={onChange}
            value={values[input.name]}
          />
        );
      })}
      <button
        data-testid="submit-btn"
        className="px-8 py-4 w-64 cursor-pointer hover:bg-green-500 bg-green-600 rounded-md"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default EmployeeValidationForm;

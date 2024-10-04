import React from "react";
import { useState } from "react";

const FormCom = () => {
  // Define the state to hold form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // Handle input change for each form field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can now use the formData object to send data to an API or process it
    console.log("Form submitted with:", formData);
    // Reset form after submission (optional)
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="text-center flex flex-col justify-center h-svh border-2 bg-gradient-to-b from-white to-sky-400">
      <h1 className="text-4xl p-4 m-4 ">Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="m-4">
          <label className="p-2 text-xl me-4">Name:</label>
          <input
            className="border-2"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="m-4">
          <label className="p-2 text-xl me-4">Email:</label>
          <input
            className="border-2"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="m-4">
          <label className="p-2 text-xl me-4">Password:</label>
          <input
            className="border-2"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-sky-600 text-white px-6 py-2 rounded-2xl mt-8 ml-8 mb-3"
        >
          Submit
        </button>
        <button
          type="reset"
          className="bg-sky-600 text-white px-6 py-2 rounded-2xl mt-8 ml-8 mb-3"
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default FormCom;

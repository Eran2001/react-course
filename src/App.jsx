import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submittedData, setSubmittedData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white h-screen text-3xl">
      <h1>Hello {submittedData.name}</h1>
      <h2>Email: {submittedData.email}</h2>
      <h3>Password: {submittedData.password}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={formData.name}
          name="name"
          onChange={handleChange}
          required
          className="border border-white mt-2 ml-2 caret-[#000] bg-white text-[#000]"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          required
          className="border border-white mt-2 ml-2 caret-[#000] bg-white text-[#000]"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          required
          className="border border-white mt-2 ml-2 caret-[#000] bg-white text-[#000]"
        />
        <input
          className="block border border-white mt-2 p-2"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default App;

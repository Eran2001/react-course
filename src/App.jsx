import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white h-screen text-3xl">
      <h1>Hello {name}</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Name:</label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

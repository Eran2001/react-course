import { useState } from "react";

const App = () => {
  const [name, setName] = useState("E");

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white h-screen text-3xl">
      <h1>Hello {name}</h1>
      <input
        type="text"
        value={name}
        required
        className="border border-white mt-2"
      />
    </div>
  );
};

export default App;

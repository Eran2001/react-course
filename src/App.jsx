import { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(0);

  useEffect(() => console.log("Hello"), [value]);

  const handleCount = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <div>
      <h1 className="text-3xl underline font-bold">Hello</h1>
      <h2 className="indent-8">{value}</h2>
      <button className="border-2 p-2" onClick={handleCount}>
        Increment
      </button>
    </div>
  );
};

export default App;

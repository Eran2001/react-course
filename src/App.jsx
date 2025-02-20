import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-3xl underline font-bold">Hello</h1>
      <h2>Number = {count}</h2>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="border-2 border-amber-900 bg-amber-400"
      >
        Change Count
      </button>
    </div>
  );
};

export default App;

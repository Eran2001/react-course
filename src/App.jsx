import { useState, useEffect } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted or updated!");

    return () => {
      console.log("Component will unmount (Cleanup)");
    };
  }, [count]);

  return (
    <div className="h-screen bg-gray-900 text-white">
      <h1>Count: {count}</h1>
      <button
        className="border border-green-500 p-2 mt-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Example;

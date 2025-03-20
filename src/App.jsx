import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mount");

    return () => {
      console.log("Unmount");
    };
  }, [count]);

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white h-screen text-3xl">
      <h1>Hello</h1>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
};

export default App;

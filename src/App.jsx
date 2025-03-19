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
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Example;

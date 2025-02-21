import { useState, useEffect } from "react";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl underline font-bold">Hello</h1>
      <Timer />
    </div>
  );
};

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);

  return <h1>I&apos;ve rendered {count} times!</h1>;
}

export default App;

import { useState, useEffect } from "react";

const CompoA = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 2000);
    if (count === 0) {
      alert("Game Over!");
      window.location.reload();
    }
  });

  return (
    <div className="box">
      <h1 className="text-4xl">{count}</h1>
    </div>
  );
};

export default CompoA;

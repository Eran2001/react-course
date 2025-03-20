import { useState } from "react";

const CompoA = () => {
  const [name] = useState("Era");

  return (
    <div className="box">
      <h1>CompoA</h1>
      <h2>{name}</h2>
    </div>
  );
};

export default CompoA;

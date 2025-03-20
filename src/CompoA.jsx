import { useState } from "react";
import CompoB from "./CompoB";

const CompoA = () => {
  const [name, setName] = useState("Era");
  return (
    <div className="box">
      <h1>CompoA</h1>
      <h2>{name}</h2>
      <CompoB name={name} />
    </div>
  );
};

export default CompoA;

import { useContext } from "react";
import { NameContext } from "./App";

const CompoC = () => {
  const name = useContext(NameContext);

  return (
    <div className="box">
      <h1>CompoC</h1>
      <h2>{name}</h2>
    </div>
  );
};

export default CompoC;

import { useState, createContext } from "react";
import CompoB from "./CompoB";

export const NameContext = createContext();

const CompoA = () => {
  const [name] = useState("Era");

  return (
    <NameContext.Provider value={name} className="box">
      <h1>CompoA</h1>
      <h2>{name}</h2>
      <CompoB />
    </NameContext.Provider>
  );
};

export default CompoA;

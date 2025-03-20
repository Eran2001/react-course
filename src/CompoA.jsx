import { useState } from "react";
import CompoC from "./CompoC";
import { createContext } from "react";

export const NameContext = createContext();

const CompoA = () => {
  const [name] = useState("Era");

  return (
    <NameContext.Provider value={name}>
      <div className="box">
        <h1 className="text-4xl mb-2">Hello</h1>
        <CompoC />
      </div>
    </NameContext.Provider>
  );
};

export default CompoA;

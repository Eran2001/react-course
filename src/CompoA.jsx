import { useState, createContext, useEffect, useRef } from "react";
import CompoC from "./CompoC";

export const NameContext = createContext();

const CompoA = () => {
  const [name] = useState("Era");
  const colorRef = useRef(null);

  useEffect(() => {
    const keyPress = (event) => console.log(`Key pressed: ${event.key}`);
    window.addEventListener("keypress", keyPress);

    if (colorRef.current) colorRef.current.style.color = "red";

    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  }, []);

  const handleColor = () => (colorRef.current.style.color = "yellow");

  return (
    <NameContext.Provider value={name}>
      <div className="box">
        <h1 ref={colorRef} className="text-4xl mb-2">
          Hello
        </h1>
        <button onClick={handleColor}>Click</button>
        <CompoC />
      </div>
    </NameContext.Provider>
  );
};

export default CompoA;

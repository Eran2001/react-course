import { useRef, useState } from "react";

const CompoA = () => {
  const [name] = useState("Era");
  const inputRef = useRef(null);

  const focusInput = () => inputRef.current.focus();

  return (
    <div className="box">
      <h1>CompoA</h1>
      <h2>{name}</h2>
      <input className="border border-white mt-2" ref={inputRef} type="text" />
      <button
        className="block border border-white mt-2 px-2"
        onClick={focusInput}
      >
        Focus
      </button>
    </div>
  );
};

export default CompoA;

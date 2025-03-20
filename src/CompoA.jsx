import { useRef } from "react";

const CompoA = () => {
  const inputRef = useRef(null);
  const divRef = useRef(null);

  const colorRef = () => {
    inputRef.current.style.color = "yellow";
  };

  const handleClick = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = "#ff0f4f";
      divRef.current.style.transform = "scale(1.1)";
      divRef.current.style.transition = "all 0.3s ease";
    }
  };

  const removeClick = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = "";
      divRef.current.style.transform = "scale(1)";
      divRef.current.style.transition = "all 0.7s ease";
    }
  };

  return (
    <div className="box" ref={divRef}>
      <h1 className="text-4xl" ref={inputRef}>
        Hello
      </h1>
      <button
        className="block border border-white mt-2 px-2"
        onClick={colorRef}
      >
        Click
      </button>
      <button className=" border border-white mt-2 px-2" onClick={handleClick}>
        Click for Styles
      </button>
      <button
        className="ml-2 border border-white mt-2 px-2"
        onClick={removeClick}
      >
        Click for Remove Styles
      </button>
    </div>
  );
};

export default CompoA;

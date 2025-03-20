import { useState, useRef } from "react";

const CompoA = () => {
  const divRef = useRef(null);
  const [isClicked, setIsClicked] = useState(true);

  if (divRef.current) divRef.current.style.transition = "all 0.5s";

  const handleClick = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = isClicked ? "#ff0f4f" : "#fdc500";
      divRef.current.style.color = isClicked ? "white" : "black";
      divRef.current.textContent = isClicked
        ? "Click me to change!"
        : "Changed!";
      setIsClicked(!isClicked);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={divRef}
        className="p-4 bg-[#ff0f4f] text-#fff rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        Click me to change!
      </div>
    </div>
  );
};

export default CompoA;

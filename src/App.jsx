import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // Focus the input
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
};

export default FocusInput;

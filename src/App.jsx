import { useRef } from "react";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl underline font-bold">Hello</h1>
      <InputFocus />
    </div>
  );
};

const InputFocus = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default App;

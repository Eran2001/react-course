import { useContext } from "react";
import { userContext } from "./userContext";

const CompoA = () => {
  const { setUser } = useContext(userContext);

  return (
    <div className="bg-amber-600">
      <h1>Compo A</h1>
      <button
        className="border-2 border-amber-950 cursor-pointer"
        onClick={() => {
          setUser("John Doe");
          console.log("Name has been changed!");
        }}
      >
        Change
      </button>
    </div>
  );
};

export default CompoA;

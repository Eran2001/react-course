import { useContext } from "react";
import { userContext } from "./userContext";

const CompoB = () => {
  const { user } = useContext(userContext);

  return (
    <div className="bg-amber-400">
      <h1>Compo B - {user}</h1>
    </div>
  );
};

export default CompoB;

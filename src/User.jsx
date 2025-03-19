import { useContext } from "react";
import { UserContext } from "./context.js";

const User = () => {
  const name = useContext(UserContext);

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default User;

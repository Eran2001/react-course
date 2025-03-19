import { useContext } from "react";
import { UserContext } from "./App";

const User = () => {
  const name = useContext(UserContext);

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default User;

import { useContext } from "react";
import { UserContext } from "./context.js";

const User = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default User;

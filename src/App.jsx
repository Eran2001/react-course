import { createContext, useState } from "react";

export const UserContext = createContext();

const Example = () => {
  const [user, setUser] = useState("John Doe");

  return (
    <div className="h-screen bg-gray-900 text-white p-4">
      <UserContext.Provider value={user}>
        <h1>{user}</h1>
      </UserContext.Provider>
    </div>
  );
};

export default Example;

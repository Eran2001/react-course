import React, { useState } from "react";

const defaultUsers = Array(10)
  .fill(0)
  .map((_, i) => ({
    id: i,
    userName: `User ${i}`,
  }));

const App = () => {
  const [users, setUsers] = useState(defaultUsers);

  const handleRemove = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  return (
    <div>
      {users.map((user) => {
        return (
          <button key={user.id} onClick={() => handleRemove(user.id)}>
            {user.userName}
          </button>
        );
      })}
    </div>
  );
};

export default App;

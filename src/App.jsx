import { useState } from "react";
import User from "./User";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello</h1>
      <User isLoggedIn={false} />
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </div>
  );
};

export default App;

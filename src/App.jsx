import { useState } from "react";
import { userContext } from "./userContext";
import CompoA from "./CompoA";
import CompoB from "./CompoB";

const App = () => {
  const [user, setUser] = useState("Eran Hasareli");

  return (
    <userContext.Provider value={{ user, setUser }}>
      <h1 className="text-3xl underline font-bold">Hello</h1>
      <CompoA />
      <CompoB />
    </userContext.Provider>
  );
};

export default App;

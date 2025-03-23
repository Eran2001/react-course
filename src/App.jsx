import { useState } from "react";

const App = () => {
  const data = ["Apple", "Banana", "Orange", "Grapes", "Mango"]; // Array with 5 values
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return <div></div>;
};

export default App;

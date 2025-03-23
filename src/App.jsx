import { useState } from "react";

const App = () => {
  const data = ["Apple", "Banana", "Orange", "Grapes", "Mango"]; // Array with 5 values
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border border-gray-300 text-black rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="mt-4">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No matching results</li>
        )}
      </ul>
    </div>
  );
};

export default App;

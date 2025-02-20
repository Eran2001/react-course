import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      const data = await response.json();
      setData([data]);
    }
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl underline font-bold">Hello</h1>
      {data.map((todo, index) => (
        <li className="indent-20" key={index}>
          {todo.title}
        </li>
      ))}
    </div>
  );
};

export default App;

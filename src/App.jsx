import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl underline font-bold">Hello</h1>
      <table className="ml-10">
        <thead>
          <tr className="border-2 border-black">
            <th className="border-2 border-black">ID</th>
            <th className="border-2 border-black">Title</th>
          </tr>
        </thead>

        <tbody>
          {data.map((todo) => (
            <tr className="border-2 border-black" key={todo.id}>
              <td className="border-2 border-black p-4">{todo.id}</td>
              <td className="border-2 border-black p-4">{todo.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );

        if (!response.ok) throw new Error("Error");

        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;

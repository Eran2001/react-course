import useFetch from "./useFetch";

const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <h1 className="text-2xl font-bold underline">Hello</h1>
      {data &&
        data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
    </div>
  );
};

export default App;

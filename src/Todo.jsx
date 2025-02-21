import useFetch from "./useFetch";

const Todo = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <div>
      <h1 className="text-2xl font-bold underline">TODOs</h1>
      {data &&
        data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
    </div>
  );
};

export default Todo;

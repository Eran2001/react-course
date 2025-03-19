import { useReducer } from "react";

const initialState = { count: 0 };

const Example = () => {
  return (
    <div className="h-screen bg-gray-900 text-white">
      <h1>{load ? <p>loading...</p> : <p>Nothing...</p>}</h1>
    </div>
  );
};

export default Example;

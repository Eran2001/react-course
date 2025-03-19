import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
  }
}

const Example = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="h-screen bg-gray-900 text-white p-4">
      <h1>Count: {state.count}</h1>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="border border-green-400 p-1 m-2 cursor-pointer"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="border border-green-400 p-1 m-2 cursor-pointer"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="border border-green-400 p-1 m-2 cursor-pointer"
      >
        Reset
      </button>
    </div>
  );
};

export default Example;

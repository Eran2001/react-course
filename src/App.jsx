import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Example = () => {
  return (
    <div className="h-screen bg-gray-900 text-white p-4">
      <h1>Count: </h1>
    </div>
  );
};

export default Example;

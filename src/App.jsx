import { useReducer } from "react";

const App = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  function counterReducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: 0 };
      default:
        return state;
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold underline">{state.count}</h1>
      <button
        className="border-2 border-black p-4"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button>
      <button
        className="border-2 border-black p-4"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
      <button
        className="border-2 border-black p-4"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
};

export default App;

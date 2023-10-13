import { useReducer } from "react";
import "./App";

function Counter() {
  const counterReducer = (currentState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: currentState.count + 1 };
      case "DECREMENT":
        return { count: currentState.count - 1 };
      default:
        return currentState;
    }
  };

  const [state, reducer] = useReducer(counterReducer, { count: 0 });
  console.log(state);
  return (
    <div className="main">
      <div className="body-main">
        <button
          onClick={() => reducer({ type: "INCREMENT" })}
          className="increment"
        >
          Increment
        </button>

        <button
          onClick={() => reducer({ type: "DECREMENT" })}
          className="decrement"
        >
          Decrement
        </button>

        <div>
          <h3>Counter: {state.count}</h3>
        </div>
      </div>
    </div>
  );
}

export default Counter;

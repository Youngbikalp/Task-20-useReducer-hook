import React, { useReducer } from "react";

function Counter() {
  const counterReducer = (currState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: currState.count + 1 };
      case "DECREMENT":
        return { count: currState.count - 1 };
      default:
        return currState;
    }
  };
  const [state, reducer] = useReducer(counterReducer, { count: 0 });
  console.log(state);
  return (
    <div>
      <button onClick={() => reducer({ type: "INCREMENT" })}>Increment</button>

      <button onClick={() => reducer({ type: "DECREMENT" })}>Decrement</button>

      <div>{state.count}</div>
    </div>
  );
}

export default Counter;

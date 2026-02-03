import { useState } from "react";
import CounterButtons from "./CounterButtons";

function ParentCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Parent Counter</h2>
      <p>Count: {count}</p>

      <CounterButtons
        increase={() => setCount(count + 1)}
        decrease={() => setCount(count - 1)}
        reset={() => setCount(0)}
      />
    </div>
  );
}

export default ParentCounter;

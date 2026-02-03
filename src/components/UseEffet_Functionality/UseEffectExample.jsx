import { useEffect, useState } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);

  // useEffect runs after render
  useEffect(() => {
    console.log("Component rendered or count changed");
  }, [count]);

  return (
    <div>
      <h2>useEffect Example</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default UseEffectExample;

import { useState } from "react";

function ConditionalExample() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Conditional Rendering Example</h2>

      {/* Button to toggle state */}
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Message" : "Show Message"}
      </button>

      {/* Conditional Rendering */}
      {show && <p>🎉 Hello! This message is visible.</p>}
    </div>
  );
}



export default ConditionalExample;

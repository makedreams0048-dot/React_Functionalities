import { useState } from "react";

function Show() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Show and Hide Data</h1>

      {/* Button to toggle state */}
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {/* Conditionally render text */}
      {show && <p>This is the hidden data 🎉</p>}
    </div>
  );
}

export default Show;

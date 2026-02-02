import { useState } from "react";

function FormsInputHandling_in_React() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Input Example</h2>

      <input type="text" placeholder="Enter you name" value={text} onChange={(e)=>setText(e.target.value)}></input>

      <p>You typed: {text}</p>
    </div>
  );
}

export default FormsInputHandling_in_React;

import { useState } from "react";

function InputExample() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Input Example</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed: {text}</p>
    </div>
  );
}

export default InputExample;

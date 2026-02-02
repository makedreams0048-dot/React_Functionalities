import { useState } from "react";

function InputWithButton() {
  const [inputText, setInputText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  return (
    <div>
      <h2>Input With Button</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button onClick={() => setSubmittedText(inputText)}>
        Submit
      </button>

      {submittedText && (
        <p>You submitted: {submittedText}</p>
      )}
    </div>
  );
}

export default InputWithButton;

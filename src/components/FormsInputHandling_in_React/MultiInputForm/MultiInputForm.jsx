import { useState } from "react";

function MultiInputForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  return (
    <div>
      <h2>Multiple Inputs Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}

export default MultiInputForm;

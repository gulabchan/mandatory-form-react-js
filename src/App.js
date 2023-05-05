import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if name is empty
    if (name.trim() === "") {
      setNameError("Name is mandatory");
    } else {
      setNameError("");
    }

    // Check if email is empty
    if (email.trim() === "") {
      setEmailError("Email is mandatory");
    } else {
      setEmailError("");
    }

    // Submit the form if both name and email are not empty
    if (name.trim() !== "" && email.trim() !== "") {
      alert("Form submitted successfully!");
      setName("");
      setEmail("");
    }
  };

  return (
    <div>
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          {nameError && <span style={{ color: "red" }}>{nameError}</span>}
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          {emailError && <span style={{ color: "red" }}>{emailError}</span>}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;

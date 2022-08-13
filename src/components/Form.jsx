import React, { useState } from "react";
import "./styles/Form.css";
const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Email ${email} and Message ${message}`);
    }

  return (
    <div>
      <div class="login-box">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <div class="user-box">
            <input
              type="text"
              name=""
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              name=""
              required=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label>Messege</label>
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

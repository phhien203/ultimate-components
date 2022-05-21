import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");

  console.log("main render");
  return (
    <form>
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <span>{firstName}</span>
    </form>
  );
};

export default Form;

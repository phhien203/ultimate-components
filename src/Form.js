import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const initialState = {
    firstName: "",
    lastName: "",
  };
  const [formState, setFormState] = useState(initialState);

  const updateFormState = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const resetFormState = () => {
    setFormState(initialState);
  };

  console.log("main render");
  return (
    <form autoComplete="off" onSubmit={onFormSubmit}>
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        value={formState.firstName}
        onChange={updateFormState}
      />
      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        value={formState.lastName}
        onChange={updateFormState}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={resetFormState}>
        Clear Form
      </button>
    </form>
  );
};

export default Form;

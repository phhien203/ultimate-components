import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    biography: "",
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
    console.log(formState);
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
      <label htmlFor="biography">Biography</label>
      <textarea
        id="biography"
        name="biography"
        rows="10"
        value={formState.biography}
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

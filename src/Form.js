import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    biography: "",
    transport: "",
    agree: false,
  };
  const [formState, setFormState] = useState(initialState);

  const updateFormState = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value,
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

      <label htmlFor="transport">Prefer transport</label>
      <select name="transport" id="transport" onChange={updateFormState}>
        <option>None selected</option>
        <option value="trains">Trains</option>
        <option value="planes">Planes</option>
        <option value="boats">Boats</option>
        <option value="cars">Cars</option>
      </select>

      <label htmlFor="agree">I agree TOC</label>
      <input
        type="checkbox"
        id="agree"
        name="agree"
        onChange={updateFormState}
        checked={formState.agree}
      />

      <button type="submit">Save</button>
      <button type="button" onClick={resetFormState}>
        Clear Form
      </button>
    </form>
  );
};

export default Form;

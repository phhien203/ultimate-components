import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    biography: "",
    transport: "",
    agree: false,
    breakfast: false,
    lunch: false,
    dinner: false,
    shirtSize: "",
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

      <fieldset>
        <legend>Select your meals</legend>

        <input
          type="checkbox"
          id="breakfast"
          name="breakfast"
          checked={formState.breakfast}
          onChange={updateFormState}
        />
        <label htmlFor="breakfast">Breakfast</label>

        <input
          type="checkbox"
          id="lunch"
          name="lunch"
          checked={formState.lunch}
          onChange={updateFormState}
        />
        <label htmlFor="lunch">Lunch</label>

        <input
          type="checkbox"
          id="dinner"
          name="dinner"
          checked={formState.dinner}
          onChange={updateFormState}
        />
        <label htmlFor="dinner">Dinner</label>
      </fieldset>

      <fieldset>
        <legend>Your T-shirt size</legend>

        <label htmlFor="sizeS">
          <input
            type="radio"
            id="sizeS"
            name="shirtSize"
            value="S"
            checked={formState.shirtSize === "S"}
            onChange={updateFormState}
          />
          Small
        </label>
        <label htmlFor="sizeM">
          <input
            type="radio"
            id="sizeM"
            name="shirtSize"
            value="M"
            checked={formState.shirtSize === "M"}
            onChange={updateFormState}
          />
          Medium
        </label>
        <label htmlFor="sizeL">
          <input
            type="radio"
            id="sizeL"
            name="shirtSize"
            value="L"
            checked={formState.shirtSize === "L"}
            onChange={updateFormState}
          />
          Large
        </label>
      </fieldset>

      <label htmlFor="agree">
        <input
          type="checkbox"
          id="agree"
          name="agree"
          onChange={updateFormState}
          checked={formState.agree}
        />
        I agree TOC
      </label>

      <button type="submit">Save</button>
      <button type="button" onClick={resetFormState}>
        Clear Form
      </button>
    </form>
  );
};

export default Form;

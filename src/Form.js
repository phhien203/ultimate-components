import React, { useEffect, useState } from "react";
import "./Form.css";

const FormContainer = () => {
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

  const loadedData = {
    firstName: "Antonio",
    lastName: "Pham",
    biography: "GDE in Angular and WebDev",
    transport: "planes",
    agree: true,
    breakfast: true,
    lunch: false,
    dinner: true,
    shirtSize: "S",
  };

  const [formData, setFormData] = useState(initialState);

  const loadDataToForm = () => {
    setFormData(loadedData);
  };

  const onFormSubmit = (formValue) => {
    console.log(formValue);
  };

  return (
    <>
      <Form formData={formData} onFormSubmit={onFormSubmit} />
      <button type="button" onClick={loadDataToForm}>
        Load data
      </button>
    </>
  );
};

const Form = ({ formData, onFormSubmit }) => {
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

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    onFormSubmit(formState);
  };

  const resetFormState = () => {
    setFormState(initialState);
  };

  useEffect(() => {
    setFormState(formData);
  }, [formData]);

  console.log("main render");

  return (
    <form autoComplete="off" onSubmit={onFormSubmitHandler}>
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
      <select
        name="transport"
        id="transport"
        value={formState.transport}
        onChange={updateFormState}
      >
        <option value="">None selected</option>
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
          checked={formState.agree}
          onChange={updateFormState}
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

export default FormContainer;

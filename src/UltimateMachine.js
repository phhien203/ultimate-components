import React, { useState } from "react";

const ErrorMessage = () => <div>Something went wrong!</div>;

const UltimateMachine = () => {
  const [showError, setShowError] = useState(false);

  const onClickHandler = () => {
    setShowError((v) => !v);
  };

  return (
    <section>
      <h1>The Ultimate Machine</h1>
      {showError && <ErrorMessage />}
      <button type="button" aria-pressed={showError} onClick={onClickHandler}>
        On/Off
      </button>
    </section>
  );
};

export default UltimateMachine;

import React, { Fragment } from "react";

function InteractiveView({ value, onAction, actionText }) {
  return (
    <Fragment>
      <p>{value}</p>
      <button type="button" onClick={onAction}>
        {actionText}
      </button>
    </Fragment>
  );
}

export default InteractiveView;

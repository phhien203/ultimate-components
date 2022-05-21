import React, { useEffect, useState } from "react";
import InteractiveView from "./InteractiveView";

const subscribe = (count) => {
  console.log(`subscribe count ${count}`);
};

const unsubscribe = (count) => {
  console.log(`unsubscribe count ${count}`);
};

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    subscribe(counter);

    return () => {
      unsubscribe(counter);
    };
  }, [counter]);

  const onIncrementHandler = () => {
    setCounter(counter + 1);
  };

  console.log("Main render");

  return (
    <>
      <InteractiveView
        value={counter}
        actionText="Increment"
        onAction={onIncrementHandler}
      ></InteractiveView>
    </>
  );
};

export default Counter;

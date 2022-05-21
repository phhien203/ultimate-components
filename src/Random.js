import InteractiveView from "./InteractiveView";
import { useState } from "react";

const Random = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  const handleRandomizeNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 1000));
  };

  return (
    <InteractiveView
      value={randomNumber}
      actionText="Randomize"
      onAction={handleRandomizeNumber}
    />
  );
};

export default Random;

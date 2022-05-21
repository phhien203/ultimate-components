import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(true);

  useEffect(() => {
    let interval = null;

    if (active) {
      interval = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [active]);

  const formattedTime = new Date(time * 1000).toISOString().substr(11, 8);

  return (
    <section className="stopwatch-frame">
      <h1>Ultimate Stopwatch</h1>
      <div>{formattedTime}</div>
      <button type="button" onClick={() => setActive((a) => !a)}>
        On/Off
      </button>
    </section>
  );
};

export default Stopwatch;

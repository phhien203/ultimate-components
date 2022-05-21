import React, { Fragment, useState } from "react";

const list = [
  { id: 1, name: "The beach", topDestination: false },
  { id: 2, name: "The mountains", topDestination: true },
  { id: 3, name: "Vibrant cities", topDestination: false },
  { id: 4, name: "Roughing it", topDestination: true },
  { id: 5, name: "Ultimate survival", topDestination: false },
];

const UltimateHolidayList = () => {
  const [showAll, setShowAll] = useState(true);

  const displayList = list
    .filter((item) => (showAll ? true : item.topDestination))
    .map((item) => (
      <Fragment key={item.id}>
        <li>{item.name}</li>
      </Fragment>
    ));

  return (
    <section>
      <h1>Ultimate Holiday Destinations</h1>
      <ul>{displayList}</ul>
      <button type="button" onClick={() => setShowAll(true)}>
        Show All
      </button>
      <button type="button" onClick={() => setShowAll(false)}>
        Show Top Destination
      </button>
    </section>
  );
};

export default UltimateHolidayList;

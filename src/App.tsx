import React from "react";
import "./App.css";

import Timeline from "react-visjs-timeline";

const options = {
  width: "100%",
  height: "100px",
  stack: false,
  showMajorLabels: true,
  showCurrentTime: true,
  zoomMin: 1000000,
  type: "background",
  format: {
    minorLabels: {
      minute: "h:mma",
      hour: "ha",
    },
  },
};

const items = [
  {
    start: new Date(2021, 8, 15),
    end: new Date(2021, 9, 2), // end is optional
    content: "Trajectory A",
  },
];

function App() {
  return (
    <div className="App">
      <Timeline options={options} items={items} />
    </div>
  );
}

export default App;

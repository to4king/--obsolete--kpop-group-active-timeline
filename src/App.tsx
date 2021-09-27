import React from "react";
import "./App.css";

import Timeline from "react-visjs-timeline";

const options = {
  width: "100%",
  height: "60px",
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

function App() {
  return (
    <div className="App">
      <Timeline options={options} />
    </div>
  );
}

export default App;

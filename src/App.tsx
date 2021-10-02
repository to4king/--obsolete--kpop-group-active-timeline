import React from "react";
import { Timeline } from "react-svg-timeline";
import agency from "./data/agency.json";
import group from "./data/group.json";

function App() {
  const lanes = agency.agencies;
  const events = group.groups;
  const dateFormat = (ms: number) => new Date(ms).toLocaleString();
  return (
    <Timeline
      width={600}
      height={300}
      events={events}
      lanes={lanes}
      dateFormat={dateFormat}
    />
  );
}

export default App;

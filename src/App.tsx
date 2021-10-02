import React from "react";
import { Timeline } from "react-svg-timeline";

function App() {
  const laneId = "demo-lane";
  const lanes = [
    {
      laneId,
      label: "Demo Lane",
    },
  ];
  const events = [
    {
      eventId: "event-1",
      laneId: laneId,
      startTimeMillis: 1399845600000,
    },
    {
      eventId: "event-2",
      laneId,
      startTimeMillis: 1167606000000,
      endTimeMillis: 1230698892000,
    },
  ];
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

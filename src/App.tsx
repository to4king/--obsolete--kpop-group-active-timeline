import React from "react";
import { Chart } from "react-google-charts";
import "./App.css";

const CHART_SETTINGS = {
  chartType: "Timeline",
  width: "500px",
  height: "300px",
  options: { showRowNumber: true },
} as const;

const DATA_DEFINITIONS = [
  { type: "string", id: "agency-name" },
  { type: "string", id: "group-name" },
  { type: "date", id: "Start" },
  { type: "date", id: "End" },
] as const;

const dataRows = [
  "BIGHIT MUSIC",
  "BTS(防弾少年団)",
  new Date(2013, 6, 13),
  new Date(),
];

const chartData = [DATA_DEFINITIONS, dataRows];

function App() {
  return (
    <div className="App">
      <Chart
        width={CHART_SETTINGS.width}
        height={CHART_SETTINGS.height}
        chartType={CHART_SETTINGS.chartType}
        options={CHART_SETTINGS.options}
        loader={<div>Loading Chart</div>}
        data={chartData}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}

export default App;

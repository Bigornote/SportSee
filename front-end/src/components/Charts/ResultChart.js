import React from "react";
import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const ResultChart = ({ data }) => {
  const result = data * 100;

  const score = [{ value: result, fill: "#FF0000" }];

  return (
    <div className="chart-result">
      <div>
        <h2 className="title">Score</h2>
      </div>
      <div className="score">
        <p>
          {result}%<br></br>
          <span> de votre objectif</span>
        </p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          data={score}
          innerRadius="70%"
          startAngle={90}
          endAngle={450} // (360 + 90)
          barSize={10}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="value" cornerRadius="100%" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultChart;

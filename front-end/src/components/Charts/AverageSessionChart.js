import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getData } from "../../data/services/getdata";

const AverageSessionChart = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_AVERAGE_SESSIONS", id);
      if (!request) return alert("Error Average Session Chart");
      const dayData = request.data.sessions.map((data) => {
        switch (data.day) {
          case 1:
            return { ...data, day: "L" };
          case 2:
            return { ...data, day: "M" };
          case 3:
            return { ...data, day: "M" };
          case 4:
            return { ...data, day: "J" };
          case 5:
            return { ...data, day: "V" };
          case 6:
            return { ...data, day: "S" };
          case 7:
            return { ...data, day: "D" };
          default:
            return { ...data };
        }
      });
      setData(dayData);
    };
    data();
  }, [id]);

  if (data.length === 0) return null;

  const CustomTooltipAverageSession = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{payload[0].value}min</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart-session">
      <div>
        <h2 className="title">Durée moyenne des sessions</h2>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            type="category"
            dataKey="day"
            tickLine={true}
            stroke="red"
            padding={{ right: 5, left: 5 }}
            tick={{ fontSize: 13, stroke: "white", opacity: 0.8 }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
          <Tooltip content={CustomTooltipAverageSession} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionChart;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getData } from "../../data/services/getdata";
// Recharts
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

/**
 * Returns React Component that displays a Activity Chart.
 * Fetch Data "USER_ACTIVITY"
 * @params {number} id to useParams() methode
 * @returns A React component
 */

const ActivityChart = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_ACTIVITY", id);
      if (!request) return alert("Error Chart Activity");
      setData(request.data.sessions);
    };
    data();
  }, [id]);

  if (data.length === 0) return null;

  for (let i = 0; i < data.length; i++) {
    data[i].index = i + 1;
  }

  const CustomTooltipActivity = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{payload[0].value}kg</p>
          <p>{payload[1].value}kCal</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart-activity">
      <header>
        <div>
          <h2 className="title">Activité quotidienne</h2>
        </div>
        <div className="donnees">
          <p>Poids (kg)</p>
          <p>Calories Brûlées (kCal)</p>
        </div>
      </header>
      <ResponsiveContainer height={190}>
        <BarChart data={data} barGap={8} barCategoryGap={1}>
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis
            dataKey="index"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dy={15}
            stroke="1 1"
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            domain={["dataMin - 2", "dataMax + 1"]}
            tickCount="4"
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dx={15}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            type="number"
            domain={["dataMin - 20", "dataMax + 10"]}
            hide={true}
          />
          <Tooltip
            content={<CustomTooltipActivity />}
            wrapperStyle={{ outline: "none" }}
          />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;

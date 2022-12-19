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
import PropTypes from "prop-types";

/**
 * Returns React Component that displays a Average Session Chart.
 * Fetch Data "USER_AVERAGE_SESSIONS"
 * @params {number} id to useParams() methode
 * @returns A React component
 */

const AverageSessionChart = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_AVERAGE_SESSIONS", parseInt(id));
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

  if (data.length == undefined) return null;

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
        <h2 className="title">
          Durée moyenne des <br></br>sessions
        </h2>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 0, left: 15, right: 15, bottom: 10 }}
        >
          <XAxis
            dataKey="day"
            stroke="#ffffff"
            tickLine={false}
            axisLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis hide={true} domain={[0, "dataMax + 30"]} />
          <Tooltip
            content={<CustomTooltipAverageSession />}
            wrapperStyle={{ outline: "none" }}
            cursor={{
              stroke: "#000",
              strokeOpacity: 0.1,
              strokeWidth: 40,
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            unit="min"
            stroke="#ffffff"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

AverageSessionChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ),
};

export default AverageSessionChart;

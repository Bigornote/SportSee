import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  PolarAngleAxis,
  PolarGrid,
  RadarChart,
  ResponsiveContainer,
  Radar,
} from "recharts";
import { getData } from "../../data/services/getdata";
import PropTypes from "prop-types";

/**
 * Returns React Component that displays a Perfomance Chart.
 * Fetch Data "USER_PERFORMANCE"
 * @params {number} id to useParams() methode
 * @returns A React component
 */
const PerformanceChart = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_PERFORMANCE", parseInt(id));
      if (!request) return alert("Error Perfomance Chart");
      const kindData = request.data.data.map((data) => {
        switch (data.kind) {
          case 1:
            return { ...data, kind: "Cardio" };
          case 2:
            return { ...data, kind: "Energie" };
          case 3:
            return { ...data, kind: "Endurance" };
          case 4:
            return { ...data, kind: "Force" };
          case 5:
            return { ...data, kind: "Vitesse" };
          case 6:
            return { ...data, kind: "Intensité" };
          default:
            return { ...data };
        }
      });
      setData(kindData);
    };
    data();
  }, [id]);
  if (data.length === 0) return null;

  return (
    <div className="chart-performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10 }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

PerformanceChart.propTypes = {
  data: PropTypes?.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kind: PropTypes.number.isRequired,
    })
  ),
};

export default PerformanceChart;

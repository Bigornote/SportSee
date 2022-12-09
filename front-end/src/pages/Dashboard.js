import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../data/services/getdata";
// Components
import Error from "./Error";
import WelcomeUser from "../components/WelcomeUser";
import Card from "../components/Card";
// Charts
import ActivityChart from "../components/Charts/ActivityChart";
import AverageSessionChart from "../components/Charts/AverageSessionChart";
import PerformanceChart from "../components/Charts/PerformanceChart";
import ResultChart from "../components/Charts/ResultChart";
// Icons
import iconCalories from "../assets/icons-nutrition/calories.svg";
import iconGlucides from "../assets/icons-nutrition/glucides.svg";
import iconLipides from "../assets/icons-nutrition/lipides.svg";
import iconProteines from "../assets/icons-nutrition/proteines.svg";

/**
 * Returns a React component displays the Dashboard of the user
 * @params {number} id to useParams() methode
 * @returns a React Components
 */

const Dashboard = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_MAIN_DATA", parseInt(id));
      if (!request) return <Error />;
      setData(request.data);
    };
    data();
  }, [id]);

  return (
    <main className="container dashboard">
      <WelcomeUser name={data.userInfos?.firstName} />
      <section className="statistique">
        <div className="charts">
          <ActivityChart />
          <div className="bottom-charts">
            <AverageSessionChart />
            <PerformanceChart />
            <ResultChart data={data.todayScore || data.score} />
          </div>
        </div>
        <div className="keydata">
          <Card
            icon={iconCalories}
            info={data.keyData?.calorieCount}
            unit="kCal"
            text="Calories"
          />
          <Card
            icon={iconProteines}
            info={data.keyData?.proteinCount}
            unit="g"
            text="Proteines"
          />
          <Card
            icon={iconGlucides}
            info={data.keyData?.carbohydrateCount}
            unit="g"
            text="Glucides"
          />
          <Card
            icon={iconLipides}
            info={data.keyData?.lipidCount}
            unit="g"
            text="Lipides"
          />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../data/services/getdata";
// Components
import Error from "./Error";
import WelcomeUser from "../components/WelcomeUser";
import Card from "../components/Card";
// Charts
import ActivityChart from "../components/Charts/ActivityChart";
// Icons
import iconCalories from "../assets/icons-nutrition/calories.svg";
import iconGlucides from "../assets/icons-nutrition/glucides.svg";
import iconLipides from "../assets/icons-nutrition/lipides.svg";
import iconProteines from "../assets/icons-nutrition/proteines.svg";

const Dashboard = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_MAIN_DATA", id);
      if (!request) return <Error />;
      setData(request.data);
    };
    data();
  }, [id]);

  if (data.length === 0) return <Error />;

  return (
    <main className="container dashboard">
      <WelcomeUser name={data.userInfos.firstName} />
      <section className="statistique">
        <div className="charts">
          <ActivityChart />
        </div>
        <div className="keydata">
          <Card
            icon={iconCalories}
            info={data.keyData.calorieCount}
            unit="kCal"
            text="Calories"
          />
          <Card
            icon={iconProteines}
            info={data.keyData.proteinCount}
            unit="g"
            text="Proteines"
          />
          <Card
            icon={iconGlucides}
            info={data.keyData.carbohydrateCount}
            unit="g"
            text="Glucides"
          />
          <Card
            icon={iconLipides}
            info={data.keyData.lipidCount}
            unit="g"
            text="Lipides"
          />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;

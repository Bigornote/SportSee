import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WelcomeUser from "../components/WelcomeUser";
import { getData } from "../data/services/getdata";
import Error from "./Error";

const Dashboard = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_MAIN_DATA", id);
      if (!request) return alert("data error");
      setData(request.data);
    };
    data();
  }, [id]);

  if (data.length === 0) return <Error />;

  return (
    <main className="container">
      <WelcomeUser name={data.userInfos.firstName} />
    </main>
  );
};

export default Dashboard;

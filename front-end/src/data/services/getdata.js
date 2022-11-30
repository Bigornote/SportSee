import {
  getInfos,
  getActivity,
  getPerformance,
  getAverageSessions,
} from "../callapi";

// import {
//   getInfos,
//   getActivity,
//   getPerformance,
//   getAverageSessions,
// } from "../mockdata";

export const getData = async (type, id) => {
  let data = [];

  switch (type) {
    case "USER_MAIN_DATA":
      data = await getInfos(id);
      break;
    case "USER_ACTIVITY":
      data = await getActivity(id);
      break;
    case "USER_PERFORMANCE":
      data = await getPerformance(id);
      break;
    case "USER_AVERAGE_SESSIONS":
      data = await getAverageSessions(id);
      break;
  }
  return data;
};

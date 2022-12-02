import CallApi from "../callapi";
import MockData from "../mockdata";

let shouldUseMock = true;

const exportedAPI = shouldUseMock ? MockData : CallApi;
export default exportedAPI;

export const getData = async (type, id) => {
  let data = [];

  switch (type) {
    case "USER_MAIN_DATA":
      data = await exportedAPI.getInfos(id);
      break;
    case "USER_ACTIVITY":
      data = await exportedAPI.getActivity(id);
      break;
    case "USER_PERFORMANCE":
      data = await exportedAPI.getPerformance(id);
      break;
    case "USER_AVERAGE_SESSIONS":
      data = await exportedAPI.getAverageSessions(id);
      break;
  }
  return data;
};

import axios from "axios";

/**
 * Create instance of axios
 * Documentation : https://axios-http.com/docs/instance
 */
const api = axios.create({
  baseURL: `http://localhost:3000`,
});

export const getInfos = async (id) => {
  try {
    const res = await api.get(`http://localhost:3000/user/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getActivity = async (id) => {
  try {
    const res = await api.get(`http://localhost:3001/user/${id}/activity`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getPerformance = async (id) => {
  try {
    const res = await api.get(`http://localhost:3000/user/${id}/performance`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAverageSessions = async (id) => {
  try {
    const res = await api.get(
      `http://localhost:3000/user/${id}/average-sessions`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

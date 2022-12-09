import axios from "axios";

/**
 * Create instance of axios
 * Documentation : https://axios-http.com/docs/instance
 */
const api = axios.create({
  baseURL: `${process.env.REACT_APP_LOCALHOST_URL}`,
});

/**
 * Class CallApi to collect data
 * @param {number} id
 * @returns {object} res
 */

export default class CallApi {
  static getInfos = async (id) => {
    try {
      const res = await api.get(
        `${process.env.REACT_APP_LOCALHOST_URL}/user/${id}`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  static getActivity = async (id) => {
    try {
      const res = await api.get(
        `${process.env.REACT_APP_LOCALHOST_URL}/user/${id}/activity`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  static getPerformance = async (id) => {
    try {
      const res = await api.get(
        `${process.env.REACT_APP_LOCALHOST_URL}/user/${id}/performance`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  static getAverageSessions = async (id) => {
    try {
      const res = await api.get(
        `${process.env.REACT_APP_LOCALHOST_URL}/user/${id}/average-sessions`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
}

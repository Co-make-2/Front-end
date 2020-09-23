import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://comake-app.herokuapp.com",
    headers: {
      authorization: token
    }
  });
};
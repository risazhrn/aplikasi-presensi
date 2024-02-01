import axios from "axios";
const API_URL = "http://localhost:5000";

export const login = async (username, password) => {
  const token = (
    await axios.post(API_URL + "/auth/login", {
      username,
      password,
    })
  ).data;
  const user = (
    await axios.get(API_URL + "/auth/me", {
      headers: {
        Authorization: "Bearer " + token.data.token,
      },
    })
  ).data;
  localStorage.setItem("user", JSON.stringify(user.data));
  return user;
};

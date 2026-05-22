import axios from "axios";

const API = "http://https://ai-cyber-guardian.onrender.com/api/auth";

export const signupUser = async (userData) => {
  const response = await axios.post(
    `${API}/signup`,
    userData
  );

  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(
    `${API}/login`,
    userData
  );

  return response.data;
};
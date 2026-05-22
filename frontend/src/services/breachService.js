import axios from "axios";

const API = "https://ai-cyber-guardian.onrender.com/api/breach";

export const scanBreaches = async (email) => {
  const response = await axios.post(
    `${API}/scan`,
    { email }
  );

  return response.data;
};
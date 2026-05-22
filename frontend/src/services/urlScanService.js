import axios from "axios";

const API = "http://https://ai-cyber-guardian.onrender.com/api/url";

export const scanURL = async (url) => {

  const response = await axios.post(
    `${API}/scan-url`,
    { url }
  );

  return response.data;
};
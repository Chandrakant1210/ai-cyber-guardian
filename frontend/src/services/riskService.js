import axios from "axios";

const API = "http://https://ai-cyber-guardian.onrender.com/api/risk";

export const analyzeRisk = async (riskData) => {

  const response = await axios.post(
    `${API}/analyze-risk`,
    riskData
  );

  return response.data;
};
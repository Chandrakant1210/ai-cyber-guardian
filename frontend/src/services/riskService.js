import axios from "axios";

const API = "http://localhost:5000/api/risk";

export const analyzeRisk = async (riskData) => {

  const response = await axios.post(
    `${API}/analyze-risk`,
    riskData
  );

  return response.data;
};
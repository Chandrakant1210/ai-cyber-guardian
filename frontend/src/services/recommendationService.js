import axios from "axios";

const API =
  "https://ai-cyber-guardian.onrender.com/api/recommendations";

export const getRecommendations =
  async (recommendationData) => {

    const response = await axios.post(
      `${API}/generate-recommendations`,
      recommendationData
    );

    return response.data;
};
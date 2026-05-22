import axios from "axios";

const API =
  "http://localhost:5000/api/recommendations";

export const getRecommendations =
  async (recommendationData) => {

    const response = await axios.post(
      `${API}/generate-recommendations`,
      recommendationData
    );

    return response.data;
};
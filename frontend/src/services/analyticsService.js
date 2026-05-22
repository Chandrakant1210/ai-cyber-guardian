import axios from "axios";

const API =
  "https://YOUR-RENDER-URL.onrender.com/api/analytics";

export const getDashboardStats =
  async () => {

    const response = await axios.get(
      `${API}/dashboard-stats`
    );

    return response.data;
};
import axios from "axios";

const API = "http://localhost:5000/api/breach";

export const scanBreaches = async (email) => {
  const response = await axios.post(
    `${API}/scan`,
    { email }
  );

  return response.data;
};
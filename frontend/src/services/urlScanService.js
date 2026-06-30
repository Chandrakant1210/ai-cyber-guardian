import axios from "axios";

// const API =
//   "https://ai-cyber-guardian.onrender.com/api/url";

const API =
  "http://localhost:5000/api/url";

// SCAN URL
export const scanURL = async (url) => {

  try {

    const response =
      await axios.post(

        `${API}/scan-url`,

        {
          url,

          userEmail:
            "chandrakantkumar1210@gmail.com",

          scanSource:
            "Manual",
        }
      );

    console.log(
      "API RESPONSE:",
      response.data
    );

    // RETURN FULL DATA
    return response.data;

  } catch (error) {

    console.log(
      "URL Scan Error:",
      error.response?.data ||
      error.message
    );

    throw error;
  }
};
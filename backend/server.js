const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const breachRoutes = require("./routes/breachRoutes");
const urlScanRoutes = require("./routes/urlScanRoutes");
const riskRoutes = require("./routes/riskRoutes");
const analyticsRoutes = require(
  "./routes/analyticsRoutes"
);
const recommendationRoutes =
  require(
    "./routes/recommendationRoutes"
  );


  const darkwebRoutes = require("./routes/darkwebRoutes");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();



app.use("/api/darkweb", darkwebRoutes);
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/breach", breachRoutes);
app.use("/api/url", urlScanRoutes);
app.use("/api/risk", riskRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use(
  "/api/recommendations",
  recommendationRoutes
);

app.get("/", (req, res) => {
  res.send("AI Cyber Guardian Backend Running");
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});
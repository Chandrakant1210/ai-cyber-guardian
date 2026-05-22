const express = require("express");

const calculateRiskScore = require(
  "../utils/riskEngine"
);

const router = express.Router();

router.post("/analyze-risk", (req, res) => {

  try {

    const result = calculateRiskScore(req.body);

    res.json({
      success: true,
      riskAnalysis: result,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Risk Analysis Failed",
    });
  }
});

module.exports = router;
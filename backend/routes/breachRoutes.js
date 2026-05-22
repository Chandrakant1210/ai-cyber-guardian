const express = require("express");

const breachDatabase = require("../utils/breachData");

const router = express.Router();

router.post("/scan", async (req, res) => {
  try {
    const { email } = req.body;

    const result = breachDatabase.find(
      (item) => item.email === email
    );

    if (!result) {
      return res.json({
        success: true,
        message: "No breaches found",
        riskScore: 10,
        breaches: [],
      });
    }

    let riskScore = 0;

    result.breaches.forEach((breach) => {
      if (breach.severity === "Critical") {
        riskScore += 40;
      }

      else if (breach.severity === "High") {
        riskScore += 30;
      }

      else if (breach.severity === "Medium") {
        riskScore += 20;
      }

      else {
        riskScore += 10;
      }
    });

    res.json({
      success: true,
      message: "Breaches detected",
      riskScore,
      breaches: result.breaches,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;
const express = require("express");

const router = express.Router();

router.post("/scan", async (req, res) => {

  const { email } = req.body;

  res.json({
    totalLeaks: 18,
    mentions: 9,
    risk: "HIGH",

    accounts: [
      {
        platform: "LinkedIn",
        exposure: "Email + Password",
        risk: "Critical",
        status: "Compromised",
      },

      {
        platform: "Facebook",
        exposure: "Email",
        risk: "Medium",
        status: "Exposed",
      },

      {
        platform: "Twitter/X",
        exposure: "Username",
        risk: "Low",
        status: "Monitored",
      },
    ],
  });

});

module.exports = router;
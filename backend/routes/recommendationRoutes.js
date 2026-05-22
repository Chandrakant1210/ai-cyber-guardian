const express = require("express");

const generateRecommendations =
  require(
    "../utils/recommendationEngine"
  );

const router = express.Router();

router.post(
  "/generate-recommendations",

  (req, res) => {

    try {

      const recommendations =
        generateRecommendations(
          req.body
        );

      res.json({
        success: true,
        recommendations,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          "Recommendation Generation Failed",
      });
    }
  }
);

module.exports = router;
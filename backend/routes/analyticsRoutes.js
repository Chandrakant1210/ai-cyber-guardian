const express = require("express");

const ScanHistory = require(
  "../models/ScanHistory"
);

const router = express.Router();

router.get(
  "/dashboard-stats",

  async (req, res) => {

    try {

      const totalScans =
        await ScanHistory.countDocuments();

      const dangerousCount =
        await ScanHistory.countDocuments({
          threatLevel: "DANGEROUS",
        });

      const criticalCount =
        await ScanHistory.countDocuments({
          threatLevel: "CRITICAL",
        });

      const suspiciousCount =
        await ScanHistory.countDocuments({
          threatLevel: "SUSPICIOUS",
        });

      const recentScans =
        await ScanHistory.find()
          .sort({ createdAt: -1 })
          .limit(5);

      res.json({
        success: true,

        analytics: {
          totalScans,
          dangerousCount,
          criticalCount,
          suspiciousCount,
          recentScans,
        },
      });

    } catch (error) {

      console.log(
        "Analytics Error:",
        error
      );

      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }
);

module.exports = router;
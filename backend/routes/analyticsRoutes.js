const express = require("express");

const ScanHistory = require(
  "../models/ScanHistory"
);

const router = express.Router();

router.get("/dashboard-stats", async (req, res) => {

  try {

    // TOTAL SCANS
    const totalScans =
      await ScanHistory.countDocuments();

    // DANGEROUS
    const dangerousCount =
      await ScanHistory.countDocuments({
        threatLevel: "DANGEROUS",
      });

    // CRITICAL
    const criticalCount =
      await ScanHistory.countDocuments({
        threatLevel: "CRITICAL",
      });

    // SUSPICIOUS
    const suspiciousCount =
      await ScanHistory.countDocuments({
        threatLevel: "SUSPICIOUS",
      });

    // SAFE
    const safeCount =
      await ScanHistory.countDocuments({
        threatLevel: "SAFE",
      });

    // RECENT SCANS
    const recentScans =
      await ScanHistory.find()
        .sort({ scannedAt: -1 })
        .limit(5);

    // CHART DATA
    const chartData = [

      {
        name: "Safe",
        value: safeCount,
      },

      {
        name: "Suspicious",
        value: suspiciousCount,
      },

      {
        name: "Dangerous",
        value: dangerousCount,
      },

      {
        name: "Critical",
        value: criticalCount,
      },
    ];

    // RESPONSE
    res.json({
      success: true,

      analytics: {

        totalScans,

        dangerousCount,

        criticalCount,

        suspiciousCount,

        safeCount,

        chartData,

        recentScans,
      },
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Analytics Fetch Failed",
    });
  }
});

module.exports = router;
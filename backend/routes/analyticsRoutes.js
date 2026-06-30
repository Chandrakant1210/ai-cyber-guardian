const express = require("express");

const ScanHistory = require(
  "../models/ScanHistory"
);

const router = express.Router();

router.get(

  "/dashboard-stats",

  async (req, res) => {

    try {

      // TOTAL URL SCANS
      const totalScans =
        await ScanHistory.countDocuments();

      // SAFE URLS
      const safeCount =
        await ScanHistory.countDocuments({

          threatLevel:
            "SAFE",
        });

      // DANGEROUS URLS
      const dangerousCount =
        await ScanHistory.countDocuments({

          threatLevel:
            "DANGEROUS",
        });

      // CRITICAL URLS
      const criticalCount =
        await ScanHistory.countDocuments({

          threatLevel:
            "CRITICAL",
        });

      // SUSPICIOUS URLS
      const suspiciousCount =
        await ScanHistory.countDocuments({

          threatLevel:
            "SUSPICIOUS",
        });

      // MANUAL URL SCANS
      const recentScans =
        await ScanHistory.find({

          scanSource:
            "Manual",
        })

          .sort({
            scannedAt: -1,
          })

          .limit(5);

      // EXTENSION LIVE FEED
      const liveThreats =
        await ScanHistory.find({

          scanSource:
            "Extension",
        })

          .sort({
            scannedAt: -1,
          })

          .limit(10);

      // TOTAL THREATS
      const totalThreats =

        dangerousCount +

        criticalCount +

        suspiciousCount;

      // DYNAMIC RISK SCORE
      let riskScore = 0;

      if (totalScans > 0) {

        riskScore = Math.floor(

          (totalThreats / totalScans) * 100
        );
      }

      // MAX 100
      if (riskScore > 100) {

        riskScore = 100;
      }

      // RISK LEVEL
      let riskLevel = "SAFE";

      if (riskScore >= 70) {

        riskLevel =
          "CRITICAL";
      }

      else if (
        riskScore >= 40
      ) {

        riskLevel =
          "HIGH";
      }

      else if (
        riskScore >= 20
      ) {

        riskLevel =
          "MEDIUM";
      }

      else if (
        riskScore >= 1
      ) {

        riskLevel =
          "LOW";
      }

      // RESPONSE
      res.json({

        success: true,

        analytics: {

          totalScans,

          totalThreats,

          safeCount,

          dangerousCount,

          criticalCount,

          suspiciousCount,

          recentScans,

          liveThreats,

          riskScore,

          riskLevel,
        },
      });

    } catch (error) {

      console.log(
        "Analytics Error:",
        error
      );

      res.status(500).json({

        success: false,

        error:
          error.message,
      });
    }
  }
);

module.exports = router;
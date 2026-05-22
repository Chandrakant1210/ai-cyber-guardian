const express = require("express");
const axios = require("axios");

const ScanHistory = require("../models/ScanHistory");

const router = express.Router();

router.post("/scan-url", async (req, res) => {

  try {

    const { url } = req.body;

    // STEP 1 — SUBMIT URL
    const vtResponse = await axios.post(
      "https://www.virustotal.com/api/v3/urls",

      new URLSearchParams({
        url,
      }),

      {
        headers: {
          "x-apikey":
            process.env.VIRUSTOTAL_API_KEY,

          "Content-Type":
            "application/x-www-form-urlencoded",
        },
      }
    );

    const analysisId =
      vtResponse.data.data.id;

    // WAIT FOR ANALYSIS
    await new Promise((resolve) =>
      setTimeout(resolve, 5000)
    );

    // STEP 2 — GET ANALYSIS
    const analysisResponse =
      await axios.get(
        `https://www.virustotal.com/api/v3/analyses/${analysisId}`,

        {
          headers: {
            "x-apikey":
              process.env.VIRUSTOTAL_API_KEY,
          },
        }
      );

    const stats =
      analysisResponse.data.data.attributes.stats;

    const maliciousCount =
      stats.malicious || 0;

    const suspiciousCount =
      stats.suspicious || 0;

    // THREAT LEVEL
    let threatLevel = "SAFE";

    if (maliciousCount >= 5) {

      threatLevel = "CRITICAL";

    }

    else if (maliciousCount >= 1) {

      threatLevel = "DANGEROUS";

    }

    else if (suspiciousCount >= 1) {

      threatLevel = "SUSPICIOUS";
    }

    // SAVE TO DB
    const savedScan =
      await ScanHistory.create({

        url,

        threatLevel,

        maliciousCount,

        suspiciousCount,
      });

    console.log(
      "Saved Scan:",
      savedScan
    );

    // RESPONSE
    res.json({

      success: true,

      result: savedScan,
    });

  } catch (error) {

    console.log(
      "VirusTotal Error:",
      error.response?.data ||
      error.message
    );

    res.status(500).json({

      success: false,

      message: "URL Scan Failed",
    });
  }
});

module.exports = router;
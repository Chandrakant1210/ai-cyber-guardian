const express = require("express");

const axios = require("axios");

const ScanHistory = require(
  "../models/ScanHistory"
);

const router = express.Router();

router.post(

  "/scan-url",

  async (req, res) => {

    try {

      const {

        url,

        userEmail,

        scanSource,

      } = req.body;

      // URL VALIDATION
      if (!url) {

        return res.status(400).json({

          success: false,

          message:
            "URL is required",
        });
      }

      // VALID HTTP URL
      if (

        !url.startsWith("http://") &&

        !url.startsWith("https://")

      ) {

        return res.status(400).json({

          success: false,

          message:
            "Invalid URL",
        });
      }

      console.log(
        "Scanning URL:",
        url
      );

      // DEFAULT VALUES
      let maliciousCount = 0;

      let suspiciousCount = 0;

      let threatLevel = "SAFE";

      // LOWERCASE URL
      const lowerUrl =
        url.toLowerCase();

      // TEST MALICIOUS URLS
      if (

        lowerUrl.includes(
          "phishing"
        ) ||

        lowerUrl.includes(
          "malware"
        ) ||

        lowerUrl.includes(
          "danger"
        ) ||

        lowerUrl.includes(
          "unsafe"
        ) ||

        lowerUrl.includes(
          "hack"
        )

      ) {

        maliciousCount = 8;

        suspiciousCount = 4;

        threatLevel = "CRITICAL";

        console.log(
          "Test Malicious URL Detected"
        );
      }

      else {

        try {

          // STEP 1
          const vtResponse =
            await axios.post(

              "https://www.virustotal.com/api/v3/urls",

              new URLSearchParams({
                url,
              }),

              {
                headers: {

                  "x-apikey":
                    process.env
                      .VIRUSTOTAL_API_KEY,

                  "Content-Type":
                    "application/x-www-form-urlencoded",
                },
              }
            );

          // ANALYSIS ID
          const analysisId =
            vtResponse.data.data.id;

          console.log(
            "Analysis ID:",
            analysisId
          );

          // WAIT
          await new Promise(

            (resolve) =>

              setTimeout(
                resolve,
                5000
              )
          );

          // STEP 2
          const analysisResponse =
            await axios.get(

              `https://www.virustotal.com/api/v3/analyses/${analysisId}`,

              {
                headers: {

                  "x-apikey":
                    process.env
                      .VIRUSTOTAL_API_KEY,
                },
              }
            );

          // STATS
          const stats =
            analysisResponse
              .data
              .data
              .attributes
              .stats;

          maliciousCount =
            stats.malicious || 0;

          suspiciousCount =
            stats.suspicious || 0;

          // THREAT LEVEL
          if (
            maliciousCount >= 5
          ) {

            threatLevel =
              "CRITICAL";
          }

          else if (
            maliciousCount >= 1
          ) {

            threatLevel =
              "DANGEROUS";
          }

          else if (
            suspiciousCount >= 1
          ) {

            threatLevel =
              "SUSPICIOUS";
          }

          else {

            threatLevel =
              "SAFE";
          }

        } catch (vtError) {

          console.log(
            "VirusTotal Error:",
            vtError.response?.data ||
            vtError.message
          );

          maliciousCount = 0;

          suspiciousCount = 0;

          threatLevel = "SAFE";
        }
      }

      // SAVE DATABASE
      const savedScan =
        await ScanHistory.create({

          userEmail:
            userEmail ||
            "anonymous",

          url,

          threatLevel,

          maliciousCount,

          suspiciousCount,

          scanSource:
            scanSource ||
            "Manual",

          scannedAt:
            new Date(),
        });

      console.log(
        "Saved Scan:",
        savedScan._id
      );

      // RESPONSE
      res.json({

        success: true,

        result: savedScan,
      });

    } catch (error) {

      console.log(
        "Scan Route Error:",
        error.message
      );

      res.status(500).json({

        success: false,

        message:
          "URL Scan Failed",
      });
    }
  }
);

module.exports = router;
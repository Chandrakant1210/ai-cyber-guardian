const mongoose = require("mongoose");

const scanHistorySchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },

    threatLevel: {
      type: String,
      default: "SAFE",
    },

    maliciousCount: {
      type: Number,
      default: 0,
    },

    suspiciousCount: {
      type: Number,
      default: 0,
    },

    scanSource: {
      type: String,
      default: "VirusTotal",
    },

    scannedAt: {
      type: Date,
      default: Date.now,
    },
  }
);

module.exports = mongoose.model(
  "ScanHistory",
  scanHistorySchema
);
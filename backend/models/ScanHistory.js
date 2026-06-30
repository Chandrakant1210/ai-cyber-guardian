const mongoose = require("mongoose");

const scanHistorySchema =
  new mongoose.Schema({

    // USER EMAIL
    userEmail: {
      type: String,
      required: true,
    },

    // SCANNED URL
    url: {
      type: String,
      required: true,
    },

    // THREAT LEVEL
    threatLevel: {
      type: String,
      default: "SAFE",
    },

    // MALICIOUS COUNT
    maliciousCount: {
      type: Number,
      default: 0,
    },

    // SUSPICIOUS COUNT
    suspiciousCount: {
      type: Number,
      default: 0,
    },

    // SCAN SOURCE
    scanSource: {
      type: String,
      default: "Manual",
    },

    // SCAN DATE
    scannedAt: {
      type: Date,
      default: Date.now,
    },
  });

module.exports =
  mongoose.model(
    "ScanHistory",
    scanHistorySchema
  );
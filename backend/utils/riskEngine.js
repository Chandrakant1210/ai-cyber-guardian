const calculateRiskScore = ({
  breachCount,
  maliciousUrls,
  phishingAttempts,
  darkWebExposure,
}) => {

  let score = 0;

  // BREACH SCORE
  score += breachCount * 10;

  // MALICIOUS URL SCORE
  score += maliciousUrls * 15;

  // PHISHING SCORE
  score += phishingAttempts * 12;

  // DARK WEB SCORE
  score += darkWebExposure * 20;

  // LIMIT SCORE
  if (score > 100) {
    score = 100;
  }

  // RISK LEVEL
  let riskLevel = "";

  if (score >= 80) {
    riskLevel = "CRITICAL";
  }

  else if (score >= 60) {
    riskLevel = "HIGH";
  }

  else if (score >= 40) {
    riskLevel = "MEDIUM";
  }

  else {
    riskLevel = "LOW";
  }

  return {
    score,
    riskLevel,
  };
};

module.exports = calculateRiskScore;
const generateRecommendations = ({
  riskLevel,
  maliciousCount,
  suspiciousCount,
}) => {

  const recommendations = [];

  // CRITICAL
  if (riskLevel === "CRITICAL") {

    recommendations.push(
      "Change all passwords immediately."
    );

    recommendations.push(
      "Enable Two-Factor Authentication."
    );

    recommendations.push(
      "Monitor banking and email accounts."
    );

    recommendations.push(
      "Avoid accessing suspicious websites."
    );
  }

  // HIGH
  else if (riskLevel === "HIGH") {

    recommendations.push(
      "Enable stronger password protection."
    );

    recommendations.push(
      "Scan devices for malware."
    );

    recommendations.push(
      "Monitor account login activity."
    );
  }

  // MEDIUM
  else if (riskLevel === "MEDIUM") {

    recommendations.push(
      "Avoid suspicious URLs."
    );

    recommendations.push(
      "Enable browser protection."
    );
  }

  // LOW
  else {

    recommendations.push(
      "Maintain regular cybersecurity practices."
    );
  }

  // EXTRA THREAT WARNINGS
  if (maliciousCount >= 1) {

    recommendations.push(
      "Malicious websites detected. Avoid unsafe links."
    );
  }

  if (suspiciousCount >= 1) {

    recommendations.push(
      "Suspicious threat activity detected."
    );
  }

  return recommendations;
};

module.exports =
  generateRecommendations;
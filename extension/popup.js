const resultDiv =
  document.getElementById(
    "result"
  );

chrome.storage.local.get(
  ["latestThreat"],

  (data) => {

    const result =
      data.latestThreat;

    if (!result) {

      resultDiv.innerHTML = `
      
      <p>
        No scan data available.
      </p>
      
      `;

      return;
    }

    let color = "#22c55e";

    if (
      result.threatLevel ===
      "CRITICAL"
    ) {

      color = "#ef4444";
    }

    else if (
      result.threatLevel ===
      "DANGEROUS"
    ) {

      color = "#f97316";
    }

    else if (
      result.threatLevel ===
      "SUSPICIOUS"
    ) {

      color = "#facc15";
    }

    resultDiv.innerHTML = `
    
    <h2 style="color:${color}">
      ${result.threatLevel}
    </h2>

    <p>
      <strong>URL:</strong>
      ${result.url}
    </p>

    <p>
      <strong>Malicious:</strong>
      ${result.maliciousCount}
    </p>

    <p>
      <strong>Suspicious:</strong>
      ${result.suspiciousCount}
    </p>

    `;
  }
);
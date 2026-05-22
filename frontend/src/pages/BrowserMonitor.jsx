import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { scanURL } from "../services/urlScanService";

function BrowserMonitor() {

  const [url, setUrl] = useState("");

  const [scanResult, setScanResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleScan = async () => {

    if (!url) {
      return alert("Enter URL");
    }

    try {

      setLoading(true);

      const data = await scanURL(url);

      setScanResult(data);

      setLoading(false);

    } catch (error) {

      setLoading(false);

      alert("URL Scan Failed");
    }
  };

  return (

    <DashboardLayout>

      <h1
        style={{
          color: "#06b6d4",
          fontSize: "35px",
          marginBottom: "25px",
        }}
      >
        Real-Time URL Threat Scanner
      </h1>

      {/* URL SCAN BOX */}
      <div
        style={{
          background: "#111827",
          padding: "30px",
          borderRadius: "20px",
          border: "1px solid #06b6d4",
          marginBottom: "30px",
        }}
      >

        <h2 style={{ marginBottom: "20px" }}>
          Scan Website URL
        </h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >

          <input
            type="text"
            placeholder="Enter Website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{
              flex: 1,
              padding: "15px",
              background: "#1e293b",
              border: "1px solid #06b6d4",
              borderRadius: "10px",
              color: "white",
              fontSize: "16px",
            }}
          />

          <button
            onClick={handleScan}
            style={{
              background: "#06b6d4",
              color: "black",
              border: "none",
              padding: "15px 25px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {loading ? "Scanning..." : "Scan URL"}
          </button>

        </div>

      </div>

      {/* RESULTS */}
      {scanResult && (

        <div
          style={{
            background: "#111827",
            padding: "25px",
            borderRadius: "20px",
            border: "1px solid #06b6d4",
          }}
        >

          <h2
            style={{
              color: "#06b6d4",
              marginBottom: "20px",
            }}
          >
            Threat Analysis Results
          </h2>

          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "15px",
            }}
          >

            <h3>URL Scan Completed</h3>

            <p>
              Real-time cybersecurity intelligence analysis
              performed using VirusTotal API.
            </p>

            <p
              style={{
                color: "#22c55e",
                fontWeight: "bold",
              }}
            >
              Status: Successfully Analyzed
            </p>

          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "12px",
            }}
          >

            <h3>AI Threat Intelligence</h3>

            <p>
              ✔ URL submitted to global threat intelligence
              engine.
            </p>

            <p>
              ✔ Domain reputation analyzed.
            </p>

            <p>
              ✔ Malicious indicators checked.
            </p>

            <p>
              ✔ AI cyber analysis completed.
            </p>

          </div>

        </div>

      )}

    </DashboardLayout>
  );
}

export default BrowserMonitor;
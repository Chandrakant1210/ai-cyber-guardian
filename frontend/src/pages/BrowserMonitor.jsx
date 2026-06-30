import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { scanURL } from "../services/urlScanService";

function BrowserMonitor() {

  const [url, setUrl] =
    useState("");

  const [scanResult, setScanResult] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  // SCAN URL
  const handleScan = async () => {

    if (!url) {

      alert("Enter URL");

      return;
    }

    try {

      setLoading(true);

      const response =
        await scanURL(url);

      console.log(
        "FULL RESPONSE:",
        response
      );

      // SAFE RESULT
      if (
        response &&
        response.result
      ) {

        setScanResult(
          response.result
        );

      } else {

        alert(
          "Invalid API Response"
        );
      }

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert(
        "URL Scan Failed"
      );
    }
  };

  // THREAT COLOR
  const getThreatColor = (
    level
  ) => {

    if (
      level === "CRITICAL"
    ) {

      return "#ef4444";
    }

    if (
      level === "DANGEROUS"
    ) {

      return "#f97316";
    }

    if (
      level === "SUSPICIOUS"
    ) {

      return "#facc15";
    }

    return "#22c55e";
  };

  return (

    <DashboardLayout>

      <h1
        style={{
          color: "#06b6d4",
          fontSize: "40px",
          marginBottom: "25px",
          fontWeight: "bold",
        }}
      >
        Real-Time URL Threat Scanner
      </h1>

      {/* URL BOX */}
      <div
        style={{
          background: "#111827",
          padding: "30px",
          borderRadius: "20px",
          border: "1px solid #06b6d4",
          marginBottom: "30px",
        }}
      >

        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Scan Website URL
        </h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >

          <input
            type="text"

            placeholder="Enter URL"

            value={url}

            onChange={(e) =>
              setUrl(
                e.target.value
              )
            }

            style={{
              flex: 1,
              padding: "15px",
              background:
                "#1e293b",
              border:
                "1px solid #06b6d4",
              borderRadius:
                "10px",
              color: "white",
              fontSize: "16px",
            }}
          />

          <button
            onClick={handleScan}

            disabled={loading}

            style={{
              background:
                "#06b6d4",
              color: "black",
              border: "none",
              padding:
                "15px 25px",
              borderRadius:
                "10px",
              fontWeight:
                "bold",
              cursor:
                "pointer",
            }}
          >
            {loading
              ? "Scanning..."
              : "Scan URL"}
          </button>

        </div>

      </div>

      {/* RESULT */}
      {scanResult && (

        <div
          style={{
            background: "#111827",
            padding: "25px",
            borderRadius: "20px",
            border:
              `2px solid ${getThreatColor(
                scanResult.threatLevel
              )}`,
          }}
        >

          <h2
            style={{
              color:
                getThreatColor(
                  scanResult.threatLevel
                ),
              marginBottom:
                "20px",
            }}
          >
            Threat Analysis Results
          </h2>

          <div
            style={{
              background:
                "#1e293b",
              padding: "25px",
              borderRadius:
                "12px",
            }}
          >

            <h1
              style={{
                color:
                  getThreatColor(
                    scanResult.threatLevel
                  ),
                fontSize: "45px",
              }}
            >
              {
                scanResult.threatLevel
              }
            </h1>

            <p>
              <strong>
                URL:
              </strong>
              <br />
              {
                scanResult.url
              }
            </p>

            <p>
              <strong>
                Malicious Engines:
              </strong>{" "}
              {
                scanResult.maliciousCount
              }
            </p>

            <p>
              <strong>
                Suspicious Engines:
              </strong>{" "}
              {
                scanResult.suspiciousCount
              }
            </p>

            <p>
              <strong>
                Scan Source:
              </strong>{" "}
              {
                scanResult.scanSource
              }
            </p>

          </div>

        </div>
      )}

    </DashboardLayout>
  );
}

export default BrowserMonitor;
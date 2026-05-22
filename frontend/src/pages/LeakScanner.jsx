import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { scanBreaches } from "../services/breachService";

function LeakScanner() {

  const [email, setEmail] = useState("");

  const [scanResult, setScanResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleScan = async () => {

    if (!email) {
      return alert("Enter email");
    }

    try {

      setLoading(true);

      const data = await scanBreaches(email);

      setScanResult(data);

      setLoading(false);

    } catch (error) {

      setLoading(false);

      alert("Scan Failed");
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
        Data Leak Scanner
      </h1>

      {/* SCANNER BOX */}
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
          Scan Digital Identity
        </h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >

          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            {loading ? "Scanning..." : "Start Scan"}
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
            Scan Results
          </h2>

          <h3>
            Risk Score:
            <span
              style={{
                color:
                  scanResult.riskScore > 40
                    ? "#ef4444"
                    : "#22c55e",
                marginLeft: "10px",
              }}
            >
              {scanResult.riskScore}
            </span>
          </h3>

          <p>{scanResult.message}</p>

          {/* BREACH LIST */}
          {scanResult.breaches.length > 0 && (

            <div
              style={{
                marginTop: "25px",
              }}
            >

              {scanResult.breaches.map((breach, index) => (

                <div
                  key={index}
                  style={{
                    background: "#1e293b",
                    padding: "20px",
                    borderRadius: "12px",
                    marginBottom: "15px",
                  }}
                >

                  <h3>{breach.platform}</h3>

                  <p>
                    Leaked Data:
                    {" "}
                    {breach.leakedData}
                  </p>

                  <p>
                    Severity:
                    {" "}
                    <span
                      style={{
                        color:
                          breach.severity === "Critical"
                            ? "#ef4444"
                            : breach.severity === "High"
                            ? "#f97316"
                            : "#facc15",
                      }}
                    >
                      {breach.severity}
                    </span>
                  </p>

                </div>

              ))}

            </div>

          )}

        </div>

      )}

    </DashboardLayout>
  );
}

export default LeakScanner;
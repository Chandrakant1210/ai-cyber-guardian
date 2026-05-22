import { useState } from "react";
import axios from "axios";
import DashboardLayout from "../layouts/DashboardLayout";

function DarkWeb() {

  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const [scanData, setScanData] = useState({
    totalLeaks: 0,
    mentions: 0,
    risk: "SAFE",
    accounts: [],
  });

  const handleScan = async () => {

    if (!email) {
      alert("Enter Email First");
      return;
    }

    try {

      setLoading(true);

      const res = await axios.post(
        "https://ai-cyber-guardian.onrender.com/api/darkweb/scan",
        {
          email,
        }
      );

      setScanData(res.data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      alert("Dark Web Scan Failed");

      setLoading(false);
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
        Dark Web Intelligence
      </h1>

      {/* SEARCH SECTION */}
      <div
        style={{
          background: "#111827",
          padding: "25px",
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
            type="text"
            placeholder="Enter Email or Username"
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
            {loading ? "Scanning..." : "Start Deep Scan"}
          </button>
        </div>
      </div>

      {/* EXPOSURE CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >

        {/* TOTAL LEAKS */}
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
            border: "1px solid #ef4444",
            boxShadow: "0 0 15px rgba(239,68,68,0.3)",
          }}
        >
          <h2>Total Leaks</h2>

          <h1
            style={{
              color: "#ef4444",
              fontSize: "50px",
            }}
          >
            {scanData.totalLeaks}
          </h1>

          <p>Critical Exposure</p>
        </div>

        {/* MENTIONS */}
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
            border: "1px solid #facc15",
            boxShadow: "0 0 15px rgba(250,204,21,0.3)",
          }}
        >
          <h2>Dark Web Mentions</h2>

          <h1
            style={{
              color: "#facc15",
              fontSize: "50px",
            }}
          >
            {scanData.mentions}
          </h1>

          <p>Active Threat Sources</p>
        </div>

        {/* RISK */}
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
            border: "1px solid #06b6d4",
            boxShadow: "0 0 15px rgba(6,182,212,0.3)",
          }}
        >
          <h2>Identity Risk</h2>

          <h1
            style={{
              color: "#06b6d4",
              fontSize: "50px",
            }}
          >
            {scanData.risk}
          </h1>

          <p>AI Threat Prediction</p>
        </div>
      </div>

      {/* TABLE */}
      <div
        style={{
          background: "#111827",
          padding: "25px",
          borderRadius: "20px",
          border: "1px solid #1e293b",
        }}
      >
        <h2
          style={{
            color: "#06b6d4",
            marginBottom: "20px",
          }}
        >
          Compromised Accounts
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            color: "white",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#1e293b",
              }}
            >
              <th style={{ padding: "15px" }}>Platform</th>
              <th style={{ padding: "15px" }}>Exposure</th>
              <th style={{ padding: "15px" }}>Risk</th>
              <th style={{ padding: "15px" }}>Status</th>
            </tr>
          </thead>

          <tbody>

            {scanData.accounts.length > 0 ? (

              scanData.accounts.map((item, index) => (

                <tr key={index}>

                  <td style={{ padding: "15px" }}>
                    {item.platform}
                  </td>

                  <td style={{ padding: "15px" }}>
                    {item.exposure}
                  </td>

                  <td
                    style={{
                      padding: "15px",
                      color:
                        item.risk === "Critical"
                          ? "#ef4444"
                          : item.risk === "Medium"
                          ? "#facc15"
                          : "#06b6d4",
                    }}
                  >
                    {item.risk}
                  </td>

                  <td style={{ padding: "15px" }}>
                    {item.status}
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="4"
                  style={{
                    padding: "20px",
                    textAlign: "center",
                    color: "#94a3b8",
                  }}
                >
                  No Data Available
                </td>

              </tr>

            )}

          </tbody>
        </table>
      </div>

    </DashboardLayout>
  );
}

export default DarkWeb;
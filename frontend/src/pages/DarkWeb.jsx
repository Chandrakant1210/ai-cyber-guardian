import DashboardLayout from "../layouts/DashboardLayout";

function DarkWeb() {
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
            Start Deep Scan
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
          <h1 style={{ color: "#ef4444", fontSize: "50px" }}>
            18
          </h1>
          <p>Critical Exposure</p>
        </div>

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
          <h1 style={{ color: "#facc15", fontSize: "50px" }}>
            9
          </h1>
          <p>Active Threat Sources</p>
        </div>

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
          <h1 style={{ color: "#06b6d4", fontSize: "50px" }}>
            HIGH
          </h1>
          <p>AI Threat Prediction</p>
        </div>
      </div>

      {/* COMPROMISED ACCOUNTS */}
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
            <tr>
              <td style={{ padding: "15px" }}>LinkedIn</td>
              <td style={{ padding: "15px" }}>
                Email + Password
              </td>
              <td style={{ padding: "15px", color: "#ef4444" }}>
                Critical
              </td>
              <td style={{ padding: "15px" }}>
                Compromised
              </td>
            </tr>

            <tr>
              <td style={{ padding: "15px" }}>Facebook</td>
              <td style={{ padding: "15px" }}>
                Email
              </td>
              <td style={{ padding: "15px", color: "#facc15" }}>
                Medium
              </td>
              <td style={{ padding: "15px" }}>
                Exposed
              </td>
            </tr>

            <tr>
              <td style={{ padding: "15px" }}>Twitter/X</td>
              <td style={{ padding: "15px" }}>
                Username
              </td>
              <td style={{ padding: "15px", color: "#06b6d4" }}>
                Low
              </td>
              <td style={{ padding: "15px" }}>
                Monitored
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default DarkWeb;
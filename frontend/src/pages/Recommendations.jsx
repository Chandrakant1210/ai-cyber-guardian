import DashboardLayout from "../layouts/DashboardLayout";

function Recommendations() {
  return (
    <DashboardLayout>
      <h1
        style={{
          color: "#06b6d4",
          fontSize: "35px",
          marginBottom: "25px",
        }}
      >
        AI Security Recommendations
      </h1>

      {/* EMERGENCY MODE */}
      <div
        style={{
          background: "#111827",
          padding: "25px",
          borderRadius: "20px",
          border: "1px solid #ef4444",
          boxShadow: "0 0 15px rgba(239,68,68,0.3)",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            color: "#ef4444",
            marginBottom: "15px",
          }}
        >
          Emergency Security Mode Activated
        </h2>

        <p>
          Critical exposure detected across multiple breach
          databases and dark web intelligence sources.
        </p>

        <p>
          Immediate security actions are recommended to reduce
          account compromise risk.
        </p>
      </div>

      {/* RECOMMENDATION CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {/* CARD 1 */}
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
            border: "1px solid #06b6d4",
            boxShadow: "0 0 15px rgba(6,182,212,0.3)",
          }}
        >
          <h2>Password Security</h2>

          <p>
            Change reused passwords immediately and generate
            stronger credentials.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
            border: "1px solid #facc15",
            boxShadow: "0 0 15px rgba(250,204,21,0.3)",
          }}
        >
          <h2>Enable 2FA</h2>

          <p>
            Activate two-factor authentication for email,
            banking, and social media accounts.
          </p>
        </div>

        {/* CARD 3 */}
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
            border: "1px solid #22c55e",
            boxShadow: "0 0 15px rgba(34,197,94,0.3)",
          }}
        >
          <h2>Device Monitoring</h2>

          <p>
            Review active sessions and remove unauthorized
            devices immediately.
          </p>
        </div>
      </div>

      {/* AI SECURITY ANALYSIS */}
      <div
        style={{
          background: "#111827",
          padding: "25px",
          borderRadius: "20px",
          border: "1px solid #06b6d4",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            color: "#06b6d4",
            marginBottom: "20px",
          }}
        >
          AI Security Intelligence
        </h2>

        <div style={{ lineHeight: "2" }}>
          <p>
            ✔ Multiple credentials appear in recent breach
            datasets.
          </p>

          <p>
            ✔ Password reuse significantly increases identity
            takeover probability.
          </p>

          <p>
            ✔ AI predicts elevated phishing vulnerability based
            on browser activity.
          </p>

          <p>
            ✔ Risk score expected to reduce by 45% after applying
            recommendations.
          </p>
        </div>
      </div>

      {/* RECOVERY CHECKLIST */}
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
          Recovery Checklist
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            ✅ Change compromised passwords
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            ✅ Enable multi-factor authentication
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            ✅ Review suspicious account activity
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            ✅ Monitor banking and financial accounts
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            ✅ Remove unauthorized browser sessions
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Recommendations;
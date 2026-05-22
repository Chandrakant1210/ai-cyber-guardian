import {
  useEffect,
  useState,
} from "react";

import {
  getDashboardStats,
} from "../services/analyticsService";

function LiveThreatFeed() {

  const [threats, setThreats] =
    useState([]);

  useEffect(() => {

    fetchThreatFeed();

    // AUTO REFRESH EVERY 5 SECONDS
    const interval = setInterval(
      () => {

        fetchThreatFeed();

      },

      5000
    );

    return () =>
      clearInterval(interval);

  }, []);

  const fetchThreatFeed =
    async () => {

      try {

        const response =
          await getDashboardStats();

        setThreats(
          response.analytics
            .recentScans
        );

      } catch (error) {

        console.log(error);
      }
    };

  return (

    <div
      style={{
        marginTop: "30px",

        background: "#111827",

        padding: "25px",

        borderRadius: "20px",

        border:
          "1px solid #06b6d4",

        height: "350px",

        overflowY: "auto",
      }}
    >

      <h2
        style={{
          color: "#06b6d4",

          marginBottom: "20px",
        }}
      >
        Live Threat Activity
      </h2>

      {threats.map(
        (threat, index) => (

          <div
            key={index}

            style={{
              background: "#1e293b",

              padding: "15px",

              borderRadius: "12px",

              marginBottom: "15px",

              borderLeft:
                threat.threatLevel ===
                "CRITICAL"

                  ? "5px solid #ef4444"

                  : threat.threatLevel ===
                    "DANGEROUS"

                  ? "5px solid #f97316"

                  : threat.threatLevel ===
                    "SUSPICIOUS"

                  ? "5px solid #facc15"

                  : "5px solid #22c55e",
            }}
          >

            <p
              style={{
                margin: 0,

                fontWeight: "bold",
              }}
            >
              {threat.threatLevel ===
              "CRITICAL"

                ? "⚠ Critical threat detected"

                : threat.threatLevel ===
                  "DANGEROUS"

                ? "⚠ Dangerous website identified"

                : threat.threatLevel ===
                  "SUSPICIOUS"

                ? "⚠ Suspicious activity detected"

                : "✔ Safe website analyzed"}
            </p>

            <p
              style={{
                marginTop: "10px",

                color: "#94a3b8",

                wordBreak:
                  "break-word",
              }}
            >
              {threat.url}
            </p>

          </div>

        )
      )}

    </div>
  );
}

export default LiveThreatFeed;
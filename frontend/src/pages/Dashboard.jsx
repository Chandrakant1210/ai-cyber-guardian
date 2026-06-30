import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import RiskMeter from "../components/RiskMeter";

import ThreatChart from "../charts/ThreatChart";

import LiveThreatFeed
from "../components/LiveThreatFeed";

import SystemStatus
from "../components/SystemStatus";

import ThreatAlert
from "../components/ThreatAlert";

import {
  getDashboardStats,
} from "../services/analyticsService";

function Dashboard() {

  const [riskData, setRiskData] =
    useState({

      score: 0,

      riskLevel: "SAFE",
    });

  const [analytics, setAnalytics] =
    useState(null);

  const [recommendations,
    setRecommendations] =
    useState([]);

  // FETCH DASHBOARD DATA
  useEffect(() => {

    fetchAnalytics();

    // AUTO REFRESH
    const interval =
      setInterval(() => {

        fetchAnalytics();

      }, 5000);

    return () =>
      clearInterval(interval);

  }, []);

  // GENERATE AI RISK
  useEffect(() => {

    if (analytics) {

      generateRiskData();
    }

  }, [analytics]);

  // FETCH DATA
  const fetchAnalytics = async () => {

    try {

      const response =
        await getDashboardStats();

      if (
        response.success
      ) {

        setAnalytics(
          response.analytics
        );
      }

    } catch (error) {

      console.log(
        "Dashboard Error:",
        error
      );
    }
  };

  // AI RISK ENGINE
  const generateRiskData = () => {

    const totalScans =
      analytics?.totalScans || 0;

    const dangerousCount =
      analytics?.dangerousCount || 0;

    const suspiciousCount =
      analytics?.suspiciousCount || 0;

    const criticalCount =
      analytics?.criticalCount || 0;

    const totalThreats =

      dangerousCount +

      suspiciousCount +

      criticalCount;

    // REAL RISK SCORE
    let score = 0;

    if (totalScans > 0) {

      score = Math.floor(

        (totalThreats / totalScans) * 100
      );
    }

    // MAX 100
    if (score > 100) {

      score = 100;
    }

    // RISK LEVEL
    let riskLevel = "SAFE";

    if (score >= 70) {

      riskLevel =
        "CRITICAL";
    }

    else if (
      score >= 40
    ) {

      riskLevel =
        "HIGH";
    }

    else if (
      score >= 20
    ) {

      riskLevel =
        "MEDIUM";
    }

    else if (
      score >= 1
    ) {

      riskLevel =
        "LOW";
    }

    setRiskData({

      score,

      riskLevel,
    });

    // AI RECOMMENDATIONS
    let aiRecommendations = [];

    if (riskLevel === "SAFE") {

      aiRecommendations = [

        "System security stable.",

        "No malicious activity detected.",

        "Continue secure browsing.",
      ];
    }

    else if (
      riskLevel === "LOW"
    ) {

      aiRecommendations = [

        "Avoid suspicious websites.",

        "Enable browser protection.",

        "Keep software updated.",
      ];
    }

    else if (
      riskLevel === "MEDIUM"
    ) {

      aiRecommendations = [

        "Enable Two-Factor Authentication.",

        "Monitor account activity.",

        "Avoid unknown downloads.",
      ];
    }

    else if (
      riskLevel === "HIGH"
    ) {

      aiRecommendations = [

        "Change passwords immediately.",

        "Run antivirus scan.",

        "Monitor banking activity.",
      ];
    }

    else {

      aiRecommendations = [

        "Critical cyber threat detected.",

        "Disconnect suspicious extensions.",

        "Full malware scan required.",
      ];
    }

    setRecommendations(
      aiRecommendations
    );
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
          fontSize: "35px",
          color: "#06b6d4",
          marginBottom: "25px",
          fontWeight: "bold",
        }}
      >
        AI Threat Intelligence Dashboard
      </h1>

      {/* TOP CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >

        {/* CYBER RISK */}
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
            border:
              "1px solid #ef4444",
          }}
        >

          <h2>
            Cyber Risk Score
          </h2>

          <h1
            style={{
              color: "#ef4444",
              fontSize: "55px",
            }}
          >
            {riskData.score}%
          </h1>

          <p>
            {
              riskData.riskLevel
            }
          </p>

        </div>

        {/* TOTAL SCANS */}
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
            border:
              "1px solid #facc15",
          }}
        >

          <h2>
            Total Threat Scans
          </h2>

          <h1
            style={{
              color: "#facc15",
              fontSize: "55px",
            }}
          >
            {
              analytics?.totalScans || 0
            }
          </h1>

          <p>
            Total URL Scan Records
          </p>

        </div>

        {/* THREATS */}
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
            border:
              "1px solid #06b6d4",
          }}
        >

          <h2>
            Threat Detections
          </h2>

          <h1
            style={{
              color: "#06b6d4",
              fontSize: "55px",
            }}
          >
            {
              analytics?.totalThreats || 0
            }
          </h1>

          <p>
            Dangerous & Suspicious URLs
          </p>

        </div>

      </div>

      {/* AI PANEL */}
      <div
        style={{
          marginTop: "30px",
          background: "#111827",
          padding: "25px",
          borderRadius: "20px",
          border:
            "1px solid #06b6d4",
        }}
      >

        <h2
          style={{
            color: "#06b6d4",
            marginBottom: "20px",
          }}
        >
          AI Cyber Intelligence
        </h2>

        <div
          style={{
            lineHeight: "2",
          }}
        >

          <p>
            ✔ AI monitoring active.
          </p>

          <p>
            ✔ Threat detection operational.
          </p>

          <p>
            ✔ Browser monitoring enabled.
          </p>

          <p>
            ✔ Real-time analytics generated.
          </p>

          <p>

            ✔ Current Risk:

            <span
              style={{
                marginLeft: "10px",
                color:
                  getThreatColor(
                    riskData.riskLevel
                  ),
                fontWeight: "bold",
              }}
            >
              {
                riskData.riskLevel
              }
            </span>

          </p>

        </div>

      </div>

      {/* RECOMMENDATIONS */}
      <div
        style={{
          marginTop: "30px",
          background: "#111827",
          padding: "25px",
          borderRadius: "20px",
          border:
            "1px solid #06b6d4",
        }}
      >

        <h2
          style={{
            color: "#06b6d4",
            marginBottom: "20px",
          }}
        >
          AI Security Recommendations
        </h2>

        {recommendations.map(

          (
            recommendation,
            index
          ) => (

            <div
              key={index}
              style={{
                background:
                  "#1e293b",
                padding: "15px",
                borderRadius:
                  "12px",
                marginBottom:
                  "15px",
              }}
            >
              ✔ {recommendation}
            </div>
          )
        )}

      </div>

      {/* CHARTS */}
      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns:
            "1fr 2fr",
          gap: "20px",
        }}
      >

        <RiskMeter
          score={
            riskData.score
          }
          riskLevel={
            riskData.riskLevel
          }
        />

        <ThreatChart
          analytics={analytics}
        />

      </div>

      {/* RECENT THREATS */}
      <div
        style={{
          marginTop: "30px",
          background: "#111827",
          padding: "25px",
          borderRadius: "20px",
          border:
            "1px solid #06b6d4",
        }}
      >

        <h2
          style={{
            color: "#06b6d4",
            marginBottom: "20px",
          }}
        >
          Recent Threat Activity
        </h2>

        {analytics?.recentScans
          ?.length > 0 ? (

          analytics.recentScans.map(

            (
              scan,
              index
            ) => (

              <div
                key={index}
                style={{
                  background:
                    "#1e293b",
                  padding: "20px",
                  borderRadius:
                    "12px",
                  marginBottom:
                    "15px",
                }}
              >

                <h3>
                  {scan.url}
                </h3>

                <p>

                  Threat Level:

                  <span
                    style={{
                      marginLeft:
                        "10px",
                      color:
                        getThreatColor(
                          scan.threatLevel
                        ),
                      fontWeight:
                        "bold",
                    }}
                  >
                    {
                      scan.threatLevel
                    }
                  </span>

                </p>

                <p>
                  User:
                  {" "}
                  {
                    scan.userEmail
                  }
                </p>

                <p>
                  Malicious:
                  {" "}
                  {
                    scan.maliciousCount
                  }
                </p>

                <p>
                  Suspicious:
                  {" "}
                  {
                    scan.suspiciousCount
                  }
                </p>

              </div>
            )
          )

        ) : (

          <p>
            No Recent Scan Data
          </p>
        )}

      </div>

      {/* ALERT */}
      <ThreatAlert
        threatLevel={
          riskData.riskLevel
        }
      />

      {/* LIVE FEED */}
      <LiveThreatFeed
        liveThreats={
          analytics?.liveThreats || []
        }
      />

      {/* SYSTEM STATUS */}
      <SystemStatus />

    </DashboardLayout>
  );
}

export default Dashboard;
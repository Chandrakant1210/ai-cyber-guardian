import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import RiskMeter from "../components/RiskMeter";

import ThreatChart from "../charts/ThreatChart";

import { analyzeRisk } from "../services/riskService";

import LiveThreatFeed
from "../components/LiveThreatFeed";

import SystemStatus
from "../components/SystemStatus";


import {
  getDashboardStats,
} from "../services/analyticsService";

import {
  getRecommendations,
} from "../services/recommendationService";

import ThreatAlert
from "../components/ThreatAlert";



function Dashboard() {

  const [riskData, setRiskData] =
    useState(null);

  const [analytics, setAnalytics] =
    useState(null);

  const [recommendations,
    setRecommendations] =
    useState([]);

  useEffect(() => {

    fetchRiskAnalysis();

    fetchAnalytics();

  }, []);

  // FETCH AI RISK
  const fetchRiskAnalysis = async () => {

    try {

      const response = await analyzeRisk({
        breachCount: 3,
        maliciousUrls: 2,
        phishingAttempts: 4,
        darkWebExposure: 1,
      });

      setRiskData(response.riskAnalysis);

      // FETCH AI RECOMMENDATIONS
      const recommendationResponse =
        await getRecommendations({

          riskLevel:
            response.riskAnalysis.riskLevel,

          maliciousCount: 2,

          suspiciousCount: 3,
        });

      setRecommendations(
        recommendationResponse
          .recommendations
      );

    } catch (error) {

      console.log(error);
    }
  };

  // FETCH ANALYTICS
  const fetchAnalytics = async () => {

    try {

      const response =
        await getDashboardStats();

      setAnalytics(response.analytics);

    } catch (error) {

      console.log(error);
    }
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
            border: "1px solid #ef4444",
            boxShadow:
              "0 0 15px rgba(239,68,68,0.3)",
          }}
        >

          <h2>Cyber Risk Score</h2>

          <h1
            style={{
              color: "#ef4444",
              fontSize: "55px",
              margin: 0,
            }}
          >
            {riskData
              ? riskData.score
              : "..."}%
          </h1>

          <p>
            {riskData
              ? riskData.riskLevel
              : "Analyzing"}
          </p>

        </div>

        {/* TOTAL SCANS */}
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
            border: "1px solid #facc15",
            boxShadow:
              "0 0 15px rgba(250,204,21,0.3)",
          }}
        >

          <h2>Total Threat Scans</h2>

          <h1
            style={{
              color: "#facc15",
              fontSize: "55px",
              margin: 0,
            }}
          >
            {analytics
              ? analytics.totalScans
              : "..."}
          </h1>

          <p>Threat Intelligence Records</p>

        </div>

        {/* SUSPICIOUS */}
        <div
          style={{
            background: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
            border: "1px solid #06b6d4",
            boxShadow:
              "0 0 15px rgba(6,182,212,0.3)",
          }}
        >

          <h2>Suspicious Threats</h2>

          <h1
            style={{
              color: "#06b6d4",
              fontSize: "55px",
              margin: 0,
            }}
          >
            {analytics
              ? analytics.suspiciousCount
              : "..."}
          </h1>

          <p>Potential Threat Activity</p>

        </div>

      </div>

      {/* AI PANEL */}
      <div
        style={{
          marginTop: "30px",
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
          AI Cyber Intelligence
        </h2>

        <div style={{ lineHeight: "2" }}>

          <p>
            ✔ AI risk analysis completed successfully.
          </p>

          <p>
            ✔ Real-time cybersecurity monitoring active.
          </p>

          <p>
            ✔ Threat exposure patterns detected.
          </p>

          <p>
            ✔ Malicious website analytics generated.
          </p>

          <p>
            ✔ Risk classification:
            {" "}
            <span
              style={{
                color:
                  riskData?.riskLevel ===
                  "CRITICAL"
                    ? "#ef4444"
                    : riskData?.riskLevel ===
                      "HIGH"
                    ? "#f97316"
                    : "#22c55e",

                fontWeight: "bold",
              }}
            >
              {riskData
                ? riskData.riskLevel
                : "Loading"}
            </span>
          </p>

        </div>

      </div>

      {/* AI RECOMMENDATIONS */}
      <div
        style={{
          marginTop: "30px",
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
          AI Security Recommendations
        </h2>

        {recommendations.map(
          (recommendation, index) => (

            <div
              key={index}
              style={{
                background: "#1e293b",
                padding: "15px",
                borderRadius: "12px",
                marginBottom: "15px",
                borderLeft:
                  "5px solid #06b6d4",
              }}
            >

              <p
                style={{
                  margin: 0,
                  fontSize: "16px",
                }}
              >
                ✔ {recommendation}
              </p>

            </div>

          )
        )}

      </div>

      {/* ANALYTICS */}
      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns:
            "1fr 2fr",
          gap: "20px",
        }}
      >

        <RiskMeter />

        <ThreatChart />

      </div>

      {/* RECENT THREATS */}
      <div
        style={{
          marginTop: "30px",
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
          Recent Threat Activity
        </h2>

        {analytics &&
          analytics.recentScans.map(
            (scan, index) => (

              <div
                key={index}
                style={{
                  background: "#1e293b",
                  padding: "20px",
                  borderRadius: "12px",
                  marginBottom: "15px",
                }}
              >

                <h3>{scan.url}</h3>

                <p>
                  Threat Level:
                  {" "}
                  <span
                    style={{
                      color:
                        scan.threatLevel ===
                        "CRITICAL"
                          ? "#ef4444"
                          : scan.threatLevel ===
                            "DANGEROUS"
                          ? "#f97316"
                          : scan.threatLevel ===
                            "SUSPICIOUS"
                          ? "#facc15"
                          : "#22c55e",

                      fontWeight: "bold",
                    }}
                  >
                    {scan.threatLevel}
                  </span>
                </p>

                <p>
                  Malicious Engines:
                  {" "}
                  {scan.maliciousCount}
                </p>

                <p>
                  Suspicious Engines:
                  {" "}
                  {scan.suspiciousCount}
                </p>

              </div>

            )
          )}

      </div>
      <ThreatAlert
  threatLevel={
    riskData?.riskLevel
  }
/>

<LiveThreatFeed />

<SystemStatus />

    </DashboardLayout>

    
  );
}

export default Dashboard;
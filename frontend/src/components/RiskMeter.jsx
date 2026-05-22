import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";

import {
  analyzeRisk,
} from "../services/riskService";

function RiskMeter() {

  const [riskData, setRiskData] =
    useState(null);

  useEffect(() => {

    fetchRisk();

  }, []);

  const fetchRisk = async () => {

    try {

      const response =
        await analyzeRisk({
          breachCount: 3,
          maliciousUrls: 2,
          phishingAttempts: 4,
          darkWebExposure: 1,
        });

      setRiskData(
        response.riskAnalysis
      );

    } catch (error) {

      console.log(error);
    }
  };

  const score =
    riskData?.score || 0;

  const riskLevel =
    riskData?.riskLevel || "Loading";

  const riskColor =
    riskLevel === "CRITICAL"
      ? "#ef4444"
      : riskLevel === "HIGH"
      ? "#f97316"
      : riskLevel === "MEDIUM"
      ? "#facc15"
      : "#22c55e";

  const chartData = [
    {
      name: "Risk",
      value: score,
      fill: riskColor,
    },
  ];

  return (

    <div
      style={{
        background: "#111827",
        padding: "20px",
        borderRadius: "20px",
        border: "1px solid #06b6d4",
        height: "400px",
        position: "relative",
      }}
    >

      <h2
        style={{
          color: "#06b6d4",
          marginBottom: "10px",
        }}
      >
        AI Cyber Risk Meter
      </h2>

      <div
        style={{
          width: "100%",
          height: "300px",
          position: "relative",
        }}
      >

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <RadialBarChart
            cx="50%"
            cy="90%"
            innerRadius="70%"
            outerRadius="85%"
            barSize={25}
            data={chartData}
            startAngle={180}
            endAngle={0}
          >

            <RadialBar
              background
              dataKey="value"
              cornerRadius={15}
            />

          </RadialBarChart>

        </ResponsiveContainer>

        {/* CENTER TEXT */}
        <div
          style={{
            position: "absolute",
            top: "90%",
            left: "50%",
            transform:
              "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >

          <h1
            style={{
              color: riskColor,
              fontSize: "55px",
              margin: 0,
              fontWeight: "bold",
            }}
          >
            {score}%
          </h1>

          <p
            style={{
              color: riskColor,
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            {riskLevel}
          </p>

        </div>

      </div>

    </div>
  );
}

export default RiskMeter;
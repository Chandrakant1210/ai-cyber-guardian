import {
  useEffect,
  useState,
} from "react";

function SystemStatus() {

  const [time, setTime] =
    useState("");

  useEffect(() => {

    const interval =
      setInterval(() => {

        const now =
          new Date();

        setTime(
          now.toLocaleTimeString()
        );

      }, 1000);

    return () =>
      clearInterval(interval);

  }, []);

  return (

    <div
      style={{
        background: "#111827",

        padding: "18px 25px",
        margin:"15px",

        borderRadius: "15px",

        border:
          "1px solid #06b6d4",

        marginBottom: "25px",

        display: "flex",

        justifyContent:
          "space-between",

        alignItems: "center",

        flexWrap: "wrap",

        gap: "15px",

        boxShadow:
          "0 0 20px rgba(6,182,212,0.2)",
      }}
    >

      <div>

        <h3
          style={{
            color: "#22c55e",

            margin: 0,
          }}
        >
          ● SYSTEM STATUS: ACTIVE
        </h3>

        <p
          style={{
            margin: "5px 0 0 0",

            color: "#94a3b8",
          }}
        >
          AI Threat Monitoring Online
        </p>

      </div>

      <div
        style={{
          textAlign: "right",
        }}
      >

        <h2
          style={{
            color: "#06b6d4",

            margin: 0,
          }}
        >
          {time}
        </h2>

        <p
          style={{
            margin: 0,

            color: "#94a3b8",
          }}
        >
          SOC Monitoring Time
        </p>

      </div>

    </div>
  );
}

export default SystemStatus;
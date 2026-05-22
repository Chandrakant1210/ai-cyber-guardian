function ThreatAlert({
  threatLevel,
}) {

  if (
    threatLevel !== "CRITICAL" &&
    threatLevel !== "DANGEROUS"
  ) {
    return null;
  }

  return (

    <div
      style={{
        background:
          threatLevel === "CRITICAL"
            ? "#7f1d1d"
            : "#78350f",

        border:
          threatLevel === "CRITICAL"
            ? "2px solid #ef4444"
            : "2px solid #f97316",

        padding: "25px",
        margin:"10px",

        borderRadius: "20px",

        marginBottom: "25px",

        boxShadow:
          threatLevel === "CRITICAL"
            ? "0 0 25px rgba(239,68,68,0.5)"
            : "0 0 25px rgba(249,115,22,0.5)",
      }}
    >

      <h1
        style={{
          color:
            threatLevel === "CRITICAL"
              ? "#ef4444"
              : "#f97316",

          marginBottom: "15px",
        }}
      >
        ⚠ Emergency Security Alert
      </h1>

      <div
        style={{
          lineHeight: "2",
          fontSize: "16px",
        }}
      >

        <p>
          ✔ Dangerous cybersecurity
          activity detected.
        </p>

        <p>
          ✔ Avoid suspicious websites
          immediately.
        </p>

        <p>
          ✔ Change sensitive passwords.
        </p>

        <p>
          ✔ Enable Two-Factor
          Authentication.
        </p>

        <p>
          ✔ Monitor account activity.
        </p>

      </div>

    </div>
  );
}

export default ThreatAlert;
function Navbar() {

  const user = JSON.parse(localStorage.getItem("user"));

  const firstLetter =
    user?.name?.charAt(0).toUpperCase() || "U";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  return (
    <div
      style={{
        background: "#111827",
        padding: "18px 25px",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
        border: "1px solid #1e293b",
        boxShadow: "0 0 15px rgba(6,182,212,0.1)",
      }}
    >
      {/* LEFT */}
      <div>
        <h2
          style={{
            color: "#06b6d4",
            margin: 0,
            fontSize: "28px",
          }}
        >
          AI Cyber Intelligence Center
        </h2>

        <p
          style={{
            margin: 0,
            marginTop: "5px",
            color: "#94a3b8",
            fontSize: "14px",
          }}
        >
          Real-Time Threat Monitoring System
        </p>
      </div>

      {/* RIGHT */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* LIVE THREAT */}
        <div
          style={{
            background: "#ef4444",
            padding: "10px 18px",
            borderRadius: "20px",
            fontWeight: "bold",
            boxShadow: "0 0 12px rgba(239,68,68,0.4)",
          }}
        >
          LIVE THREATS: 5
        </div>

        {/* PROFILE */}
        <div
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            background: "#06b6d4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            fontWeight: "bold",
            fontSize: "18px",
            boxShadow: "0 0 12px rgba(6,182,212,0.5)",
          }}
        >
          {firstLetter}
        </div>

        {/* LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          style={{
            background: "#ef4444",
            border: "none",
            padding: "12px 18px",
            borderRadius: "10px",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "15px",
            boxShadow: "0 0 10px rgba(239,68,68,0.3)",
            transition: "0.3s",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
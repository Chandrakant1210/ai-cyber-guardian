import {
  FaShieldAlt,
  FaBug,
  FaGlobe,
  FaRobot,
  FaExclamationTriangle,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        background: "#111827",
        color: "white",
        height: "100vh",
        padding: "20px",
        borderRight: "1px solid #1e293b",
      }}
    >
      <h2
        style={{
          color: "#06b6d4",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        CYBER GUARDIAN
      </h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Link className="nav-link" to="/dashboard">
          <FaShieldAlt /> Dashboard
        </Link>

        <Link className="nav-link" to="/scanner">
          <FaBug /> Leak Scanner
        </Link>

        <Link className="nav-link" to="/darkweb">
          <FaGlobe /> Dark Web
        </Link>

        <Link className="nav-link" to="/browser-monitor">
          <FaExclamationTriangle /> Browser Monitor
        </Link>

        <Link className="nav-link" to="/recommendations">
          <FaRobot /> AI Recommendations
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
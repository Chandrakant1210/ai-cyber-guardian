import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const data = await loginUser(formData);

    // SAVE TOKEN
    localStorage.setItem(
      "token",
      data.token
    );

    // SAVE USER
    localStorage.setItem(
      "user",
      JSON.stringify(data.user)
    );

    alert("Login Successful");

    navigate("/dashboard");

  } catch (error) {

    alert("Invalid Credentials");
  }
};
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        background: "#0f172a",
        color: "white",
      }}
    >
      {/* LEFT SIDE */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          background:
            "linear-gradient(to bottom right, #111827, #0f172a)",
        }}
      >
        <h1
          style={{
            fontSize: "55px",
            color: "#06b6d4",
            marginBottom: "20px",
          }}
        >
          AI Cyber Guardian
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#cbd5e1",
            lineHeight: "1.8",
            maxWidth: "500px",
          }}
        >
          Advanced AI-powered cybersecurity intelligence platform
          for dark web monitoring, breach detection, browser
          protection, and digital identity defense.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "450px",
            background: "#111827",
            padding: "40px",
            borderRadius: "25px",
            border: "1px solid #06b6d4",
            boxShadow: "0 0 25px rgba(6,182,212,0.2)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "#06b6d4",
              fontSize: "35px",
            }}
          >
            Secure Login
          </h2>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  padding: "15px",
                  marginTop: "10px",
                  borderRadius: "10px",
                  border: "1px solid #1e293b",
                  background: "#1e293b",
                  color: "white",
                  fontSize: "16px",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ marginBottom: "25px" }}>
              <label>Password</label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                style={{
                  width: "100%",
                  padding: "15px",
                  marginTop: "10px",
                  borderRadius: "10px",
                  border: "1px solid #1e293b",
                  background: "#1e293b",
                  color: "white",
                  fontSize: "16px",
                  outline: "none",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "12px",
                border: "none",
                background: "#06b6d4",
                color: "black",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 0 15px rgba(6,182,212,0.4)",
              }}
            >
              Access Intelligence System
            </button>
          </form>

          <p
            style={{
              marginTop: "25px",
              textAlign: "center",
              color: "#94a3b8",
            }}
          >
            Don’t have an account?{" "}
            <Link
              to="/signup"
              style={{
                color: "#06b6d4",
                textDecoration: "none",
              }}
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
import { Link } from "react-router-dom";
import { useState } from "react";
import { signupUser } from "../services/authService";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
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

    const data = await signupUser(formData);

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

    alert("Account Created Successfully");

    window.location.href = "/dashboard";

  } catch (error) {

    alert("Signup Failed");
  }
};
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "#111827",
          padding: "40px",
          borderRadius: "25px",
          border: "1px solid #06b6d4",
          boxShadow: "0 0 25px rgba(6,182,212,0.2)",
          color: "white",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#06b6d4",
            marginBottom: "30px",
          }}
        >
          Create Secure Account
        </h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
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

          <div style={{ marginBottom: "20px" }}>
            <label>Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create strong password"
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
              transition: "0.3s",
            }}
          >
            Create Account
          </button>
        </form>

        <p
          style={{
            marginTop: "25px",
            textAlign: "center",
            color: "#94a3b8",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/"
            style={{
              color: "#06b6d4",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
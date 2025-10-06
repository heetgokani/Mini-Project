import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }

      // ✅ Save login state
      localStorage.setItem("isLoggedIn", "true");

      toast.success("Login successful 🗸", {
        position: "top-right",
        autoClose: 2000,
      });

      // Redirect with state to trigger toast in Home
      setTimeout(() => {
        navigate("/", { state: { loginSuccess: true } });
      }, 1500);
    } catch (err) {
      toast.error("Invalid credentials ❌", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="lr-wrapper">
      <div className="lr-card">
        <img
          src="https://www.logopeople.in/wp-content/uploads/2013/01/government-of-india-1024x1024.jpg"
          className="logimg"
          alt="logo"
        />
        <h2 className="lr-title">Login</h2>
        <form onSubmit={handleLogin} className="lr-form">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="lr-input"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="lr-input"
          />

          <button type="submit" className="lr-btn">
            Login
          </button>
        </form>
        <p className="lr-footer">
          Don’t have an account?{" "}
          <span className="lr-link" onClick={() => navigate("/register")}>
            Register
          </span>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
}

export default LoginPage;

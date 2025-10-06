import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./RegisterPage.css";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        throw new Error("Registration failed");
      }

      toast.success("Registration successful 🗸 Please Login", {
        position: "top-right",
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate("/login"); // redirect after toast
      }, 1500);
    } catch (err) {
      toast.error("Could not register user ❌", {
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
        <h2 className="lr-title">Register</h2>
        <form onSubmit={handleRegister} className="lr-form">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="lr-input"
          />

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
            Register
          </button>
        </form>
        <p className="lr-footer">
          Already have an account?{" "}
          <span className="lr-link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>

      {/* ✅ Toast container */}
      <ToastContainer />
    </div>
  );
}

export default RegisterPage;
